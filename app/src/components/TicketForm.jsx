// src/components/TicketForm.js
import React, { useState } from "react";
import axios from "../api/axios";

const TicketForm = ({ onTicketCreated }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/tickets", { title, description })
      .then((response) => {
        onTicketCreated(response.data);
        setTitle("");
        setDescription("");
      })
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit} className="ticket-form">
      <h2>Create a New Ticket</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">Create Ticket</button>
    </form>
  );
};

export default TicketForm;
