import { get } from '../api/axios';
import { QuestionSchemaType } from '../api/schemas/Question.Schema';

export const getLectuerQuestions = async (
  lectureId: string
): Promise<QuestionSchemaType[]> => {
  const response = await get<QuestionSchemaType[]>(
    `/user-questions/${lectureId}`
  );
  return response!;
};
