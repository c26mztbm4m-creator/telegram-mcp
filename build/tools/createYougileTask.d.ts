import { z } from 'zod';
declare const CreateYougileTaskSchema: z.ZodObject<{
    apiKey: z.ZodString;
    title: z.ZodString;
    columnId: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    deadline: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    apiKey: string;
    title: string;
    columnId?: string | undefined;
    description?: string | undefined;
    deadline?: string | undefined;
}, {
    apiKey: string;
    title: string;
    columnId?: string | undefined;
    description?: string | undefined;
    deadline?: string | undefined;
}>;
export declare const createYougileTask: {
    name: string;
    description: string;
    parameters: {
        type: string;
        properties: {
            apiKey: {
                type: string;
                description: string;
            };
            title: {
                type: string;
                description: string;
            };
            columnId: {
                type: string;
                description: string;
            };
            description: {
                type: string;
                description: string;
            };
            deadline: {
                type: string;
                description: string;
            };
        };
        required: string[];
    };
    run(args: z.infer<typeof CreateYougileTaskSchema>): Promise<{
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
//# sourceMappingURL=createYougileTask.d.ts.map