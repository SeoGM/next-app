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

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post | { error: string }>
) {
  const postId: number = Number(req.query.id);
  const Posts: Post[] = posts;

  if (postId) {
    const post = Posts.find((post) => post.id == postId);

    if (post) {
      return res.status(200).json(post);
    } else {
      return res.status(404).json({ error: "Data Not Found" });
    }
  }

  return res.status(404).json({ error: "Data Not Found" });
}
