import { router } from "@warlock.js/core";
import restfulBadWords from "./controllers/restful-bad-words";

router.restfulResource("/bad-words", restfulBadWords);
