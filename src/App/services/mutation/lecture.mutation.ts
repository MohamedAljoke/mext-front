import { get } from '../api/axios';
import { LectuerSchemaType } from '../api/schemas/Lectuer.Schema';

export const getLectuer = async (id: string): Promise<LectuerSchemaType> => {
  const response = await get<LectuerSchemaType>(`/lectuers/${id}`);
  return response!;
};
