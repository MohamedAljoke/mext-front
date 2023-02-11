import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mext plataform</title>
        <meta name="description" content="mext plataform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex  justify-center items-center h-screen">
        <Link href="signin">
          <h1 className="text-3xl font-bold underline text-red-500">
            AINDA NÃO TEM NADA VAI PARA LOGIN
          </h1>
        </Link>
      </main>
    </>
  );
}
