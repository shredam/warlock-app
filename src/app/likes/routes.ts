import { router } from "@warlock.js/core";
import { publicRoutes } from "app/utils/router";
import addLike from "./controllers/add-like";
import deleteLike from "./controllers/delete-like";
import getLikesByPost from "./controllers/get-likes-for-post";

publicRoutes(() => {
  router.post("/posts/:id/likes", addLike);

  router.get("/posts/:id/likes", getLikesByPost);
  router.get("/users/:id/likes", getLikesByPost);

  router.delete("/posts/:postId/likes", deleteLike);
});
