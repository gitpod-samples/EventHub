// client/src/HomePage.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function HomePage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/events")
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
