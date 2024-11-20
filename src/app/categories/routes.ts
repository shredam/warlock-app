import { router } from "@warlock.js/core";
import restfulCategories from "./controllers/restful-categories";

router.restfulResource("/categories", restfulCategories);
