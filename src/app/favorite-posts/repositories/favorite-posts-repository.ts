import type { FilterByOptions, RepositoryOptions } from "@warlock.js/core";
import { RepositoryManager } from "@warlock.js/core";
import { FavoritePost } from "../models/favorite-post";

export class FavoritePostsRepository extends RepositoryManager<FavoritePost> {
  public model = FavoritePost;

  public simpleSelectColumns = ["id"];

  protected defaultOptions: RepositoryOptions = this.withDefaultOptions({});

  protected filterBy: FilterByOptions = this.withDefaultFilters({
    post: ["int", "post.id"],
    user: ["int", "user.id"],
  });

  public getFavoritePostsByUserId(_userId: number) {
    return this.list({
      user: _userId,
    });
  }
}

const favoritePostsRepository = new FavoritePostsRepository();

export default favoritePostsRepository;
