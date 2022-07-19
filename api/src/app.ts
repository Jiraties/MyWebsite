import express from "express";
import cors from "cors";

import adminRoutes from "./routes/adminRoutes";
import clientRoutes from "./routes/clientRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use(clientRoutes);
app.use("/admin", adminRoutes);

app.listen("3001");
