import Head from 'next/head'
import Container from '@/components/layout/Container'
import { posts } from '@/components/home/data';
import Post from "@/interface/Post";

interface HomeProps {
  posts: Post[];
}

export default function Home() {
  return (
    <>
      <Head>
        <title>BLINGLOG</title>
        <meta name="description" content="BLINGLOG" />
      </Head>
      <section>
        <Container>
          <div className="space-y-5 pt-6 pb-8 md:space-y-2">
            <h1 className="text-6xl leading-14 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl leading-9">
              Latest
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">A blog created with Next.js and Tailwind.css</p>
          </div>
          { posts.map((post: Post) => (
            <div>{post.title}</div>
          )) }
        </Container>
      </section>
    </>
  );
};
