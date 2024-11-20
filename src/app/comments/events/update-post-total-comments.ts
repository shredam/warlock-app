import { Post } from "app/posts/models/post";
import { Comment } from "../models/comment";
import commentsRepository from "../repositories/comments-repository";

Comment.events().onCreated(countTotalComments).onDeleted(countTotalComments);

async function countTotalComments(comment: Comment) {
  const postId = comment.get("post.id");

  const post = await Post.find(postId);

  if (!post) {
    return;
  }

  const totalComments = await commentsRepository.count({ post: postId });

  post.silentSaving({
    totalComments,
  });
}
