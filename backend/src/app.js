import express from "express";

import authRoute from "./routes/authRoute.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use("api/auth", authRoute);

app.listen(PORT, () => {
  console.log("Server is running on port:" + PORT);
});
