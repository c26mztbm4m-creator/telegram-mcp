import { z } from 'zod';
declare const DeleteMessageSchema: z.ZodObject<{
    token: z.ZodString;
    chatId: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
    messageId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    token: string;
    chatId: string | number;
    messageId: number;
}, {
    token: string;
    chatId: string | number;
    messageId: number;
}>;
export declare const deleteMessage: {
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
            messageId: {
                type: string;
                description: string;
            };
        };
        required: string[];
    };
    run(args: z.infer<typeof DeleteMessageSchema>): Promise<{
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
//# sourceMappingURL=deleteMessage.d.ts.map