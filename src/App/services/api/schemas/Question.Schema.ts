import { object, number, string, TypeOf, date, boolean, array } from 'zod';
import { AlternativesSchema } from './Alternatives.Schema';

export const QuestionSchema = object({
  id: number(),
  question_text: string(),
  alternatives: array(AlternativesSchema),
  wasCorrect: boolean(),
  created_at: date(),
  updated_at: date(),
});

export type QuestionSchemaType = TypeOf<typeof QuestionSchema>;
