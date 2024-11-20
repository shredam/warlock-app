import { Restful, RouteResource } from "@warlock.js/core";
import { Category } from "./../models/category";
import categoriesRepository from "./../repositories/catogries-repository";

class RestfulCategories extends Restful<Category> implements RouteResource {
  protected repository = categoriesRepository;

  public validation: RouteResource["validation"] = {
    all: {
      rules: {
        tag: ["required", "minLength:2"],
      },
    },
  };
}

const restfulCategories = new RestfulCategories();
export default restfulCategories;
