import { FinalOutput, Output } from "@warlock.js/core";
import PostOutput from "app/posts/output/post-output";
import UserOutput from "app/users/output/user-output";
import { withBaseOutputDetails } from "app/utils/output";

export class FavoritePostOutput extends Output {
  protected output: FinalOutput = withBaseOutputDetails({
    post: PostOutput,
    user: UserOutput,
  });
}
