import { Schema, connection } from "mongoose";

const feedbackSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const db = connection.useDb("mywebsite");

export default db.model("feedback", feedbackSchema);
