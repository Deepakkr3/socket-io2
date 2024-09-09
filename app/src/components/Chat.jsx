// src/components/Chat.js
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import axios from "../api/axios";

const Chat = ({ ticketId }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const socket = io("http://localhost:3001");

  useEffect(() => {
    if (ticketId) {
      socket.emit("joinTicket", ticketId);

      axios
        .get(`/messages/${ticketId}`)
        .then((response) => setMessages(response.data))
        .catch((error) => console.error(error));

      socket.on("receiveMessage", (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      });

      return () => {
        socket.emit("leaveTicket", ticketId);
        socket.off("receiveMessage");
      };
    }
  }, [ticketId, socket]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage = {
        ticketId,
        sender: "User", // Replace with actual sender information
        message,
      };
      socket.emit("sendMessage", newMessage);
      setMessage("");
    }
  };

  return (
    <div className="chat">
      <h2>Chat</h2>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>
            <strong>{msg.sender}:</strong> {msg.message}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
