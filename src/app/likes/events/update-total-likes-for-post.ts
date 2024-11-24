import { Post } from "app/posts/models/post";
import type { Like } from "../models/like";
import likesRepository from "../repositories/repository";

Post.events().onCreated(countLikes).onDeleted(countLikes);

async function countLikes(like: Like) {
  const post = await Post.find(like.get("post.id"));

  if (!post) return;

  const totalLikes = await likesRepository.count({
    post: like.get("post.id"),
  });

  post.set("totalLikes", totalLikes);
  post.silentSaving();
}
