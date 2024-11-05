import { type Request, type Response } from "@warlock.js/core";
import { Category } from "../models/category";

export default async function getCategories(
  request: Request,
  response: Response,
) {
  const categories = await Category.list();

  return response.success({
    categories,
  });
}
