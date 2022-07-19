import { Router } from "express";
import * as postController from "../controller/postControllers";

const router = Router();

router.post("/newPost", postController.newPost);

export default router;
