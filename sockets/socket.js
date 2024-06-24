import express from "express";
import { Server } from "socket.io";
import http from "http";

export const app = express();

export const server = http.createServer(app);

export const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
    methods: ["Get", "Post"],
  },
});

export const getRecieverSocketId= (recieverId)=>{
    return userSocketMap[recieverId]

}

const userSocketMap = {};

io.on("connection", (socket) => {
  console.log("user is connected", socket.id);

  const userId = socket.handshake.query.userId;

  if (userId != "undefined") {
    userSocketMap[userId] = socket.id;
  }
  io.emit("getOnlineUser", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("user is disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUser", Object.keys(userSocketMap));
  });
});
