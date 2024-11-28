import { Post } from "app/posts/models/post";
import postsRepository from "app/posts/repositories/posts-repository";
import { User } from "../models/user";

Post.events().onCreated(countTotalPosts).onDeleted(countTotalPosts);

async function countTotalPosts(post: Post) {
  const userId = post.get("auther.id");

  const user = await User.find(userId);

  if (!user) {
    return;
  }

  const totalPosts = await postsRepository.count({ user: userId });

  user.silentSaving({
    totalPosts,
  });
}
