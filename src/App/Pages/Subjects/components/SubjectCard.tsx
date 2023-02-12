import React from 'react';

interface ISubjectCardProps {
  subjectTitle: string;
  bgColor: string;
}

export default function SubjectCard({
  subjectTitle,
  bgColor,
}: ISubjectCardProps) {
  return (
    <div
      className={`flex align-middle items-center justify-center rounded-2xl p-5 shadow-defaultShadow w-[300px] h-[200px] cursor-pointer hover:shadow-none ${bgColor}`}
    >
      <span className="text-2xl font-bold ">{subjectTitle}</span>
    </div>
  );
}
