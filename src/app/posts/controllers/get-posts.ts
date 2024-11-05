import { type Request, type Response } from "@warlock.js/core";
import { Post } from "../models/post";

export default async function getPosts(request: Request, response: Response) {
  const posts = await Post.list();

  return response.success({
    posts,
  });
}
