// src/components/TicketList.js
import React, { useState, useEffect } from "react";
import axios from "../api/axios";

const TicketList = ({ onSelectTicket }) => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios
      .get("/tickets")
      .then((response) => setTickets(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="ticket-list">
      <h2>Tickets</h2>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket._id} onClick={() => onSelectTicket(ticket._id)}>
            {ticket.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketList;
