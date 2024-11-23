import {
  type Request,
  type RequestHandler,
  type Response,
} from "@warlock.js/core";
import { FavoritePost } from "../models/favorite-post";

const addFavoritePost: RequestHandler = async (
  request: Request,
  response: Response,
) => {
  FavoritePost.create({
    post: request.int("id"),
    user: request.user.id,
  });

  response.success({});
};

export default addFavoritePost;
