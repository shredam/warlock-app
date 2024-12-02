import type { FilterByOptions, RepositoryOptions } from "@warlock.js/core";
import { RepositoryManager } from "@warlock.js/core";
import { Like } from "../models/like";

export class LikesRepository extends RepositoryManager<Like> {
  public model = Like;

  public simpleSelectColumns = ["id"];

  protected defaultOptions: RepositoryOptions = this.withDefaultOptions({});

  protected filterBy: FilterByOptions = this.withDefaultFilters({
    post: ["int", "post.id"],
    user: ["int", "user.id"],
  });

  public getLikesByPost(postId: number, page: number, limit: number) {
    return this.list({
      post: postId,
      page,
      limit,
    });
  }

  public getLikesByUser(userId: number, page: number, limit: number) {
    return this.list({
      user: userId,
      page,
      limit,
    });
  }
}

const likesRepository = new LikesRepository();

export default likesRepository;
