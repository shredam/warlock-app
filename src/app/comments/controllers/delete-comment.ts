import type { Request } from "@warlock.js/core";
import { type Response } from "@warlock.js/core";
import { Comment } from "../models/comment";

export default async function deleteComment(
  request: Request,
  response: Response,
) {
  const comment = request.comment;

  console.log(request.comment.data.post.commentCount);

  await Comment.delete(comment.id);

  return response.success({
    comment,
  });
}

deleteComment.validation = {
  rules: {
    id: ["required", "int"],
  },
  validate: async (request: Request, response: Response) => {
    const comment = await Comment.find(request.int("id"));

    if (!comment) {
      return response.notFound({
        error: "Comment not found",
      });
    }

    request.comment = comment;
  },
};