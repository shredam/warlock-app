import { type Request, type Response } from "@warlock.js/core";
import { Post } from "app/posts/models/post";
import { Comment } from "../models/comment";

export default async function addComment(request: Request, response: Response) {
  const comment = await Comment.create({
    ...request.validated(),
    post: request.post.id,
    user: request.user,
  });

  await Post.update(request.post.id, {
    commentCount: request.post.data.commentCount + 1,
  });

  return response.success({
    message: "Comment added",
    comment,
  });
}

addComment.validation = {
  rules: {
    content: ["required", "string"],
    id: ["required", "string"],
  },
  validate: async (request: Request, response: Response) => {
    const post = await Post.find(request.input("id"));

    if (!post) {
      return response.notFound({
        error: "Post not found",
      });
    }

    request.post = post;
  },
};
