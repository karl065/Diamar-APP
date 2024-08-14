require("dotenv").config();
const { PORT } = process.env;

import { httpServer, io } from "./src/server.js";
import { socket } from "./src/socket/socket.js";

httpServer.listen(PORT, () => {
  console.log(`Back en el puerto ${PORT}`);
});
socket(io);
