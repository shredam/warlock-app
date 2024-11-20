import { Post } from "./post";

export const PostBluePrint = Post.blueprint();

export const postMigration: any = async () => {
  PostBluePrint.unique("id");
  PostBluePrint.textIndex("title");
  PostBluePrint.index("author.id");
};

postMigration.blueprint = PostBluePrint;

postMigration.down = async () => {
  PostBluePrint.dropUniqueIndex("id");
  PostBluePrint.dropTextIndex("title");
  PostBluePrint.dropIndex("author.id");
};
