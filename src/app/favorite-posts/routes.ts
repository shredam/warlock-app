import { router } from "@warlock.js/core";
import { publicRoutes } from "app/utils/router";
import addFavoritePost from "./controllers/add-favorite-post";
import deleteFavoritePost from "./controllers/delete-favorite-post";
import getFavoritePosts from "./controllers/get-favorite-posts";

publicRoutes(() => {
  router.get("/favorite-posts", getFavoritePosts);
  router.post("/favorite-posts/:id/add", addFavoritePost);
  router.delete("/favorite-posts/:id/delete", deleteFavoritePost);
});
