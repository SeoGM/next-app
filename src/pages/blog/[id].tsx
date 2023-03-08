import Container from "@/components/layout/Container";
import { GetStaticProps, GetStaticPaths } from "next";
import { Post as IPost } from "@/interface/Post";
import formatDate from "@/util/formatDate";

export default function Post() {
  return <div></div>;
}

// export default function Post({ postData }: { postData: IPost }) {
//   const { title, createdAt, body } = postData;
//   return (
//     <Container>
//       <div className="prose w-full max-w-full">
//         <h1 className="text-sky-700">{title}</h1>
//         <div className="text-sm font-light mb-5">{formatDate(createdAt)}</div>
//         <div dangerouslySetInnerHTML={{ __html: body }} />
//       </div>
//     </Container>
//   );
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const res = await fetch(`http://localhost:3000/api/posts/${params?.id}`);
//   const posts: IPost = await res.json();
//   return {
//     props: {
//       posts,
//     },
//   };
// };

// export const GetStaticPathsContext: GetStaticPaths = async () => {
//   const res = await fetch(`http://localhost:3000/api/posts`);
//   const posts = await res.json();
//   const paths = posts.map((post: IPost) => ({
//     params: { id: post.id },
//   }));
//   return { paths, fallback: false };
// };
