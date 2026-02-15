import { z } from 'zod';
declare const SendDocumentSchema: z.ZodObject<{
    token: z.ZodString;
    chatId: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
    document: z.ZodString;
    caption: z.ZodOptional<z.ZodString>;
    parseMode: z.ZodOptional<z.ZodEnum<["HTML", "Markdown", "MarkdownV2"]>>;
    disableNotification: z.ZodOptional<z.ZodBoolean>;
    replyToMessageId: z.ZodOptional<z.ZodNumber>;
    filename: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    token: string;
    chatId: string | number;
    document: string;
    parseMode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
    disableNotification?: boolean | undefined;
    replyToMessageId?: number | undefined;
    caption?: string | undefined;
    filename?: string | undefined;
}, {
    token: string;
    chatId: string | number;
    document: string;
    parseMode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
    disableNotification?: boolean | undefined;
    replyToMessageId?: number | undefined;
    caption?: string | undefined;
    filename?: string | undefined;
}>;
export declare const sendDocument: {
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
            document: {
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
            disableNotification: {
                type: string;
                description: string;
            };
            replyToMessageId: {
                type: string;
                description: string;
            };
            filename: {
                type: string;
                description: string;
            };
        };
        required: string[];
    };
    run(args: z.infer<typeof SendDocumentSchema>): Promise<{
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
//# sourceMappingURL=sendDocument.d.ts.map