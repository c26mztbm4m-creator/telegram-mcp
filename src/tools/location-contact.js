// 位置和联系人发送工具

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
        const botInstance = global.botInstance;
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
        const botInstance = global.botInstance;
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