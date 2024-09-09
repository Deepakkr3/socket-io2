// backend/server.js
const mongoose = require("mongoose");
const app = require("./app");

mongoose
  .connect("mongodb://localhost:27017/ticketing", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

const server = app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

// Initialize Socket.io
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

require("./sockets/chatSocket")(io);
