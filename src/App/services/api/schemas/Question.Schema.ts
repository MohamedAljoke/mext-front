import { object, number, string, TypeOf, date } from 'zod';

export const QuestionSchema = object({
  id: number(),
  question_text: string(),
  created_at: date(),
  updated_at: date(),
});

export type QuestionSchemaType = TypeOf<typeof QuestionSchema>;
