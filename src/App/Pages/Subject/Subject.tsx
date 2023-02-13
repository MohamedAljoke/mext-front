import { useGetSubject } from '@/App/services/query/subjects.query';
import { useRouter } from 'next/router';
import React from 'react';

export default function Subject() {
  const router = useRouter();
  const subjectId = router.query.subjectId as string;
  const { subject, isLoading, isError, refetch } = useGetSubject({ subjectId });
  console.log(subject);
  return <div>Subject {subjectId} </div>;
}
