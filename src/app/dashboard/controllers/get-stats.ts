import {
  type Request,
  type RequestHandler,
  type Response,
} from "@warlock.js/core";
import categoriesRepository from "app/categories/repositories/catogries-repository";
import commentsRepository from "app/comments/repositories/comments-repository";
import likesRepository from "app/likes/repositories/likes-repository";
import postsRepository from "app/posts/repositories/posts-repository";
import usersRepository from "app/users/repositories/users-repository";

const getStats: RequestHandler = async (
  request: Request,
  response: Response,
) => {
  const users = await usersRepository.count();
  const posts = await postsRepository.count();
  const comments = await commentsRepository.count();
  const likes = await likesRepository.count();
  const categories = await categoriesRepository.count();

  return response.success({
    usersCount: users,
    postsCount: posts,
    commentsCount: comments,
    likesCount: likes,
    categoriesCount: categories,
  });
};

export default getStats;
