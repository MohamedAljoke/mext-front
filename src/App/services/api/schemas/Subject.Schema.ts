import { object, number, string, TypeOf, date } from 'zod';

export const SubjectSchema = object({
  id: number(),
  subject_name: string(),
  created_at: date(),
  updated_at: date(),
});

export type SubjectSchemaType = TypeOf<typeof SubjectSchema>;
