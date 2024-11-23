import { FavoritePost } from "./favorite-post";

export const FavoritePostBluePrint = FavoritePost.blueprint();

export const favoritePostMigration: any = async () => {
  FavoritePostBluePrint.unique("id");
  FavoritePostBluePrint.index("post.id");
  FavoritePostBluePrint.index("user.id");
};

favoritePostMigration.blueprint = FavoritePostBluePrint;

favoritePostMigration.down = async () => {
  FavoritePostBluePrint.dropUniqueIndex("id");
  FavoritePostBluePrint.dropIndex("post.id");
  FavoritePostBluePrint.dropIndex("user.id");
};
