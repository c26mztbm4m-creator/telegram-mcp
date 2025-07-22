let botInstance;

export function init(bot) {
  botInstance = bot;
}

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
        description: 'Text of the message to be sent.',
      },
    },
    required: ['chatId', 'text'],
  },
  run: async ({ chatId, text }) => {
    if (!botInstance) {
      return { success: false, error: 'Bot not initialized.' };
    }
    try {
      await botInstance.sendMessage(chatId, text);
      return { success: true, message: `Message sent to ${chatId}.` };
    } catch (error) {
      console.error('Error sending message:', error);
      return { success: false, error: error.message };
    }
},
};

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

export const pinChatMessage = {
name: 'telegram_pinChatMessage',
description: 'Pins a message in a group, supergroup, or channel.',
input: {
    type: 'object',
    properties: {
        chatId: {
            type: 'string',
            description: 'Unique identifier for the target chat.',
        },
        messageId: {
            type: 'number',
            description: 'Identifier of a message to pin.',
        },
        disableNotification: {
            type: 'boolean',
            description: 'Pass True if it is not necessary to send a notification to all chat members about the new pinned message.',
        },
    },
    required: ['chatId', 'messageId'],
},
run: async ({ chatId, messageId, disableNotification }) => {
    if (!botInstance) {
        return { success: false, error: 'Bot not initialized.' };
    }
    try {
        const options = {};
        if (disableNotification) options.disable_notification = disableNotification;
        await botInstance.pinChatMessage(chatId, messageId, options);
        return { success: true, message: `Message ${messageId} pinned in ${chatId}.` };
    } catch (error) {
        console.error('Error pinning message:', error);
        return { success: false, error: error.message };
    }
},
};

export const unpinChatMessage = {
name: 'telegram_unpinChatMessage',
description: 'Unpins a message in a group, supergroup, or channel.',
input: {
    type: 'object',
    properties: {
        chatId: {
            type: 'string',
            description: 'Unique identifier for the target chat.',
        },
        messageId: {
            type: 'number',
            description: 'Identifier of a message to unpin. If not specified, the most recent pinned message will be unpinned.',
        },
    },
    required: ['chatId'],
},
run: async ({ chatId, messageId }) => {
    if (!botInstance) {
        return { success: false, error: 'Bot not initialized.' };
    }
    try {
        const options = {};
        if (messageId) options.message_id = messageId;
        await botInstance.unpinChatMessage(chatId, options);
        return { success: true, message: `Message unpinned in ${chatId}.` };
    } catch (error) {
        console.error('Error unpinning message:', error);
        return { success: false, error: error.message };
    }
},
};

export const getChatMember = {
name: 'telegram_getChatMember',
description: 'Gets information about a member of a chat.',
input: {
    type: 'object',
    properties: {
        chatId: {
            type: 'string',
            description: 'Unique identifier for the target chat.',
        },
        userId: {
            type: 'number',
            description: 'Unique identifier of the target user.',
        },
    },
    required: ['chatId', 'userId'],
},
run: async ({ chatId, userId }) => {
    if (!botInstance) {
        return { success: false, error: 'Bot not initialized.' };
    }
    try {
        const member = await botInstance.getChatMember(chatId, userId);
        return { success: true, data: member };
    } catch (error) {
        console.error('Error getting chat member:', error);
        return { success: false, error: error.message };
    }
},
};

export const getChat = {
name: 'telegram_getChat',
description: 'Gets up to date information about the chat.',
input: {
    type: 'object',
    properties: {
        chatId: {
            type: 'string',
            description: 'Unique identifier for the target chat.',
        },
    },
    required: ['chatId'],
},
run: async ({ chatId }) => {
    if (!botInstance) {
        return { success: false, error: 'Bot not initialized.' };
    }
    try {
        const chat = await botInstance.getChat(chatId);
        return { success: true, data: chat };
    } catch (error) {
        console.error('Error getting chat info:', error);
        return { success: false, error: error.message };
    }
},
};

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
                description: 'Photo caption (0-1024 characters).',
            },
        },
        required: ['chatId', 'photo'],
    },
    run: async ({ chatId, photo, caption }) => {
        if (!botInstance) {
            return { success: false, error: 'Bot not initialized.' };
        }
        try {
            await botInstance.sendPhoto(chatId, photo, { caption });
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
            filename: {
                type: 'string',
                description: 'Custom filename for the document.',
            },
        },
        required: ['chatId', 'document'],
    },
    run: async ({ chatId, document, caption, filename }) => {
        if (!botInstance) {
            return { success: false, error: 'Bot not initialized.' };
        }
        try {
            const options = {};
            if (caption) options.caption = caption;
            if (filename) options.filename = filename;
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
                description: 'Duration of the video in seconds.',
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

export const sendLocation = {
    name: 'telegram_sendLocation',
    description: 'Sends a location to a specified Telegram chat.',
    input: {
        type: 'object',
        properties: {
            chatId: {
                type: 'string',
                description: 'Unique identifier for the target chat.',
            },
            latitude: {
                type: 'number',
                description: 'Latitude of the location.',
            },
            longitude: {
                type: 'number',
                description: 'Longitude of the location.',
            },
            livePeriod: {
                type: 'number',
                description: 'Period in seconds for which the location will be updated (1-86400).',
            },
            heading: {
                type: 'number',
                description: 'Direction in which the user is moving, in degrees (1-360).',
            },
            proximityAlertRadius: {
                type: 'number',
                description: 'Maximum distance for proximity alerts about approaching another chat member, in meters (1-100000).',
            },
        },
        required: ['chatId', 'latitude', 'longitude'],
    },
    run: async ({ chatId, latitude, longitude, livePeriod, heading, proximityAlertRadius }) => {
        if (!botInstance) {
            return { success: false, error: 'Bot not initialized.' };
        }
        try {
            const options = {};
            if (livePeriod) options.live_period = livePeriod;
            if (heading) options.heading = heading;
            if (proximityAlertRadius) options.proximity_alert_radius = proximityAlertRadius;
            await botInstance.sendLocation(chatId, latitude, longitude, options);
            return { success: true, message: `Location sent to ${chatId}.` };
        } catch (error) {
            console.error('Error sending location:', error);
            return { success: false, error: error.message };
        }
    },
};

export const sendContact = {
    name: 'telegram_sendContact',
    description: 'Sends a contact to a specified Telegram chat.',
    input: {
        type: 'object',
        properties: {
            chatId: {
                type: 'string',
                description: 'Unique identifier for the target chat.',
            },
            phoneNumber: {
                type: 'string',
                description: 'Contact phone number.',
            },
            firstName: {
                type: 'string',
                description: 'Contact first name.',
            },
            lastName: {
                type: 'string',
                description: 'Contact last name.',
            },
            vcard: {
                type: 'string',
                description: 'Additional data about the contact in the form of a vCard.',
            },
        },
        required: ['chatId', 'phoneNumber', 'firstName'],
    },
    run: async ({ chatId, phoneNumber, firstName, lastName, vcard }) => {
        if (!botInstance) {
            return { success: false, error: 'Bot not initialized.' };
        }
        try {
            const options = {};
            if (lastName) options.last_name = lastName;
            if (vcard) options.vcard = vcard;
            await botInstance.sendContact(chatId, phoneNumber, firstName, options);
            return { success: true, message: `Contact sent to ${chatId}.` };
        } catch (error) {
            console.error('Error sending contact:', error);
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