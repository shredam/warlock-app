import { Like } from "./like";

export const LikeBluePrint = Like.blueprint();

export const likeMigration: any = async () => {
  LikeBluePrint.unique("id");
  LikeBluePrint.index("post.id");
  LikeBluePrint.index("user.id");
};

likeMigration.blueprint = LikeBluePrint;

likeMigration.down = async () => {
  LikeBluePrint.dropUniqueIndex("id");
  LikeBluePrint.dropIndex("post.id");
  LikeBluePrint.dropIndex("user.id");
};
