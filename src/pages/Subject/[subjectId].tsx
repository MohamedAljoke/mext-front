import Subject from '@/App/Pages/Subject/Subject';
import React from 'react';
import { useRouter } from 'next/router';

export default function SubjectPage() {
  const router = useRouter();
  const { subjectId } = router.query;
  return <Subject subjectId={subjectId as string} />;
}
