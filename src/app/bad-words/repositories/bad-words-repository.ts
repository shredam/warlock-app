import type { FilterByOptions, RepositoryOptions } from "@warlock.js/core";
import { RepositoryManager } from "@warlock.js/core";
import { BadWord } from "./../models/bad-word";

export class BadWordsRepository extends RepositoryManager<BadWord> {
  /**
   * {@inheritDoc}
   */
  public model = BadWord;

  /**
   * Simple columns selections
   * Set the columns that need to be selected when passing 'simple' option with 'true'
   */
  public simpleSelectColumns = ["id"];

  /**
   * List default options
   */
  protected defaultOptions: RepositoryOptions = this.withDefaultOptions({});

  /**
   * Filter By options
   */
  protected filterBy: FilterByOptions = this.withDefaultFilters({
    word: "like",
  });
}

const badWordsRepository = new BadWordsRepository();

export default badWordsRepository;
