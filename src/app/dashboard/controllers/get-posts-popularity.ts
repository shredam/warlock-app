import {
  type Request,
  type RequestHandler,
  type Response,
} from "@warlock.js/core";
import postsRepository from "app/posts/repositories/posts-repository";

const getPostsPopularity: RequestHandler = async (
  request: Request,
  response: Response,
) => {
  const { page = 1, limit = 10 } = request.query;

  const { documents: posts, paginationInfo } = await postsRepository.list({
    orderBy: ["totalComments", "desc"],
    page,
    limit,
  });

  return response.success({
    posts,
    paginationInfo,
  });
};

export default getPostsPopularity;
