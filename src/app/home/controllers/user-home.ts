import { type Request, type Response } from "@warlock.js/core";
import categoriesRepository from "app/categories/repositories/catogries-repository";
import postsRepository from "app/posts/repositories/posts-repository";

export default async function userHome(request: Request, response: Response) {
  const posts = await postsRepository.all();
  const categories = await categoriesRepository.all();

  return response.success({
    posts,
    categories,
  });
}
