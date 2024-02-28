require("dotenv").config();

const express = require("express");
const pool = require("./db");
const cors = require("cors");

const app = express();
// Middleware for CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

const PORT = process.env.PORT || 3001;

// Define your routes here
app.get("/", (req, res) => {
  res.send("Hello, EventHub!");
});

// Fetch all events
app.get("/events", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM events");
    res.json(rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error fetching events");
  }
});

// Fetch a single event by ID
app.get("/events/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query("SELECT * FROM events WHERE id = $1", [
      id,
    ]);
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).send("Event not found");
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error fetching event");
  }
});

// Create a new event
app.post("/events", async (req, res) => {
  const { title, description } = req.body;
  try {
    const { rows } = await pool.query(
      "INSERT INTO events (title, description) VALUES ($1, $2) RETURNING *",
      [title, description]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error creating event");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
