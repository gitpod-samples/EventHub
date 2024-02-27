// client/src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import EventPage from "./EventPage";
import CreateEventPage from "./CreateEventPage";
// client/src/App.js
import "./App.css";
// The rest of your imports and App component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/event/:id" element={<EventPage />} />
        <Route path="/create" element={<CreateEventPage />} />
      </Routes>
    </Router>
  );
}

export default App;
