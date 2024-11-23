import type { FilterByOptions, RepositoryOptions } from "@warlock.js/core";
import { RepositoryManager } from "@warlock.js/core";
import { Post } from "../models/post";

export class PostsRepository extends RepositoryManager<Post> {
  public model = Post;

  public simpleSelectColumns = ["id"];

  protected defaultOptions: RepositoryOptions = this.withDefaultOptions({});

  protected filterBy: FilterByOptions = this.withDefaultFilters({
    title: "like",
    category: ["int", "category.id"],
  });
}

const postsRepository = new PostsRepository();

export default postsRepository;
