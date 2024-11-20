import {
  FilterByOptions,
  RepositoryManager,
  RepositoryOptions,
} from "@warlock.js/core";
import { Comment } from "../models/comment";

export class CommentsRepository extends RepositoryManager<Comment> {
  public model = Comment;

  public simpleSelectColumns = ["id"];

  protected defaultOptions: RepositoryOptions = this.withDefaultOptions({});

  protected filterBy: FilterByOptions = this.withDefaultFilters({
    id: "int",
    post: ["int", "post.id"],
  });
}

const commentsRepository = new CommentsRepository();

export default commentsRepository;
