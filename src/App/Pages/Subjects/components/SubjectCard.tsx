import React from 'react';
import { SubjectSchemaType } from '../../../services/api/schemas/Subject.Schema';
import { useRouter } from 'next/router';

interface ISubjectCardProps {
  subject: SubjectSchemaType;
  bgColor: string;
}

export default function SubjectCard({ subject, bgColor }: ISubjectCardProps) {
  const router = useRouter();
  const handleOnClick = (subjectId: number) => {
    router.push(`/subject/${subjectId}`);
  };
  return (
    <div
      onClick={() => handleOnClick(subject.id)}
      className={`flex align-middle items-center justify-center rounded-2xl p-5 shadow-defaultShadow  min-w-[300px] h-[200px] cursor-pointer hover:shadow-none ${bgColor} w-1/4 `}
    >
      <span className="text-2xl font-bold ">
        {subject.subject_name.slice(0, 15)}
      </span>
    </div>
  );
}
