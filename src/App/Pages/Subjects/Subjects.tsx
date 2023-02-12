import React from 'react';
import SubjectCard from './components/SubjectCard';
import { customColors } from '@/App/utils/constants/colors';

export default function Subjects() {
  const listOfTitles = ['Physics', 'Mathematics'];
  return (
    <div className="flex flex-wrap gap-6  justify-center items-center">
      {listOfTitles.map((item, idx) => {
        return (
          <SubjectCard
            key={idx}
            subjectTitle={item}
            bgColor={customColors[idx]}
          />
        );
      })}
    </div>
  );
}
