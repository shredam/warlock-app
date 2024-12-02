import { router } from "@warlock.js/core";
import { publicRoutes } from "app/utils/router";
import addComment from "./controllers/add-comment";
import deleteComment from "./controllers/delete-comment";
import getComment from "./controllers/get-comment";
import getComments from "./controllers/get-comments";

// router.restfulResource("/comments", restfulComments);
publicRoutes(() => {
  router.post("/posts/:postId/comments", addComment);
  router.post("/posts/:postId/comments/:commentId/replies", addComment);

  router.get("/posts/:postId/comments", getComments);
  router.get("/comments/:id", getComment);

  router.delete("/comments/:id", deleteComment);
});
