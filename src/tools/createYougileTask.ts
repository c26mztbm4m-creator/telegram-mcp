import { z } from 'zod';

const YOUGILE_API_URL = "https://ru.yougile.com/api-v2";
const DEFAULT_COLUMN_ID = "4a087470-a0ef-4447-a300-5f503c596294"; // МКЗ → Входящие от бота → Входящие

const CreateYougileTaskSchema = z.object({
  apiKey: z.string().describe("YouGile API key"),
  title: z.string().describe("Task title"),
  columnId: z.string().optional().describe("Column ID to create task in (defaults to МКЗ → Входящие от бота → Входящие)"),
  description: z.string().optional().describe("Task description"),
  deadline: z.string().optional().describe("Deadline in ISO date format (e.g. 2026-02-20)")
});

export const createYougileTask = {
  name: "create_yougile_task",
  description: "Create a task in YouGile project management board. Defaults to МКЗ → Входящие от бота → Входящие column.",
  parameters: {
    type: "object",
    properties: {
      apiKey: {
        type: "string",
        description: "YouGile API key"
      },
      title: {
        type: "string",
        description: "Task title"
      },
      columnId: {
        type: "string",
        description: "Column ID to create task in (defaults to МКЗ → Входящие от бота → Входящие)"
      },
      description: {
        type: "string",
        description: "Task description (supports HTML)"
      },
      deadline: {
        type: "string",
        description: "Deadline in ISO date format (e.g. 2026-02-20)"
      }
    },
    required: ["apiKey", "title"]
  },

  async run(args: z.infer<typeof CreateYougileTaskSchema>) {
    try {
      const validatedArgs = CreateYougileTaskSchema.parse(args);
      const columnId = validatedArgs.columnId || DEFAULT_COLUMN_ID;

      const body: Record<string, unknown> = {
        title: validatedArgs.title,
        columnId
      };

      if (validatedArgs.description) {
        body.description = validatedArgs.description;
      }

      if (validatedArgs.deadline) {
        const date = new Date(validatedArgs.deadline);
        if (isNaN(date.getTime())) {
          throw new Error(`Invalid deadline format: ${validatedArgs.deadline}`);
        }
        const hasTime = validatedArgs.deadline.includes('T') || validatedArgs.deadline.includes(':');
        body.deadline = {
          deadline: date.getTime(),
          withTime: hasTime
        };
      }

      const response = await fetch(`${YOUGILE_API_URL}/tasks`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${validatedArgs.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`YouGile API error ${response.status}: ${errorText}`);
      }

      const result = await response.json() as { id: string };

      return {
        content: [{
          type: "text",
          text: `Task created in YouGile\n\n**ID:** ${result.id}\n**Title:** ${validatedArgs.title}\n**Column:** ${columnId}${validatedArgs.deadline ? `\n**Deadline:** ${validatedArgs.deadline}` : ''}`
        }]
      };

    } catch (error) {
      return {
        content: [{
          type: "text",
          text: `Failed to create YouGile task: ${error instanceof Error ? error.message : String(error)}`
        }],
        isError: true
      };
    }
  }
};
