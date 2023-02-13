import { object, number, string, TypeOf, date, array } from 'zod';

export const LectuerSchema = object({
  id: number(),
  chapter_id: number(),
  video_id: number().nullable(),
  lecture_name: string(),
  created_at: date(),
  updated_at: date(),
});

export type LectuerSchemaType = TypeOf<typeof LectuerSchema>;
