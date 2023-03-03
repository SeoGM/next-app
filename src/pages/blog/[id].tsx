import Container from "@/components/layout/Container";
import { GetStaticProps, GetStaticPaths } from "next";
import { Post as IPost } from "@/interface/Post";
import formatDate from "@/util/formatDate";

export default function Post({ postData }: { postData: IPost }) {
  const { title, createdAt, body } = postData;
  return (
    <Container>
      <div className="prose w-full max-w-full">
        {/* <h1 className="text-sky-700">{post.title}</h1> */}
        <h1 className="text-sky-700">{title}</h1>
        <div className="text-sm font-light mb-5">{formatDate(createdAt)}</div>
        <div dangerouslySetInnerHTML={{ __html: body }} />
        {/* <MDXComponent /> */}
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/api/posts/${params?.id}`);
  const postData: IPost = await res.json();
  console.log("postData", postData);
  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      // String variant:
      "/blog/post",
      // Object variant:
      { params: { id: "1" } },
    ],
    fallback: true,
  };
};
