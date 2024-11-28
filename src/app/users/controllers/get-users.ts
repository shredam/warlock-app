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

  const { documents, paginationInfo } = await usersRepository.usersList(
    page,
    limit,
  );

  return response.success({
    documents,
    paginationInfo,
  });
};

export default getUsers;
