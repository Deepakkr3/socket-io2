// backend/routes/messageRoutes.js
const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");

router.post("/", messageController.createMessage);
router.get("/:ticketId", messageController.getMessagesByTicketId);

module.exports = router;
