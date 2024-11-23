import { User } from "app/users/models/user";
import { FavoritePost } from "../models/favorite-post";
import favoritePostsRepository from "../repositories/favorite-posts-repository";

FavoritePost.events()
  .onCreated(countFavoritePosts)
  .onDeleted(countFavoritePosts);

async function countFavoritePosts(favoritePost: FavoritePost) {
  const user = await User.find(favoritePost.get("user.id"));

  if (!user) return;

  const totalFavoritePosts = await favoritePostsRepository.count({
    user: favoritePost.get("user.id"),
  });

  user.set("totalFavorites", totalFavoritePosts);
  user.silentSaving();
}
