import React from 'react';
import SubjectCard from './components/SubjectCard';
import { customColors } from '@/App/utils/constants/colors';
import { useFetchSubjects } from '@/App/services/query/subjects.query';
import Spinner from '@/App/components/Loading/Loader';

export default function Subjects() {
  const { subjects, isLoading, isError, refetch } = useFetchSubjects();
  return (
    <div className="flex flex-wrap gap-6  justify-center items-center">
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <Spinner />
        </div>
      ) : (
        subjects?.map((item, idx) => {
          return (
            <SubjectCard key={idx} subject={item} bgColor={customColors[idx]} />
          );
        })
      )}
    </div>
  );
}
