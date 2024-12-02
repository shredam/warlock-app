import {
  type Request,
  type RequestHandler,
  type Response,
} from "@warlock.js/core";
import postsRepository from "../repositories/posts-repository";

const searchPosts: RequestHandler = async (
  request: Request,
  response: Response,
) => {
  const posts = await postsRepository.list(request.all());

  return response.success({
    posts,
  });
};

export default searchPosts;
