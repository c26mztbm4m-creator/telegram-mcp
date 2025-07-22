// 基础消息发送工具

export const sendMessage = {
    name: 'telegram_sendMessage',
    description: 'Sends a text message to a specified Telegram chat.',
    input: {
        type: 'object',
        properties: {
            chatId: {
                type: 'string',
                description: 'Unique identifier for the target chat.',
            },
            text: {
                type: 'string',
                description: 'Text of the message to be sent, 1-4096 characters after entities parsing.',
            },
            parseMode: {
                type: 'string',
                description: 'Mode for parsing entities in the message text.',
                enum: ['Markdown', 'MarkdownV2', 'HTML'],
            },
            disableWebPagePreview: {
                type: 'boolean',
                description: 'Disables link previews for links in this message.',
            },
            disableNotification: {
                type: 'boolean',
                description: 'Sends the message silently.',
            },
        },
        required: ['chatId', 'text'],
    },
    run: async ({ chatId, text, parseMode, disableWebPagePreview, disableNotification }) => {
        const botInstance = global.botInstance;
        if (!botInstance) {
            return { success: false, error: 'Bot not initialized.' };
        }
        try {
            const options = {};
            if (parseMode) options.parse_mode = parseMode;
            if (disableWebPagePreview) options.disable_web_page_preview = disableWebPagePreview;
            if (disableNotification) options.disable_notification = disableNotification;
            await botInstance.sendMessage(chatId, text, options);
            return { success: true, message: `Message sent to ${chatId}.` };
        } catch (error) {
            console.error('Error sending message:', error);
            return { success: false, error: error.message };
        }
    },
};

export const forwardMessage = {
    name: 'telegram_forwardMessage',
    description: 'Forwards a message from one chat to another.',
    input: {
        type: 'object',
        properties: {
            chatId: {
                type: 'string',
                description: 'Unique identifier for the target chat.',
            },
            fromChatId: {
                type: 'string',
                description: 'Unique identifier for the chat where the original message was sent.',
            },
            messageId: {
                type: 'number',
                description: 'Message identifier in the chat specified in from_chat_id.',
            },
            protectContent: {
                type: 'boolean',
                description: 'Protects the contents of the forwarded message from forwarding and saving.',
            },
        },
        required: ['chatId', 'fromChatId', 'messageId'],
    },
    run: async ({ chatId, fromChatId, messageId, protectContent }) => {
        const botInstance = global.botInstance;
        if (!botInstance) {
            return { success: false, error: 'Bot not initialized.' };
        }
        try {
            const options = {};
            if (protectContent) options.protect_content = protectContent;
            await botInstance.forwardMessage(chatId, fromChatId, messageId, options);
            return { success: true, message: `Message forwarded to ${chatId}.` };
        } catch (error) {
            console.error('Error forwarding message:', error);
            return { success: false, error: error.message };
        }
    },
};

export const deleteMessage = {
    name: 'telegram_deleteMessage',
    description: 'Deletes a message from a chat.',
    input: {
        type: 'object',
        properties: {
            chatId: {
                type: 'string',
                description: 'Unique identifier for the target chat.',
            },
            messageId: {
                type: 'number',
                description: 'Identifier of the message to delete.',
            },
        },
        required: ['chatId', 'messageId'],
    },
    run: async ({ chatId, messageId }) => {
        const botInstance = global.botInstance;
        if (!botInstance) {
            return { success: false, error: 'Bot not initialized.' };
        }
        try {
            await botInstance.deleteMessage(chatId, messageId);
            return { success: true, message: `Message ${messageId} deleted from ${chatId}.` };
        } catch (error) {
            console.error('Error deleting message:', error);
            return { success: false, error: error.message };
        }
    },
};