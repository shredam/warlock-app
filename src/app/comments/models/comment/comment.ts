import type { Casts, ModelSync } from "@warlock.js/cascade";
import { castModel, Model } from "@warlock.js/cascade";
import { CommentOutput } from "app/comments/output/comment-output";
import { Post } from "app/posts/models/post";
import { User } from "app/users/models/user";

export class Comment extends Model {
  public static collection = "comments";

  public static output = CommentOutput;

  public syncWith: ModelSync[] = [];

  protected casts: Casts = {
    content: "string",
    user: castModel(User),
    post: Post.embedOnly("id"),
    parent: castModel(Comment),
    path: "string",
  };

  public embedded = ["id", "content"];
}
