import { type Request, type Response } from "@warlock.js/core";
import { Category } from "app/categories/models/category";
import { Post } from "../models/post";

export default async function getPostsByCategory(
  request: Request,
  response: Response,
) {
  const posts = await Post.list({
    category: {
      id: request.category.id,
    },
  });

  return response.success({
    posts,
  });
}

getPostsByCategory.validation = {
  rules: {
    id: ["required", "int"],
  },
  validate: async (request: Request, response: Response) => {
    const category = await Category.find(request.int("id"));

    if (!category) {
      return response.notFound({
        error: "Category not found",
      });
    }

    request.category = category;
  },
};
