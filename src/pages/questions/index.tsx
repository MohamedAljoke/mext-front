import Question from '@/App/Pages/Questions/Question';
import PrivateRoute from '@/App/hook/PrivateRoute';
import React from 'react';

export default function Questions() {
  return (
    <PrivateRoute>
      <Question />
    </PrivateRoute>
  );
}
