import { type Request, type Response } from "@warlock.js/core";
import { Post } from "app/posts/models/post";
import { Comment } from "../models/comment";

export default async function getComments(
  request: Request,
  response: Response,
) {
  const comments = await Comment.list({
    post: {
      id: request.post.id,
    },
  });

  return response.success({
    comments,
  });
}

getComments.validation = {
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
