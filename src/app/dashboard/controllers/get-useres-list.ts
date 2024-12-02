import {
  type Request,
  type RequestHandler,
  type Response,
} from "@warlock.js/core";
import usersRepository from "app/users/repositories/users-repository";

const getUsersList: RequestHandler = async (
  request: Request,
  response: Response,
) => {
  const { page = 1, limit = 10 } = request.query;

  const { documents: users, paginationInfo } = await usersRepository.usersList(
    page,
    limit,
  );

  return response.success({
    users,
    paginationInfo,
  });
};

export default getUsersList;
