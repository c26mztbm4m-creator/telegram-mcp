import { z } from 'zod';
declare const SendVideoSchema: z.ZodObject<{
    token: z.ZodString;
    chatId: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
    video: z.ZodString;
    duration: z.ZodOptional<z.ZodNumber>;
    width: z.ZodOptional<z.ZodNumber>;
    height: z.ZodOptional<z.ZodNumber>;
    caption: z.ZodOptional<z.ZodString>;
    parseMode: z.ZodOptional<z.ZodEnum<["HTML", "Markdown", "MarkdownV2"]>>;
    supportsStreaming: z.ZodOptional<z.ZodBoolean>;
    disableNotification: z.ZodOptional<z.ZodBoolean>;
    replyToMessageId: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    token: string;
    chatId: string | number;
    video: string;
    parseMode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
    disableNotification?: boolean | undefined;
    replyToMessageId?: number | undefined;
    caption?: string | undefined;
    duration?: number | undefined;
    width?: number | undefined;
    height?: number | undefined;
    supportsStreaming?: boolean | undefined;
}, {
    token: string;
    chatId: string | number;
    video: string;
    parseMode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
    disableNotification?: boolean | undefined;
    replyToMessageId?: number | undefined;
    caption?: string | undefined;
    duration?: number | undefined;
    width?: number | undefined;
    height?: number | undefined;
    supportsStreaming?: boolean | undefined;
}>;
export declare const sendVideo: {
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
            video: {
                type: string;
                description: string;
            };
            duration: {
                type: string;
                description: string;
            };
            width: {
                type: string;
                description: string;
            };
            height: {
                type: string;
                description: string;
            };
            caption: {
                type: string;
                description: string;
            };
            parseMode: {
                type: string;
                enum: string[];
                description: string;
            };
            supportsStreaming: {
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
    run(args: z.infer<typeof SendVideoSchema>): Promise<{
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
//# sourceMappingURL=sendVideo.d.ts.map