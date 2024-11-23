import type { FilterByOptions, RepositoryOptions } from "@warlock.js/core";
import { RepositoryManager } from "@warlock.js/core";
import { Category } from "./../models/category";

export class CategoriesRepository extends RepositoryManager<Category> {
  public model = Category;

  public simpleSelectColumns = ["id"];

  protected defaultOptions: RepositoryOptions = this.withDefaultOptions({});

  protected filterBy: FilterByOptions = this.withDefaultFilters({
    tag: "like",
  });
}

const categoriesRepository = new CategoriesRepository();

export default categoriesRepository;
