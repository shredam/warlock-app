import type { Request } from "@warlock.js/core";
import { type Response } from "@warlock.js/core";
import { Post } from "../models/post";

export default async function deletePost(request: Request, response: Response) {
  const post = request.post;

  await Post.delete(post);

  return response.success({
    post,
  });
}

deletePost.validation = {
  rules: {
    id: ["required", "int"],
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
