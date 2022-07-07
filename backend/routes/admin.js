const express = require("express");

const postsController = require("../controllers/posts");
const Router = express.Router();

Router.post("/new-post", postsController.addNewPost);

module.exports = Router;
