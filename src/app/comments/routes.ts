import { router } from "@warlock.js/core";
import addComment from "./controllers/add-comment";
import getComments from "./controllers/get-comments";

// router.restfulResource("/comments", restfulComments);
router.post("/:postId/comments", addComment);
router.get("/:postId/comments", getComments);
