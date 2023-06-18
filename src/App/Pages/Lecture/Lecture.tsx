import Spinner from '@/App/components/Loading/Loader';
import { useGetLectuer } from '@/App/services/query/lectuer.query';
import { useRouter } from 'next/router';
import React from 'react';
import LectuerVideo from './components/Video/LectuerVideo';
import LectuerMaterial from './components/Material/LectuerMaterial';

export default function Lecture() {
  const router = useRouter();
  const lectuerId = router.query.lectuerId as string;

  const { lectuer, isLoading, isError, refetch } = useGetLectuer({
    lectuerId,
  });
  return (
    <div className="relative w-full">
      <div className="w-full flex flex-col gap-6  justify-center items-center xl:px-28 px-16 py-28 ">
        {isLoading ? (
          <div className="flex items-center justify-center h-screen">
            <Spinner />
          </div>
        ) : lectuer ? (
          <>
            <h2 className="font-bold text-xl">{lectuer?.lecture_name}</h2>
            <LectuerVideo video={lectuer?.video} />
            <LectuerMaterial pdfs={lectuer?.pdfs} lectureId={lectuer.id} />
          </>
        ) : (
          <h2 className="font-bold text-xl">NO LECTURE WAS FOUND</h2>
        )}
      </div>
    </div>
  );
}
