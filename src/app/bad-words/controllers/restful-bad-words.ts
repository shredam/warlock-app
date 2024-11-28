import { Restful, RouteResource } from "@warlock.js/core";
import { BadWord } from "./../models/bad-word";
import badWordsRepository from "./../repositories/bad-words-repository";

class RestfulBadWords extends Restful<BadWord> implements RouteResource {
  /**
   * {@inheritDoc}
   */
  protected repository = badWordsRepository;

  /**
   * {@inheritDoc}
   */
  public validation: RouteResource["validation"] = {
    all: {
      rules: {
        word: ["string", "required"],
      },
    },
  };
}

const restfulBadWords = new RestfulBadWords();
export default restfulBadWords;
