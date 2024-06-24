import path from "path";
import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.mjs";
import messageRoute from "./routes/message.routes.mjs";
import userRoute from "./routes/user.routes.mjs";
import cookieParser from "cookie-parser";
import connectDb from "./database/connect-db.mjs";
import { app, server, io } from "./sockets/socket.js";
import apiRoutes from "./routes/api.routes.mjs";
dotenv.config();

app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

server.listen(PORT, () => {
  {
    connectDb();

    console.log(`Your app is listening on ${PORT}`);
  }
});

app.use("/api", apiRoutes);
// app.use("/api/messages", messageRoute);
// app.use("/api/users", userRoute);

app.use(express.static(path.join(__dirname, "front-end/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "front-end", "dist", "index.html"));
});

export default app;
