import { router } from "@warlock.js/core";
import restfulPosts from "./controllers/restful-posts";

router.restfulResource("/posts", restfulPosts);
