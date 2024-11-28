import {
  type Request,
  type RequestHandler,
  type Response,
} from "@warlock.js/core";
import usersRepository from "../repositories/users-repository";

const getUsers: RequestHandler = async (
  request: Request,
  response: Response,
) => {
  const { page = 1, limit = 10 } = request.query;
  const skip = (Number(page) - 1) * Number(limit);

  const users = await usersRepository.usersList(skip, limit);
  const totalUsers = await usersRepository.count();

  return response.success({
    users,
    paginationInfo: {
      currentPage: Number(page),
      totalPages: Math.ceil(totalUsers / Number(limit)),
      totalUsers,
    },
  });
};

export default getUsers;
