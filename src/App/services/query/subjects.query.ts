import { useQuery } from 'react-query';
import { SubjectSchemaType } from '../api/schemas/Subject.Schema';
import {
  choosenSubject,
  listOfSubjects,
} from '@/App/utils/constants/queryKeys';
import { fetchSubjects, getSubject } from '../mutation/subject.mutation';

export const useFetchSubjects = () => {
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
export const useGetSubject = ({ subjectId }: { subjectId: string }) => {
  const {
    data: subject,
    isLoading,
    isError,
    refetch,
  } = useQuery<SubjectSchemaType>(
    [choosenSubject],
    async () => {
      return getSubject(subjectId);
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  return { subject, isLoading, isError, refetch };
};
