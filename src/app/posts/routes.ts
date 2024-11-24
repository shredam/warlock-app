import { router } from "@warlock.js/core";
import { publicRoutes } from "app/utils/router";
import restfulPosts from "./controllers/restful-posts";

publicRoutes(() => {
  router.restfulResource("/posts", restfulPosts);
});
