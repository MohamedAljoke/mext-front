import { get, post } from '../api/axios';
import { AlternativesSchemaType } from '../api/schemas/Alternatives.Schema';
import { QuestionSchemaType } from '../api/schemas/Question.Schema';

export const getLectuerQuestions = async (
  lectureId: string
): Promise<QuestionSchemaType[]> => {
  const response = await get<QuestionSchemaType[]>(
    `/user-questions/${lectureId}`
  );
  return response!;
};

export type AnswerQuestionBodyType = {
  questionId: number;
  answerId: number;
};

export const answerQuestion = async ({
  questionId,
  answerId,
}: AnswerQuestionBodyType) => {
  const response = await post<AnswerQuestionBodyType, AlternativesSchemaType>({
    url: `/user-questions`,
    body: {
      questionId,
      answerId,
    },
  });
  return response;
};
