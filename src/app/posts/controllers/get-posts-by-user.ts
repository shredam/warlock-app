import {
  type Request,
  type RequestHandler,
  type Response,
} from "@warlock.js/core";
import postsRepository from "../repositories/posts-repository";

const getPostsByUser: RequestHandler = async (
  request: Request,
  response: Response,
) => {
  const { page = 1, limit = 10 } = request.query;

  const user = request.int("id");

  const { documents: posts, paginationInfo } =
    await postsRepository.getPostsByCategory(user, page, limit);

  return response.success({
    posts,
    paginationInfo,
  });
};

export default getPostsByUser;
