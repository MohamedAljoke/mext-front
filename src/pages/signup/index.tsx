import Signup from '@/App/Pages/Signup/Signup';
import PublicRoute from '@/App/hook/PublicRoute';
import React from 'react';

export default function SignupPage() {
  return <PublicRoute>
    <Signup />
  </PublicRoute>
}
