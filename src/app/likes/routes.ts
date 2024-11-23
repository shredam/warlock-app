import { router } from "@warlock.js/core";
import addLike from "./controllers/add-like";
import getLikes from "./controllers/get-likes";

router.get("/likes/:id", getLikes);
router.post("/likes/:id/add", addLike);
