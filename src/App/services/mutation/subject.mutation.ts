import { get } from '../api/axios';
import { SubjectSchemaType } from '../api/schemas/Subject.Schema';

export const fetchSubjects = async (): Promise<SubjectSchemaType[]> => {
  const response = await get<SubjectSchemaType[]>('/subjects');
  return response!;
};
