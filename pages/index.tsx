import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { Header } from '@components/Header';

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <div>
      <Head>
        <title>NextJS Sample Project</title>
        <meta name="description" content="A simple starter project with authentication" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        {session?.user && (
          <div>
            <Image
              alt={`${session.user.name}'s avatar`}
              height={100}
              src={session.user.image as string}
              width={100}
            />
          </div>
        )}
      </main>

      <footer />
    </div>
  );
};

export default Home;
