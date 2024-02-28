// client/src/CreateEventPage.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateEventPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      // maybe use window.location or something
      .post(`${apiUrl}/events`, { title, description })
      .then(() => {
        navigate("/"); // Use navigate for redirection
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Create Event</h1>
        <div className="input">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateEventPage;
