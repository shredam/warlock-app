import { router } from "@warlock.js/core";
import userHome from "./controllers/user-home";

router.get("/home", userHome);
