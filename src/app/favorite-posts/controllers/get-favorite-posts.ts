import {
  type Request,
  type RequestHandler,
  type Response,
} from "@warlock.js/core";
import favoritePostsRepository from "../repositories/favorite-posts-repository";

const getFavoritePosts: RequestHandler = async (
  request: Request,
  response: Response,
) => {
  const user = request.user;

  const { documents: favoritePosts, paginationInfo } =
    await favoritePostsRepository.getFavoritePostsByUserId(user.id);

  return response.success({
    favoritePosts,
    paginationInfo,
  });
};

export default getFavoritePosts;
