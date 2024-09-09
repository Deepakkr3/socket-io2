// src/App.js
import React, { useState } from "react";
import TicketList from "./components/TicketList";
import TicketForm from "./components/TicketForm";
import Chat from "./components/Chat";

const App = () => {
  const [selectedTicketId, setSelectedTicketId] = useState(null);

  const handleTicketCreated = (newTicket) => {
    setSelectedTicketId(newTicket._id);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <TicketForm onTicketCreated={handleTicketCreated} />
        <TicketList onSelectTicket={setSelectedTicketId} />
      </div>
      <div className="main-content">
        {selectedTicketId ? (
          <Chat ticketId={selectedTicketId} />
        ) : (
          <p>Select a ticket to start chatting.</p>
        )}
      </div>
    </div>
  );
};

export default App;
