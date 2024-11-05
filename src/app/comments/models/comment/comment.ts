import type { Casts } from "@warlock.js/cascade";
import { castModel, Model } from "@warlock.js/cascade";
import { Post } from "app/posts/models/post";
import { User } from "app/users/models/user";

export class Comment extends Model {
  public static collection = "comments";

  protected casts: Casts = {
    content: "string",
    user: castModel(User),
    post: castModel(Post),
  };
}
