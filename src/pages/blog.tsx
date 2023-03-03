import Container from "@/components/layout/Container";
import { Post } from "@/interface/Post";
import BlogPosts from "@/components/blogPosts/BlogPosts";

interface BlogProps {
  posts: Post[];
}

export default function Blog({ posts }: BlogProps) {
  return (
    <Container>
      <BlogPosts posts={posts} />
    </Container>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/posts");
  const posts = await res.json();
  return { props: { posts } };
}
