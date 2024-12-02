import type { Casts, ModelSync } from "@warlock.js/cascade";
import { Model } from "@warlock.js/cascade";
import CategoryOutput from "app/categories/output/category-output";
import { Post } from "app/posts/models/post";

export class Category extends Model {
  public static collection = "categories";

  public static output = CategoryOutput;

  public syncWith: ModelSync[] = [Post.sync("category")];

  protected casts: Casts = {
    isActive: "boolean",
    tag: "string",
  };

  public embedded = ["id", "tag"];
}
