import type { RouteResource } from "@warlock.js/core";
import { Restful } from "@warlock.js/core";
import type { Category } from "./../models/category";
import categoriesRepository from "./../repositories/catogries-repository";

class RestfulCategories extends Restful<Category> implements RouteResource {
  protected repository = categoriesRepository;

  public validation: RouteResource["validation"] = {
    all: {
      rules: {
        tag: ["required", "minLength:2"],
        isActive: ["boolean"],
      },
    },
  };
}

const restfulCategories = new RestfulCategories();
export default restfulCategories;
