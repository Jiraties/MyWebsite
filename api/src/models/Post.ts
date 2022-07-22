import { Schema, connection } from "mongoose";

const postsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    markdown: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    views: { type: Number, default: 0, required: true },
  },
  { timestamps: true }
);

const db = connection.useDb("mywebsite");

export default db.model("posts", postsSchema);
