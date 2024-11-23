import {
  type Request,
  type RequestHandler,
  type Response,
} from "@warlock.js/core";
import { Like } from "../models/like";

const addLike: RequestHandler = async (
  request: Request,
  response: Response,
) => {
  Like.create({
    post: request.int("id"),
    user: request.user.id,
  });

  response.success({});
};

export default addLike;
