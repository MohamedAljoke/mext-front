import { object, number, string, TypeOf, date, array } from 'zod';
import { ChapterSchema } from './Chapter.Schema';

export const SubjectSchema = object({
  id: number(),
  subject_name: string(),
  created_at: date(),
  updated_at: date(),
  chapters: array(ChapterSchema),
});

export type SubjectSchemaType = TypeOf<typeof SubjectSchema>;
