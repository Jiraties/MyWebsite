import { RequestHandler } from "express";
import { v4 as uuid } from "uuid";

const testingArray = ["this", "is", "an", "array"];

export const getPostsListing: RequestHandler = (req, res) => {
  res.json(testingArray);
};

export const newPost: RequestHandler = (req, res) => {
  const { title, markdown } = req.body;
  console.log(title, markdown);

  res.json({ body: `Created your new post titled "${title}"` });
};
