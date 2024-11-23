import {
  type Request,
  type RequestHandler,
  type Response,
} from "@warlock.js/core";
import likesRepository from "../repositories/repository";

const getLikes: RequestHandler = async (
  request: Request,
  response: Response,
) => {
  const postId = request.int("id");

  const { documents: likes, paginationInfo } =
    await likesRepository.getLikesByPostId(postId);

  return response.success({
    likes,
    paginationInfo,
  });
};

export default getLikes;
