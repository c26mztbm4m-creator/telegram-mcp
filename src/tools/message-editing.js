// 消息编辑工具

export const editMessageText = {
    name: 'telegram_editMessageText',
    description: 'Edits text and game messages.',
    input: {
        type: 'object',
        properties: {
            chatId: {
                type: 'string',
                description: 'Unique identifier for the target chat.',
            },
            messageId: {
                type: 'number',
                description: 'Identifier of the message to edit.',
            },
            text: {
                type: 'string',
                description: 'New text of the message, 1-4096 characters after entities parsing.',
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
        },
        required: ['chatId', 'messageId', 'text'],
    },
    run: async ({ chatId, messageId, text, parseMode, disableWebPagePreview }) => {
        const botInstance = global.botInstance;
        if (!botInstance) {
            return { success: false, error: 'Bot not initialized.' };
        }
        try {
            const options = {};
            if (parseMode) options.parse_mode = parseMode;
            if (disableWebPagePreview) options.disable_web_page_preview = disableWebPagePreview;
            await botInstance.editMessageText(text, { chat_id: chatId, message_id: messageId, ...options });
            return { success: true, message: `Message ${messageId} edited in ${chatId}.` };
        } catch (error) {
            console.error('Error editing message text:', error);
            return { success: false, error: error.message };
        }
    },
};

export const editMessageCaption = {
    name: 'telegram_editMessageCaption',
    description: 'Edits captions of messages.',
    input: {
        type: 'object',
        properties: {
            chatId: {
                type: 'string',
                description: 'Unique identifier for the target chat.',
            },
            messageId: {
                type: 'number',
                description: 'Identifier of the message to edit.',
            },
            caption: {
                type: 'string',
                description: 'New caption of the message, 0-1024 characters after entities parsing.',
            },
            parseMode: {
                type: 'string',
                description: 'Mode for parsing entities in the message caption.',
                enum: ['Markdown', 'MarkdownV2', 'HTML'],
            },
        },
        required: ['chatId', 'messageId'],
    },
    run: async ({ chatId, messageId, caption, parseMode }) => {
        const botInstance = global.botInstance;
        if (!botInstance) {
            return { success: false, error: 'Bot not initialized.' };
        }
        try {
            const options = { chat_id: chatId, message_id: messageId };
            if (caption) options.caption = caption;
            if (parseMode) options.parse_mode = parseMode;
            await botInstance.editMessageCaption(options);
            return { success: true, message: `Message caption edited in ${chatId}.` };
        } catch (error) {
            console.error('Error editing message caption:', error);
            return { success: false, error: error.message };
        }
    },
};