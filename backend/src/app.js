import express from "express";

import authRoute from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

dotenv.config();

const PORT = process.env.PORT;
// const __dirname = path.resolve();

// app.use(express.json());
// app.use(cookieParser());
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );

app.use("api/auth", authRoute);
app.use("/api/messages", messageRoutes);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/dist")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
//   });
// }

app.listen(PORT, () => {
  console.log("Server is running on port:" + PORT);
});
