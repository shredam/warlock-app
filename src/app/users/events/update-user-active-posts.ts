import { Post } from "app/posts/models/post";
import postsRepository from "app/posts/repositories/posts-repository";
import { User } from "../models/user";

Post.events().onCreated(countTotalActivePosts).onDeleted(countTotalActivePosts);

async function countTotalActivePosts(post: Post) {
  const userId = post.get("auther.id");

  const user = await User.find(userId);

  if (!user) {
    return;
  }

  const totalActivePosts = await postsRepository.countActive({ user: userId });

  user.silentSaving({
    totalActivePosts,
  });
}
