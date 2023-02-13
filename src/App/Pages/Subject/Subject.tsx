import { useGetSubject } from '@/App/services/query/subjects.query';
import React from 'react';

export default function Subject({ subjectId }: { subjectId: string }) {
  const { subject, isLoading, isError, refetch } = useGetSubject({ subjectId });
  return <div>Subject {subjectId} </div>;
}
