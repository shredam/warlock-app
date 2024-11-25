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

  public getLikesByPostId(_postId: number) {
    return this.list({
      post: _postId,
      perform(query) {
        query.lookup({
          from: "users",
          localField: "user.id",
          foreignField: "id",
          as: "user",
        });
        query.select("user");
      },
    });
  }
}

const likesRepository = new LikesRepository();

export default likesRepository;
