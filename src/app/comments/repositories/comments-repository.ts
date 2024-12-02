import type { FilterByOptions, RepositoryOptions } from "@warlock.js/core";
import { RepositoryManager } from "@warlock.js/core";
import { Comment } from "../models/comment";

export class CommentsRepository extends RepositoryManager<Comment> {
  public model = Comment;

  public simpleSelectColumns = ["id"];

  protected defaultOptions: RepositoryOptions = this.withDefaultOptions({});

  protected filterBy: FilterByOptions = this.withDefaultFilters({
    id: "int",
    post: ["int", "post.id"],
    user: ["int", "user.id"],
    parent: ["int", "comment.id"],
  });
}

const commentsRepository = new CommentsRepository();

export default commentsRepository;
