// client/src/EventPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function EventPage() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/events/${id}`)
      .then((response) => {
        setEvent(response.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (!event) return <div>Loading...</div>;

  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      {/* Implement registration functionality */}
    </div>
  );
}

export default EventPage;
