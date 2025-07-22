// 媒体文件发送工具

export const sendPhoto = {
    name: 'telegram_sendPhoto',
    description: 'Sends a photo to a specified Telegram chat.',
    input: {
        type: 'object',
        properties: {
            chatId: {
                type: 'string',
                description: 'Unique identifier for the target chat.',
            },
            photo: {
                type: 'string',
                description: 'URL or file path of the photo to send.',
            },
            caption: {
                type: 'string',
                description: 'Photo caption (may also be used when resending photos by file_id), 0-1024 characters after entities parsing.',
            },
            parseMode: {
                type: 'string',
                description: 'Mode for parsing entities in the photo caption.',
                enum: ['Markdown', 'MarkdownV2', 'HTML'],
            },
        },
        required: ['chatId', 'photo'],
    },
    run: async ({ chatId, photo, caption, parseMode }) => {
        const botInstance = global.botInstance;
        if (!botInstance) {
            return { success: false, error: 'Bot not initialized.' };
        }
        try {
            const options = {};
            if (caption) options.caption = caption;
            if (parseMode) options.parse_mode = parseMode;
            await botInstance.sendPhoto(chatId, photo, options);
            return { success: true, message: `Photo sent to ${chatId}.` };
        } catch (error) {
            console.error('Error sending photo:', error);
            return { success: false, error: error.message };
        }
    },
};

export const sendDocument = {
    name: 'telegram_sendDocument',
    description: 'Sends a document to a specified Telegram chat.',
    input: {
        type: 'object',
        properties: {
            chatId: {
                type: 'string',
                description: 'Unique identifier for the target chat.',
            },
            document: {
                type: 'string',
                description: 'URL or file path of the document to send.',
            },
            caption: {
                type: 'string',
                description: 'Document caption (0-1024 characters).',
            },
            parseMode: {
                type: 'string',
                description: 'Mode for parsing entities in the document caption.',
                enum: ['Markdown', 'MarkdownV2', 'HTML'],
            },
        },
        required: ['chatId', 'document'],
    },
    run: async ({ chatId, document, caption, parseMode }) => {
        const botInstance = global.botInstance;
        if (!botInstance) {
            return { success: false, error: 'Bot not initialized.' };
        }
        try {
            const options = {};
            if (caption) options.caption = caption;
            if (parseMode) options.parse_mode = parseMode;
            await botInstance.sendDocument(chatId, document, options);
            return { success: true, message: `Document sent to ${chatId}.` };
        } catch (error) {
            console.error('Error sending document:', error);
            return { success: false, error: error.message };
        }
    },
};

export const sendVideo = {
    name: 'telegram_sendVideo',
    description: 'Sends a video to a specified Telegram chat.',
    input: {
        type: 'object',
        properties: {
            chatId: {
                type: 'string',
                description: 'Unique identifier for the target chat.',
            },
            video: {
                type: 'string',
                description: 'URL or file path of the video to send.',
            },
            caption: {
                type: 'string',
                description: 'Video caption (0-1024 characters).',
            },
            duration: {
                type: 'number',
                description: 'Duration of sent video in seconds.',
            },
            width: {
                type: 'number',
                description: 'Video width.',
            },
            height: {
                type: 'number',
                description: 'Video height.',
            },
        },
        required: ['chatId', 'video'],
    },
    run: async ({ chatId, video, caption, duration, width, height }) => {
        const botInstance = global.botInstance;
        if (!botInstance) {
            return { success: false, error: 'Bot not initialized.' };
        }
        try {
            const options = {};
            if (caption) options.caption = caption;
            if (duration) options.duration = duration;
            if (width) options.width = width;
            if (height) options.height = height;
            await botInstance.sendVideo(chatId, video, options);
            return { success: true, message: `Video sent to ${chatId}.` };
        } catch (error) {
            console.error('Error sending video:', error);
            return { success: false, error: error.message };
        }
    },
};

export const sendAudio = {
    name: 'telegram_sendAudio',
    description: 'Sends an audio file to a specified Telegram chat.',
    input: {
        type: 'object',
        properties: {
            chatId: {
                type: 'string',
                description: 'Unique identifier for the target chat.',
            },
            audio: {
                type: 'string',
                description: 'URL or file path of the audio to send.',
            },
            caption: {
                type: 'string',
                description: 'Audio caption (0-1024 characters).',
            },
            duration: {
                type: 'number',
                description: 'Duration of the audio in seconds.',
            },
            performer: {
                type: 'string',
                description: 'Performer of the audio.',
            },
            title: {
                type: 'string',
                description: 'Track name.',
            },
        },
        required: ['chatId', 'audio'],
    },
    run: async ({ chatId, audio, caption, duration, performer, title }) => {
        const botInstance = global.botInstance;
        if (!botInstance) {
            return { success: false, error: 'Bot not initialized.' };
        }
        try {
            const options = {};
            if (caption) options.caption = caption;
            if (duration) options.duration = duration;
            if (performer) options.performer = performer;
            if (title) options.title = title;
            await botInstance.sendAudio(chatId, audio, options);
            return { success: true, message: `Audio sent to ${chatId}.` };
        } catch (error) {
            console.error('Error sending audio:', error);
            return { success: false, error: error.message };
        }
    },
};

export const sendVoice = {
    name: 'telegram_sendVoice',
    description: 'Sends a voice message to a specified Telegram chat.',
    input: {
        type: 'object',
        properties: {
            chatId: {
                type: 'string',
                description: 'Unique identifier for the target chat.',
            },
            voice: {
                type: 'string',
                description: 'URL or file path of the voice message to send.',
            },
            caption: {
                type: 'string',
                description: 'Voice message caption (0-1024 characters).',
            },
            duration: {
                type: 'number',
                description: 'Duration of the voice message in seconds.',
            },
        },
        required: ['chatId', 'voice'],
    },
    run: async ({ chatId, voice, caption, duration }) => {
        const botInstance = global.botInstance;
        if (!botInstance) {
            return { success: false, error: 'Bot not initialized.' };
        }
        try {
            const options = {};
            if (caption) options.caption = caption;
            if (duration) options.duration = duration;
            await botInstance.sendVoice(chatId, voice, options);
            return { success: true, message: `Voice message sent to ${chatId}.` };
        } catch (error) {
            console.error('Error sending voice:', error);
            return { success: false, error: error.message };
        }
    },
};