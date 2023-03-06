import { Post } from "@/interface/Post";
import HomeSection from "@/components/home/HomeSection";
import AboutSection from "@/components/home/AboutSection";
import SkillsSection from "@/components/home/SkillsSection";
import UtilizeSection from "@/components/home/UtilizeSection";

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <UtilizeSection />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/posts");
  const posts = await res.json();
  return { props: { posts } };
}
