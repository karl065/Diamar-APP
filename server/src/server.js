import express from "express";
import http from "http";
import socketIO from "socket.io";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import fileUpload from "express-fileupload";

const server = express();
const httpServer = http.createServer(server);
const io = socketIO(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

server.use(morgan("dev"));
server.use(express.json());
server.use(helmet());

server.use(
  helmet.crossOriginOpenerPolicy({
    policy: "same-origin-allow-popups",
  })
);

server.use(cors());
server.use(fileUpload({ useTempFiles: true }));

server.use(router);

export default { server, io, helmet };
