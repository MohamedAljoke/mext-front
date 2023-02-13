import Subjects from '@/App/Pages/Subjects/Subjects';
import Header from '@/App/components/Header/Header';
import PrivateRoute from '@/App/hook/PrivateRoute';
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [user, setUser] = useState<string>('');
  return (
    <PrivateRoute setUser={setUser}>
      <>
        <Head>
          <title>Mext plataform</title>
          <meta name="description" content="mext plataform" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header user={user} />
        <main className="flex  justify-center items-center h-screen ">
          <Subjects />
        </main>
      </>
    </PrivateRoute>
  );
}
