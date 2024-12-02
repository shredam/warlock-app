import {
  type Request,
  type RequestHandler,
  type Response,
} from "@warlock.js/core";
import commentsRepository from "../repositories/comments-repository";

const deleteComment: RequestHandler = async (
  request: Request,
  response: Response,
) => {
  const user = request.user;
  const commentId = request.int("id");

  const deletedComment = await commentsRepository.first({
    id: commentId,
    user: user,
  });

  if (!deletedComment) {
    return response.notFound();
  } else {
    await commentsRepository.delete(deletedComment);
  }

  response.success({ deletedComment });
};

export default deleteComment;
