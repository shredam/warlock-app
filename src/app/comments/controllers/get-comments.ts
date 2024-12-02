import {
  type Request,
  type RequestHandler,
  type Response,
} from "@warlock.js/core";
import postsRepository from "app/posts/repositories/posts-repository";
import commentsRepository from "../repositories/comments-repository";

const getComments: RequestHandler = async (
  request: Request,
  response: Response,
) => {
  const { page = 1, limit = 10 } = request.query;

  const postId = request.params.postId;

  const post = await postsRepository.find(postId);

  if (!post) {
    return response.notFound("Post Not found");
  }

  const { documents: comments, paginationInfo } = await commentsRepository.list(
    {
      post: post,
      parent: null,
      page,
      limit,
    },
  );

  return response.success({ comments, paginationInfo });
};

export default getComments;
