import {
  type Request,
  type RequestHandler,
  type Response,
} from "@warlock.js/core";
import likesRepository from "../repositories/likes-repository";

const getLikesByUser: RequestHandler = async (
  request: Request,
  response: Response,
) => {
  const { page = 1, limit = 10 } = request.query;

  const user = request.int("id");

  const { documents: likes, paginationInfo } =
    await likesRepository.getLikesByUser(user, page, limit);

  return response.success({
    likes,
    paginationInfo,
  });
};

export default getLikesByUser;
