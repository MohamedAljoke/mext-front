import { useQuery } from 'react-query';
import { SubjectSchemaType } from '../api/schemas/Subject.Schema';
import { listOfSubjects } from '@/App/utils/constants/queryKeys';
import { fetchSubjects } from '../mutation/subject.mutation';

export const useFetchUserCoordinates = () => {
  const {
    data: subjects,
    isLoading,
    isError,
    refetch,
  } = useQuery<SubjectSchemaType[]>(
    [listOfSubjects],
    async () => {
      return fetchSubjects();
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  return { subjects, isLoading, isError, refetch };
};
