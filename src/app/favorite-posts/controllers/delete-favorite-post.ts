import {
  type Request,
  type RequestHandler,
  type Response,
} from "@warlock.js/core";
import favoritePostsRepository from "../repositories/favorite-posts-repository";

const deleteFavoritePost: RequestHandler = async (
  request: Request,
  response: Response,
) => {
  const favoritePost = await favoritePostsRepository.first({
    post: request.int("id"),
    user: request.user.id,
  });

  if (favoritePost) await favoritePost?.destroy();

  return response.success({});
};

export default deleteFavoritePost;
