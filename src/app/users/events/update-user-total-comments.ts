import { Comment } from "app/comments/models/comment";
import commentsRepository from "app/comments/repositories/comments-repository";
import { User } from "../models/user";

Comment.events().onCreated(countTotalComments).onDeleted(countTotalComments);

async function countTotalComments(comment: Comment) {
  const userId = comment.get("user.id");

  const user = await User.find(userId);

  if (!user) {
    return;
  }

  const totalComments = await commentsRepository.count({ user: userId });

  user.silentSaving({
    totalComments,
  });
}
