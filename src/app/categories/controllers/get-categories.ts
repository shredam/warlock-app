import { type Request, type Response } from "@warlock.js/core";
import categoriesRepository from "../repositories/catogries-repository";

export default async function getCategories(
  request: Request,
  response: Response,
) {
  const { documents: categories, paginationInfo } =
    await categoriesRepository.listActive(request.all());
  return response.success({
    categories,
    paginationInfo,
  });
}
