// backend/services/messageService.js
const Message = require("../models/Message");
const Ticket = require("../models/Ticket");

exports.createMessage = async (messageData) => {
  const message = new Message(messageData);
  await message.save();

  // Add message to the ticket's message array
  await Ticket.findByIdAndUpdate(messageData.ticketId, {
    $push: { messages: message._id },
  });

  return message;
};

exports.getMessagesByTicketId = async (ticketId) => {
  return await Message.find({ ticketId });
};
