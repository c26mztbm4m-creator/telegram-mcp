import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from "zod";
import TelegramBot from 'node-telegram-bot-api';

// Import all tools
import { sendMessage, forwardMessage, deleteMessage } from './tools/basic-messaging.js';
import { sendPhoto, sendDocument, sendVideo, sendAudio, sendVoice } from './tools/media.js';
import { sendLocation, sendContact } from './tools/location-contact.js';
import { editMessageText, editMessageCaption } from './tools/message-editing.js';



// Telegram Bot setup
const token = process.env.TELEGRAM_BOT_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';
const bot = new TelegramBot(token, { polling: true });

const createServer = async () => {
  const server = new McpServer({
    name: "telegram-mcp-server",
    version: "1.0.0",
  });

  // Initialize all tool modules with bot instance
  const toolModules = [
    { sendMessage, forwardMessage, deleteMessage },
    { sendPhoto, sendDocument, sendVideo, sendAudio, sendVoice },
    { sendLocation, sendContact },
    { editMessageText, editMessageCaption }
  ];

  // Register all tools
  const allTools = [
    sendMessage, forwardMessage, deleteMessage,
    sendPhoto, sendDocument, sendVideo, sendAudio, sendVoice,
    sendLocation, sendContact,
    editMessageText, editMessageCaption
  ];

  // Initialize bot instance for all tools (they all share the same bot instance)
  let botInstance = bot;

  for (const tool of allTools) {
    server.tool(tool.name, tool.description, tool.input, async (params) => {
      // Pass bot instance to tool run function
      const originalRun = tool.run;
      // Create a context where botInstance is available
      const toolContext = {
        ...tool,
        run: originalRun
      };
      // Set global bot instance for tools
      global.botInstance = botInstance;
      return await originalRun(params);
    });
    console.log(`Loaded tool: ${tool.name}`);
  }

  return server;
}

// Create and start the server
createServer().then(server => {
    const transport = new StdioServerTransport();
    server.connect(transport).then(() => {
        console.log("Telegram MCP Server started");

        bot.on('message', async (msg) => {
            const chatId = msg.chat.id;
            const text = msg.text;

            if (!text) {
                bot.sendMessage(chatId, "I can only process text messages.");
                return;
            }

            if (text.startsWith('/send_message')) {
                const messageToSend = text.substring('/send_message'.length).trim();
                try {
                    const { result } = await server.callTool('telegram_sendMessage', { chatId: chatId.toString(), text: messageToSend });
                    if (!result.success) {
                        bot.sendMessage(chatId, `Tool call failed: ${result.error}`);
                    }
                } catch (error) {
                    console.error('Tool call error:', error);
                    bot.sendMessage(chatId, "Sorry, I couldn't process that command.");
                }
            } else if (text.startsWith('/send_photo')) {
                const photoUrl = text.substring('/send_photo'.length).trim();
                try {
                    const { result } = await server.callTool('telegram_sendPhoto', { chatId: chatId.toString(), photo: photoUrl });
                    if (!result.success) {
                        bot.sendMessage(chatId, `Tool call failed: ${result.error}`);
                    }
                } catch (error) {
                    console.error('Tool call error:', error);
                    bot.sendMessage(chatId, "Sorry, I couldn't process that command.");
                }
            } else {
                bot.sendMessage(chatId, `Received your message: ${text}. Try '/send_message <text>' or '/send_photo <url>'.`);
            }
        });

        console.log('Telegram Bot is listening for messages...');

    }).catch((err) => {
        console.error("Error starting server:", err);
    });
}).catch(err => {
    console.error("Error creating server:", err);
});