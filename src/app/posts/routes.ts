import { router } from "@warlock.js/core";
import { publicRoutes } from "app/utils/router";
import getPostsByCategory from "./controllers/get-posts-by-category";
import getPostsByUser from "./controllers/get-posts-by-user";
import restfulPosts from "./controllers/restful-posts";
import searchPosts from "./controllers/search-posts";

publicRoutes(() => {
  router.restfulResource("/posts", restfulPosts);

  router.get("/categories/:id/posts", getPostsByCategory);
  router.get("/users/:id/posts", getPostsByUser);
  router.get("/posts/search", searchPosts);
});
