import Lecture from '@/App/Pages/Lecture/Lecture';
import PrivateRoute from '@/App/hook/PrivateRoute';
import React from 'react';

export default function LecturePage() {
  return (
    <PrivateRoute>
      <Lecture />
    </PrivateRoute>
  );
}
