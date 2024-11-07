import { Aggregate, size } from "@warlock.js/cascade";
import { type Request, type Response } from "@warlock.js/core";
import { Category } from "app/categories/models/category";

export default async function getPostsByCategory(
  request: Request,
  response: Response,
) {
  const posts = await new Aggregate("posts")
    .lookup({
      from: "comments",
      localField: "id",
      foreignField: "post.id",
      as: "comments",
    })
    .addFields({
      totalComments: size("comments"),
    })
    .where("category.id", "=", request.category.id)
    .project({ comments: 0 })
    .get();

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
