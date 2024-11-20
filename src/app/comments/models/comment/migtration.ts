import { Comment } from "./comment";

export const CommentBluePrint = Comment.blueprint();

export const commentMigration: any = async () => {
  CommentBluePrint.unique("id");
  CommentBluePrint.index("post.id");
};

commentMigration.blueprint = CommentBluePrint;

commentMigration.down = async () => {
  CommentBluePrint.dropUniqueIndex("id");
  CommentBluePrint.dropIndex("post.id");
};
