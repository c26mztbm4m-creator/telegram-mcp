import { z } from 'zod';
declare const SendMessageSchema: z.ZodObject<{
    token: z.ZodString;
    chatId: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
    text: z.ZodString;
    parseMode: z.ZodOptional<z.ZodEnum<["HTML", "Markdown", "MarkdownV2"]>>;
    disableWebPagePreview: z.ZodOptional<z.ZodBoolean>;
    disableNotification: z.ZodOptional<z.ZodBoolean>;
    replyToMessageId: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    token: string;
    chatId: string | number;
    text: string;
    parseMode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
    disableWebPagePreview?: boolean | undefined;
    disableNotification?: boolean | undefined;
    replyToMessageId?: number | undefined;
}, {
    token: string;
    chatId: string | number;
    text: string;
    parseMode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
    disableWebPagePreview?: boolean | undefined;
    disableNotification?: boolean | undefined;
    replyToMessageId?: number | undefined;
}>;
export declare const sendMessage: {
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
            text: {
                type: string;
                description: string;
            };
            parseMode: {
                type: string;
                enum: string[];
                description: string;
            };
            disableWebPagePreview: {
                type: string;
                description: string;
            };
            disableNotification: {
                type: string;
                description: string;
            };
            replyToMessageId: {
                type: string;
                description: string;
            };
        };
        required: string[];
    };
    run(args: z.infer<typeof SendMessageSchema>): Promise<{
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
//# sourceMappingURL=sendMessage.d.ts.map