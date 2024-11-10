import { Output, type FinalOutput } from "@warlock.js/core";
import CategoryOutput from "app/categories/output/category-output";
import UserOutput from "app/users/output/user-output";
import { withBaseOutputDetails } from "app/utils/output";

export default class PostOutput extends Output {
  /**
   * Output data
   */
  protected output: FinalOutput = withBaseOutputDetails({
    title: "string",
    content: "string",
    auther: UserOutput,
    category: CategoryOutput,
    commentCount: "number",
  });
}
