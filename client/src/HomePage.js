// client/src/HomePage.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function HomePage() {
  const [events, setEvents] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${apiUrl}/events`)
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <h1>Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <Link to={`/event/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/create">Create Event</Link>
    </div>
  );
}

export default HomePage;
