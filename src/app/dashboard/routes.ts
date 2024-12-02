import { router } from "@warlock.js/core";
import { guardedAdmin } from "app/utils/router";
import getPostsPopularity from "./controllers/get-posts-popularity";
import getStats from "./controllers/get-stats";
import getTopContributers from "./controllers/get-top-contributers";
import getUserSummery from "./controllers/get-user-summery";
import getUsersList from "./controllers/get-useres-list";

guardedAdmin(() => {
  router.get("/users/aggregated", getUsersList);
  router.get("/users/:id/summary", getUserSummery);
  router.get("/stats", getStats);
  router.get("/users/top", getTopContributers);
  router.get("/posts/popular", getPostsPopularity);
});
