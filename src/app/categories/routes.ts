import { router } from "@warlock.js/core";
import { publicRoutes } from "app/utils/router";
import restfulCategories from "./controllers/restful-categories";

publicRoutes(() => {
  router.restfulResource("/categories", restfulCategories);
});
