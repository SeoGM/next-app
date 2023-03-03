import Container from "@/components/layout/Container";
import { Post } from "@/interface/Post";
import RecentPosts from "@/components/recentPosts/RecentPosts";

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <Container>
      <div className="divide-y divide-gray-200">
        <div className="space-y-5 pt-6 pb-8 md:space-y-2">
          <h2 className="text-5xl leading-14 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-9">
            최근 게시물
          </h2>
        </div>
        <RecentPosts posts={posts} />
      </div>
    </Container>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/posts");
  const posts = await res.json();
  return { props: { posts } };
}
