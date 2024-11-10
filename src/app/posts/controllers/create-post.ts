import { type Request, type Response } from "@warlock.js/core";
import { Post } from "../models/post";

export default async function createPost(request: Request, response: Response) {
  const post = await Post.create({
    ...request.validated(),
    auther: request.user,
    commentCount: 0,
  });

  return response.success({
    message: "Post created",
    post,
  });
}

createPost.validation = {
  rules: {
    title: ["required", "string"],
    content: ["required", "string"],
    category: ["required", "int"],
    commentCount: ["number"],
  },
};
