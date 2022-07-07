const postModel = require("../models/postModel");

exports.renderPosts = (req, res) => {
  console.log(postModel.getPosts());
  res.render("posts", { posts: postModel.getPosts() });
};

exports.renderNewPost = (req, res) => {
  res.render("newPost");
};

exports.addNewPost = (req, res) => {
  console.log(req.body);

  postModel.addNewPost(req.body.title, req.body.body);
  res.redirect("/");
};
