import {
  type Request,
  type RequestHandler,
  type Response,
} from "@warlock.js/core";
import usersRepository from "app/users/repositories/users-repository";

const getTopContributers: RequestHandler = async (
  request: Request,
  response: Response,
) => {
  const users = await usersRepository.list({
    orderBy: {
      totalActivePosts: "desc",
      totalComments: "desc",
    },
  });

  return response.success({
    users,
  });
};

export default getTopContributers;
