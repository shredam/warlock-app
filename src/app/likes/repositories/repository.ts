import {
  FilterByOptions,
  RepositoryManager,
  RepositoryOptions,
} from "@warlock.js/core";
import { Like } from "../models/like";

export class LikesRepository extends RepositoryManager<Like> {
  public model = Like;

  public simpleSelectColumns = ["id"];

  protected defaultOptions: RepositoryOptions = this.withDefaultOptions({});

  protected filterBy: FilterByOptions = this.withDefaultFilters({
    post: ["int", "post.id"],
    user: ["int", "user.id"],
  });

  public getLikesByPostId(postId: number) {
    return this.list({
      perform(query) {
        query.lookup({
          from: "users",
          localField: "user.id",
          foreignField: "id",
          as: "user",
        });
      },
    });
  }
}

const likesRepository = new LikesRepository();

export default likesRepository;
