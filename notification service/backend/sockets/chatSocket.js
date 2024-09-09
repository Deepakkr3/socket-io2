// backend/sockets/chatSocket.js
const messageService = require("../services/messageService");

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("joinTicketRoom", (ticketId) => {
      socket.join(ticketId);
      console.log(`User joined room: ${ticketId}`);
    });

    socket.on("sendMessage", async (data) => {
      try {
        const message = await messageService.createMessage(data);
        io.to(data.ticketId).emit("newMessage", message); // Emit to users in the specific room
      } catch (error) {
        console.error("Error sending message:", error);
      }
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });
  });
};
