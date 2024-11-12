import { Post } from "app/posts/models/post";
import { Comment } from "../models/comment";

Comment.events()
  .onCreated(async (comment: Comment) => {
    await Post.update(comment.get("post.id"), {
      commentCount: comment.get("post.commentCount") + 1,
    });
  })
  .onDeleting(async (comment: Comment) => {
    await Post.update(comment.get("post.id"), {
      commentCount: comment.get("post.commentCount") - 1,
    });
  });
