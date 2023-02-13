import { useGetSubject } from '@/App/services/query/subjects.query';
import { useRouter } from 'next/router';
import React from 'react';
import SubjectLecture from './component/SubjectLecture';
import Spinner from '@/App/components/Loading/Loader';
import Link from 'next/link';

export default function Subject() {
  const router = useRouter();
  const subjectId = router.query.subjectId as string;
  const { subject, isLoading, isError, refetch } = useGetSubject({ subjectId });

  return (
    <div className="relative w-full">
      <div className="w-full flex flex-col gap-6  justify-center items-center xl:px-28 px-16 pt-28 ">
        <h2 className="font-bold text-xl">{subject?.subject_name}</h2>
        {isLoading ? (
          <div className="flex items-center justify-center h-screen">
            <Spinner />
          </div>
        ) : subject?.chapters.length! > 0 ? (
          subject?.chapters.map((chapter) => {
            return <SubjectLecture key={chapter.id} chapter={chapter} />;
          })
        ) : (
          <>
            <h6>No chapters where found for this subject</h6>
            <Link className="underline cursor-pointer" href="/">
              Choose another subject
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
