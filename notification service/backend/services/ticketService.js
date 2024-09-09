// backend/services/ticketService.js
const Ticket = require("../models/Ticket");

exports.createTicket = async (ticketData) => {
  const ticket = new Ticket(ticketData);
  return await ticket.save();
};

exports.getAllTickets = async () => {
  return await Ticket.find().populate("messages");
};
