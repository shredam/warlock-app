import { type Request, type Response } from "@warlock.js/core";
import { Category } from "../models/category";

export default async function createCategory(
  request: Request,
  response: Response,
) {
  const category = await Category.create({
    ...request.validated(),
  });

  return response.success({
    message: "category created",
    category,
  });
}

createCategory.validation = {
  rules: {
    tag: ["required", "string"],
  },
};
