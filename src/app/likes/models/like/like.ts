import type { Casts, ModelSync } from "@warlock.js/cascade";
import { castModel, Model } from "@warlock.js/cascade";
import { LikeOutput } from "app/likes/output/like-output";
import { Post } from "app/posts/models/post";
import { User } from "app/users/models/user";

export class Like extends Model {
  public static collection = "likes";

  public static output = LikeOutput;

  public syncWith: ModelSync[] = [];

  protected casts: Casts = {
    user: castModel(User),
    post: castModel(Post),
  };

  public embedded = ["id"];
}
