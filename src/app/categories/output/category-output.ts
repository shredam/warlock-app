import { Output, type FinalOutput } from "@warlock.js/core";
import { withBaseOutputDetails } from "app/utils/output";

export default class CategoryOutput extends Output {
  /**
   * Output data
   */
  protected output: FinalOutput = withBaseOutputDetails({
    isActive: "boolean",
    tag: "string",
  });
}
