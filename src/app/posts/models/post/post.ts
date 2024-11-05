import type { Casts, ModelSync } from "@warlock.js/cascade";
import { castModel, Model } from "@warlock.js/cascade";
import { Comment } from "app/comments/models/comment/comment";
import { User } from "app/users/models/user";

export class Post extends Model {
  public static collection = "posts";

  public syncWith: ModelSync[] = [Comment.sync("post")];

  protected casts: Casts = {
    title: "string",
    content: "string",
    auther: castModel(User),
  };

  public embedded = ["id"];
}
