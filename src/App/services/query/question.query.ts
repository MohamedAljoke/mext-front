import { useQuery } from 'react-query';
import { lectureQuestions } from '@/App/utils/constants/queryKeys';
import { getLectuerQuestions } from '../mutation/question.mutation';
import { QuestionSchemaType } from '../api/schemas/Question.Schema';

export const useFetchLectureQuestions = ({
  lectuerId,
}: {
  lectuerId: string;
}) => {
  const {
    data: questions,
    isLoading,
    isError,
    refetch,
  } = useQuery<QuestionSchemaType[] | null>(
    [lectureQuestions, lectuerId],
    async () => {
      if (lectuerId) {
        return getLectuerQuestions(lectuerId);
      } else {
        return null;
      }
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  return { questions, isLoading, isError, refetch };
};
