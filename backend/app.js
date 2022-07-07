const express = require("express");

const app = express();
const postsController = require("./controllers/posts");
const adminRoutes = require("./routes/admin");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));

app.use("/admin", adminRoutes);
app.get("/new-post", postsController.renderNewPost);
app.get("/", postsController.renderPosts);

app.listen(3001);
