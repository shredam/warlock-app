import {
  type Request,
  type RequestHandler,
  type Response,
} from "@warlock.js/core";
import likesRepository from "../repositories/likes-repository";

const deleteLike: RequestHandler = async (
  request: Request,
  response: Response,
) => {
  const user = request.user;
  const post = request.int("postId");

  const deletedLike = await likesRepository.first({
    user: user,
    post: post,
  });

  if (!deletedLike) {
    return response.notFound();
  } else {
    await likesRepository.delete(deletedLike);
  }

  response.success({ deletedLike });
};

export default deleteLike;
