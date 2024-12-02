import {
  type Request,
  type RequestHandler,
  type Response,
} from "@warlock.js/core";
import usersRepository from "app/users/repositories/users-repository";

const getUserSummery: RequestHandler = async (
  request: Request,
  response: Response,
) => {
  const userId = request.int("id");

  const userSummery = await usersRepository.first({
    id: userId,
    select: ["totalPosts", "totalActivePosts", "totalComments", "totalLikes"],
  });

  return response.success({
    userSummery,
  });
};

export default getUserSummery;
