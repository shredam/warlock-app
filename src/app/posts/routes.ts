import { router } from "@warlock.js/core";
import createPost from "./controllers/create-post";
import deletePost from "./controllers/delete-post";
import getPost from "./controllers/get-post";
import getPosts from "./controllers/get-posts";
import getPostsByCategory from "./controllers/get-posts-by-category";
import updatePost from "./controllers/update-post";

router.post("/createPost", createPost);
router.post("/updatePost/:id", updatePost);
router.post("deletePost/:id", deletePost);
router.get("/getPosts", getPosts);
router.get("/getPost/:id", getPost);
router.get("/getPosts/category/:id", getPostsByCategory);
