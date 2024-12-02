import {
  type Request,
  type RequestHandler,
  type Response,
} from "@warlock.js/core";
import commentsRepository from "../repositories/comments-repository";

const getComment: RequestHandler = async (
  request: Request,
  response: Response,
) => {
  const commentId = request.params.id;

  const comment = await commentsRepository.find(commentId);

  if (!comment) {
    return response.notFound("Comment not found");
  }

  const replies = await commentsRepository.list({ parent: commentId });

  return response.success({ comment, replies });
};

export default getComment;
