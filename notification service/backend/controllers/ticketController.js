// backend/controllers/ticketController.js
const ticketService = require("../services/ticketService");

exports.createTicket = async (req, res) => {
  try {
    const ticket = await ticketService.createTicket(req.body);
    res.status(201).send(ticket);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getAllTickets = async (req, res) => {
  try {
    const tickets = await ticketService.getAllTickets();
    res.status(200).send(tickets);
  } catch (error) {
    res.status(400).send(error);
  }
};
