export const socket = (io) => {
  io.on("connection", async (socket) => {
    console.log(`El cliente ${socket.id} se ha conectado`);

    socket.on("joinRoom", async (room) => {
      socket.join(room);
      console.log(`El cliente ${socket.nombre} se ha unido a la sala ${room}.`);
    });
  });
};
