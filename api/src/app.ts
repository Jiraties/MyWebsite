import env from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";

import adminRoutes from "./routes/adminRoutes";
import clientRoutes from "./routes/clientRoutes";

env.config({
  path: path.join(__dirname, "..", ".env"),
});

const app = express();

app.use(cors());
app.use(express.json());

app.use(clientRoutes);
app.use("/admin", adminRoutes);

mongoose
  .connect(process.env.MONGOURI!)
  .then(result => {
    console.log("Connected to MongoDB");
    app.listen("3001");
  })
  .catch(error => console.log(error));
