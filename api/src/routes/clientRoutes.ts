import { Router } from "express";
import * as postController from "../controller/postControllers";

const router = Router();

router.get("/getPosts", postController.getPosts);
router.get("/getPostById/:id", postController.getPostById);

export default router;
