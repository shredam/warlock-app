import {
  FilterByOptions,
  RepositoryManager,
  RepositoryOptions,
} from "@warlock.js/core";
import { FavoritePost } from "../models/favorite-post";

export class FavoritePostsRepository extends RepositoryManager<FavoritePost> {
  public model = FavoritePost;

  public simpleSelectColumns = ["id"];

  protected defaultOptions: RepositoryOptions = this.withDefaultOptions({});

  protected filterBy: FilterByOptions = this.withDefaultFilters({
    post: ["int", "post.id"],
    user: ["int", "user.id"],
  });

  public getFavoritePostsByUserId(userId: number) {
    return this.list({
      perform(query) {
        query.lookup({
          from: "posts",
          localField: "post.id",
          foreignField: "id",
          as: "post",
        });
      },
    });
  }
}

const favoritePostsRepository = new FavoritePostsRepository();

export default favoritePostsRepository;
