import { useGetSubject } from '@/App/services/query/subjects.query';
import { useRouter } from 'next/router';
import React from 'react';
import SubjectLecture from './component/SubjectLecture';

export default function Subject() {
  const router = useRouter();
  const subjectId = router.query.subjectId as string;
  const { subject, isLoading, isError, refetch } = useGetSubject({ subjectId });
  return (
    <div className="relative w-full">
      <div className="w-full flex flex-col gap-6  justify-center items-center xl:px-28 px-16 pt-28 ">
        {subject?.chapters.map((chapter) => {
          return <SubjectLecture key={chapter.id} chapter={chapter} />;
        })}
      </div>
    </div>
  );
}
