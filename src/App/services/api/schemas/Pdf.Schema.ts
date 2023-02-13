import { object, number, string, TypeOf, date, array } from 'zod';

export const PdfSchema = object({
  id: number(),
  pdf_name: number(),
  pdf_url: number().nullable(),
  created_at: date(),
  updated_at: date(),
});

export type PdfSchemaType = TypeOf<typeof PdfSchema>;