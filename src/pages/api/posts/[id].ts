import type { NextApiRequest, NextApiResponse } from "next";
import { posts } from "./data";

interface Post {
  id: number;
  userId: number;
  title: string;
  image: string;
  body: string;
  createdAt: string;
}

export default function hanlder(
  req: NextApiRequest,
  res: NextApiResponse<Post | { error: string }>
) {
  const postId: number = req.query.id;
  const Posts: Post[] = posts;

  if (postId) {
    const post = Posts.find((post) => post.id == postId);

    return res.status(200).json(post);
  }

  return res.status(404).json({ error: "Data Not Found" });
}
