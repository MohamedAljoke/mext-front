import { useQuery } from 'react-query';
import { LectuerSchemaType } from '../api/schemas/Lectuer.Schema';
import { choosenLectuer } from '@/App/utils/constants/queryKeys';
import { getLectuer } from '../mutation/lecture.mutation';

export const useGetLectuer = ({ lectuerId }: { lectuerId: string }) => {
  const {
    data: lectuer,
    isLoading,
    isError,
    refetch,
  } = useQuery<LectuerSchemaType | null>(
    [choosenLectuer, lectuerId],
    async () => {
      if (lectuerId) {
        return getLectuer(lectuerId);
      } else {
        return null;
      }
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  return { lectuer, isLoading, isError, refetch };
};
