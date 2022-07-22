import { RequestHandler } from "express";
import Post from "../models/Post";

export const getPosts: RequestHandler = async (req, res, next) => {
  try {
    const allPosts = await Post.find();

    res.json({ posts: [...allPosts] });
  } catch (err) {
    next(err);
  }
};

export const getPostById: RequestHandler = async (req, res, next) => {
  try {
    const matchingPost = await Post.findById(req.params.id);
    matchingPost.views++;
    const result = await matchingPost.save();

    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const newPost: RequestHandler = async (req, res, next) => {
  try {
    const { title, markdown, summary } = req.body;

    const post = await new Post({
      title,
      markdown,
      summary,
    });
    const createdPost = await post.save();

    res.status(200).json({
      createdPost,
    });
  } catch (err) {
    next(err);
  }
};
