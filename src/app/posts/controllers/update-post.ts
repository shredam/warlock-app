import type { Request } from "@warlock.js/core";
import { type Response } from "@warlock.js/core";
import { Post } from "../models/post";

export default async function updatePost(request: Request, response: Response) {
  const post = await request.post.save(request.validated());

  return response.success({
    post,
  });
}

updatePost.validation = {
  rules: {
    id: ["required", "int"],
    title: ["required", "string"],
    content: ["required", "string"],
  },

  validate: async (request: Request, response: Response) => {
    const post = await Post.find(request.int("id"));

    if (!post) {
      return response.notFound({
        error: "Post not found",
      });
    }

    request.post = post;
  },
};
