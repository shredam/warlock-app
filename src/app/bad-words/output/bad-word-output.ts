import type { FinalOutput } from "@warlock.js/core";
import { Output } from "@warlock.js/core";
import { withBaseOutputDetails } from "app/utils/output";

export class BadWordOutput extends Output {
  /**
   * {@inheritdoc}
   */
  protected output: FinalOutput = withBaseOutputDetails({
    word: "string",
  });

  /**
   * Extend the resource output
   * Called after transforming the resource output
   */
  protected async extend() {
    //
  }
}
