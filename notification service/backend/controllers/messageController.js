// backend/controllers/messageController.js
const messageService = require("../services/messageService");

exports.createMessage = async (req, res) => {
  try {
    const message = await messageService.createMessage(req.body);
    res.status(201).send(message);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getMessagesByTicketId = async (req, res) => {
  try {
    const messages = await messageService.getMessagesByTicketId(
      req.params.ticketId
    );
    res.status(200).send(messages);
  } catch (error) {
    res.status(400).send(error);
  }
};
