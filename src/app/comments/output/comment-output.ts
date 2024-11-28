import type { FinalOutput } from "@warlock.js/core";
import { Output } from "@warlock.js/core";
import PostOutput from "app/posts/output/post-output";
import { withBaseOutputDetails } from "app/utils/output";

export class CommentOutput extends Output {
  /**
   * {@inheritdoc}
   */
  protected output: FinalOutput = withBaseOutputDetails({
    content: "string",
    post: PostOutput,
    parent: CommentOutput,
    path: "string",
  });
}
