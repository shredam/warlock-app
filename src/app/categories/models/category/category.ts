import type { Casts, ModelSync } from "@warlock.js/cascade";
import { Model } from "@warlock.js/cascade";
import { Post } from "app/posts/models/post";

export class Category extends Model {
  public static collection = "categories";

  public syncWith: ModelSync[] = [Post.sync("category")];

  protected casts: Casts = {
    tag: "string",
  };

  public embedded = ["id"];
}
