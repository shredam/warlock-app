import { type Request, type Response } from "@warlock.js/core";
import { censorBadWords } from "app/bad-words/utils/profanityFilter";
import postsRepository from "app/posts/repositories/posts-repository";
import { Comment } from "../models/comment";
import commentsRepository from "../repositories/comments-repository";

export default async function addComment(request: Request, response: Response) {
  const post = request.post;
  const user = request.user;
  const parent = request.input("parent");

  let path = "";
  if (parent) {
    const parentComment = await commentsRepository.find(parent);
    if (!parentComment || parentComment.get("post.id") !== post.id) {
      return response.notFound("Invalid parent comment");
    }
    path = `${parentComment.get("path")}.${parent}`;
  } else {
    path = `root`;
  }

  const sanitizedContent = await censorBadWords(request.input("content"));

  const comment = await Comment.create({
    content: sanitizedContent,
    user,
    post,
    parent,
    path,
  });

  response.success({
    message: "comment added",
    comment,
  });
}

addComment.validation = {
  rules: {
    content: ["required", "string"],
  },
  validate: async (request: Request, response: Response) => {
    const postId = request.params.postId;

    const post = await postsRepository.find(postId);

    if (!post) {
      return response.notFound("Post not found");
    }

    request.post = post;
  },
};
