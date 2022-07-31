import * as postController from "../controller/postControllers";
import * as feedbackController from "../controller/feedbackControlers";

import { Router } from "express";

const router = Router();

router.get("/getPosts", postController.getPosts);
router.get("/getPostById/:id", postController.getPostById);
router.post("/newFeedback", feedbackController.newFeedback);

export default router;
