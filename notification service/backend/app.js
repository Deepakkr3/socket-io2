// backend/app.js
const express = require("express");
const ticketRoutes = require("./routes/ticketRoutes");
const messageRoutes = require("./routes/messageRoutes");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

app.use("/tickets", ticketRoutes);
app.use("/messages", messageRoutes);

module.exports = app;
