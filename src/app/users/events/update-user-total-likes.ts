import { Like } from "app/likes/models/like";
import likesRepository from "app/likes/repositories/likes-repository";
import { User } from "../models/user";

Like.events().onCreated(countTotalLikes).onDeleted(countTotalLikes);

async function countTotalLikes(like: Like) {
  const userId = like.get("user.id");

  const user = await User.find(userId);

  if (!user) {
    return;
  }

  const totalLikes = await likesRepository.count({ user: userId });

  user.silentSaving({
    totalLikes,
  });
}
