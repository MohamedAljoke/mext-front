import { object, number, string, TypeOf, date, array } from 'zod';

export const ChapterSchema = object({
  id: number(),
  subject_id: number(),
  chapter_name: string(),
  created_at: date(),
  updated_at: date(),
  lectuers: array(
    object({
      id: number(),
      chapter_id: number(),
      video_id: number().nullable(),
      lecture_name: string(),
      created_at: date(),
      updated_at: date(),
    })
  ),
});

export type ChapterSchemaType = TypeOf<typeof ChapterSchema>;
