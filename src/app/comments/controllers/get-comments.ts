import {
  type Request,
  type RequestHandler,
  type Response,
} from "@warlock.js/core";
import commentsRepository from "../repositories/comments-repository";

const getComments: RequestHandler = async (
  request: Request,
  response: Response,
) => {
  const post = request.params.postId;

  const comments = await commentsRepository.getNestedComments(post);

  return response.success({
    comments,
  });
};

export default getComments;
