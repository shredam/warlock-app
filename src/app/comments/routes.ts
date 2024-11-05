import { router } from "@warlock.js/core";
import addComment from "./controllers/add-comment";
import getComments from "./controllers/get-comments";

router.post("/post/:id/addComment", addComment);
router.get("/post/:id/getComments", getComments);
