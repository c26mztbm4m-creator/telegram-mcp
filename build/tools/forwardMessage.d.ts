import { z } from 'zod';
declare const ForwardMessageSchema: z.ZodObject<{
    token: z.ZodString;
    chatId: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
    fromChatId: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
    messageId: z.ZodNumber;
    disableNotification: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    token: string;
    chatId: string | number;
    fromChatId: string | number;
    messageId: number;
    disableNotification?: boolean | undefined;
}, {
    token: string;
    chatId: string | number;
    fromChatId: string | number;
    messageId: number;
    disableNotification?: boolean | undefined;
}>;
export declare const forwardMessage: {
    name: string;
    description: string;
    parameters: {
        type: string;
        properties: {
            token: {
                type: string;
                description: string;
            };
            chatId: {
                type: string[];
                description: string;
            };
            fromChatId: {
                type: string[];
                description: string;
            };
            messageId: {
                type: string;
                description: string;
            };
            disableNotification: {
                type: string;
                description: string;
            };
        };
        required: string[];
    };
    run(args: z.infer<typeof ForwardMessageSchema>): Promise<{
        content: {
            type: string;
            text: string;
        }[];
        isError?: undefined;
    } | {
        content: {
            type: string;
            text: string;
        }[];
        isError: boolean;
    }>;
};
export {};
//# sourceMappingURL=forwardMessage.d.ts.map