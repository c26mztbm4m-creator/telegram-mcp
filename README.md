# Telegram MCP Server

A Model Context Protocol (MCP) server that provides comprehensive Telegram Bot API integration. This server enables AI assistants to interact with Telegram through a standardized interface.

## Features

### Core Messaging
- **Send Messages** - Send text messages with formatting support
- **Send Photos** - Share images with captions
- **Send Documents** - Upload and share files
- **Send Videos** - Share video content with metadata
- **Forward Messages** - Forward messages between chats
- **Delete Messages** - Remove messages from chats

### Chat Management
- **Get Chat Info** - Retrieve detailed chat information and permissions

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd telegram-mcp
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

## Usage

### Local Development (Stdio)

1. Start the MCP server:
```bash
npm start
```

2. Configure your Claude Desktop with the following MCP server configuration:
```json
{
  "mcpServers": {
    "telegram-mcp": {
      "command": "node",
      "args": ["path/to/telegram-mcp/build/index.js"]
    }
  }
}
```

### SSE Deployment (Supergateway)

1. Start the SSE server:
```bash
npm run sse
```

2. Configure your Claude Desktop with SSE configuration:
```json
{
  "mcpServers": {
    "telegram-mcp": {
      "type": "sse",
      "url": "http://localhost:3100/sse",
      "timeout": 600
    }
  }
}
```

## Available Tools

### send_message
Send a text message to a Telegram chat.

**Parameters:**
- `token` (string, required) - Telegram bot token
- `chatId` (string|number, required) - Chat ID or username
- `text` (string, required) - Message text
- `parseMode` (string, optional) - HTML, Markdown, or MarkdownV2
- `disableWebPagePreview` (boolean, optional) - Disable link previews
- `disableNotification` (boolean, optional) - Send silently
- `replyToMessageId` (number, optional) - Reply to specific message

### send_photo
Send a photo to a Telegram chat.

**Parameters:**
- `token` (string, required) - Telegram bot token
- `chatId` (string|number, required) - Chat ID or username
- `photo` (string, required) - Photo file path, URL, or file_id
- `caption` (string, optional) - Photo caption
- `parseMode` (string, optional) - Caption formatting
- `disableNotification` (boolean, optional) - Send silently
- `replyToMessageId` (number, optional) - Reply to specific message

### send_document
Send a document to a Telegram chat.

**Parameters:**
- `token` (string, required) - Telegram bot token
- `chatId` (string|number, required) - Chat ID or username
- `document` (string, required) - Document file path, URL, or file_id
- `caption` (string, optional) - Document caption
- `parseMode` (string, optional) - Caption formatting
- `filename` (string, optional) - Custom filename
- `disableNotification` (boolean, optional) - Send silently
- `replyToMessageId` (number, optional) - Reply to specific message

### send_video
Send a video to a Telegram chat.

**Parameters:**
- `token` (string, required) - Telegram bot token
- `chatId` (string|number, required) - Chat ID or username
- `video` (string, required) - Video file path, URL, or file_id
- `duration` (number, optional) - Video duration in seconds
- `width` (number, optional) - Video width
- `height` (number, optional) - Video height
- `caption` (string, optional) - Video caption
- `parseMode` (string, optional) - Caption formatting
- `supportsStreaming` (boolean, optional) - Enable streaming
- `disableNotification` (boolean, optional) - Send silently
- `replyToMessageId` (number, optional) - Reply to specific message

### forward_message
Forward a message from one chat to another.

**Parameters:**
- `token` (string, required) - Telegram bot token
- `chatId` (string|number, required) - Destination chat ID
- `fromChatId` (string|number, required) - Source chat ID
- `messageId` (number, required) - Message ID to forward
- `disableNotification` (boolean, optional) - Send silently

### delete_message
Delete a message from a Telegram chat.

**Parameters:**
- `token` (string, required) - Telegram bot token
- `chatId` (string|number, required) - Chat ID or username
- `messageId` (number, required) - Message ID to delete

### get_chat
Get information about a Telegram chat.

**Parameters:**
- `token` (string, required) - Telegram bot token
- `chatId` (string|number, required) - Chat ID or username

## Getting a Telegram Bot Token

1. Message [@BotFather](https://t.me/botfather) on Telegram
2. Send `/newbot` command
3. Follow the instructions to create your bot
4. Copy the bot token provided by BotFather
5. Use this token in the MCP tool calls

## Development

### Project Structure
```
src/
├── index.ts          # MCP server entry point
└── tools/           # Business tool modules
    ├── sendMessage.ts
    ├── sendPhoto.ts
    ├── sendDocument.ts
    ├── sendVideo.ts
    ├── getChat.ts
    ├── forwardMessage.ts
    └── deleteMessage.ts
```

### Adding New Tools

1. Create a new tool file in `src/tools/`
2. Follow the existing tool pattern with name, description, parameters, and run method
3. Import and register the tool in `src/index.ts`
4. Add the tool to both the ListToolsRequestSchema and CallToolRequestSchema handlers

### Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run dev` - Watch mode for development
- `npm start` - Start the MCP server (stdio mode)
- `npm run sse` - Start SSE server on port 3100

## License

Apache-2.0

## Author

**Xingyu Chen**
- Email: guangxiangdebizi@gmail.com
- LinkedIn: [Xingyu Chen](https://www.linkedin.com/in/xingyu-chen-b5b3b0313/)
- GitHub: [guangxiangdebizi](https://github.com/guangxiangdebizi/)
- NPM: [xingyuchen](https://www.npmjs.com/~xingyuchen)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Roadmap

See [telegram-api-planning.md](./telegram-api-planning.md) for the complete feature roadmap and implementation priorities.