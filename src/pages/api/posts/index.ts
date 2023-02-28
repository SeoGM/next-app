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
  res: NextApiResponse<Post[] | { error: string }>
) {
  const Posts = posts;
  if (Posts) return res.status(200).json(Posts);

  return res.status(404).json({ error: "Data Not Found" });
}
