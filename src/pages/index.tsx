import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mext plataform</title>
        <meta name="description" content="mext plataform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex  justify-center align-middle">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </main>
    </>
  );
}
