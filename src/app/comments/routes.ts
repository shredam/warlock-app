import { router } from "@warlock.js/core";
import restfulComments from "./controllers/restful-comments";

router.restfulResource("/comments", restfulComments);
