import Spinner from '@/App/components/Loading/Loader';
import { useGetLectuer } from '@/App/services/query/lectuer.query';
import { useRouter } from 'next/router';
import React from 'react';

export default function Lecture() {
  const router = useRouter();
  const lectuerId = router.query.lectureId as string;
  const { lectuer, isLoading, isError, refetch } = useGetLectuer({
    lectuerId,
  });
  return (
    <div className="relative w-full">
      <div className="w-full flex flex-col gap-6  justify-center items-center xl:px-28 px-16 pt-28 ">
        {isLoading ? (
          <div className="flex items-center justify-center h-screen">
            <Spinner />
          </div>
        ) : (
          <h2>{lectuer?.lecture_name}</h2>
        )}
      </div>
    </div>
  );
}
