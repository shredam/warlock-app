import type { FilterByOptions, RepositoryOptions } from "@warlock.js/core";
import { RepositoryManager } from "@warlock.js/core";
import { Post } from "../models/post";

export class PostsRepository extends RepositoryManager<Post> {
  public model = Post;

  public simpleSelectColumns = ["id"];

  protected defaultOptions: RepositoryOptions = this.withDefaultOptions({});

  protected filterBy: FilterByOptions = this.withDefaultFilters({
    isActive: "bool",
    title: "like",
    category: ["int", "category.id"],
    totalComments: "number",
  });

  public getPostsByCategory(categoryId: number, page: number, limit: number) {
    return this.listActive({
      category: categoryId,
      page,
      limit,
    });
  }

  public getPostsByUser(userId: number, page: number, limit: number) {
    return this.listActive({
      auther: userId,
      page,
      limit,
    });
  }
}

const postsRepository = new PostsRepository();

export default postsRepository;
