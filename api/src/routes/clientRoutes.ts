import { Router } from "express";
import * as postController from "../controller/postControllers";

const router = Router();

router.get("/getPostsListing", postController.getPostsListing);

export default router;
