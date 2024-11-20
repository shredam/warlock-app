import type { Casts, Document, ModelSync } from "@warlock.js/cascade";
import { castModel, Model } from "@warlock.js/cascade";
import { uploadable } from "@warlock.js/core";
import { Category } from "app/categories/models/category";
import { Comment } from "app/comments/models/comment";
import PostOutput from "app/posts/output/post-output";
import { User } from "app/users/models/user";

export class Post extends Model {
  public static collection = "posts";

  public static output = PostOutput;

  public syncWith: ModelSync[] = [Comment.sync("post")];

  public defaultValue: Document = {
    totalComments: 0,
  };

  protected casts: Casts = {
    title: "string",
    content: "string",
    auther: castModel(User),
    category: castModel(Category),
    totalComments: "number",
    images: uploadable,
  };

  public embedded = ["id", "title", "category", "totalComments"];
}
