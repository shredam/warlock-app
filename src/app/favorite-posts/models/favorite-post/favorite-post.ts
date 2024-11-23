import { Casts, Model, ModelSync } from "@warlock.js/cascade";
import { FavoritePostOutput } from "app/favorite-posts/output/favorite-post-output";
import { Post } from "app/posts/models/post";
import { User } from "app/users/models/user";

export class FavoritePost extends Model {
  public static collection = "favoritePosts";

  public static output = FavoritePostOutput;

  public syncWith: ModelSync[] = [];

  protected casts: Casts = {
    user: User.embedOnlyId,
    post: Post.embedOnlyId,
  };

  public embedded = ["id"];
}
