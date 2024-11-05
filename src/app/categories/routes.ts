import { router } from "@warlock.js/core";
import createCategory from "./controllers/create-category";
import getCategories from "./controllers/get-categories";

router.post("/category", createCategory);
router.get("/categories", getCategories);
