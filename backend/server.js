const express = require("express"); //import Express
const notes = require("../backend/data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const app = express(); //Create server using Express
dotenv.config();
connectDB();

app.get("/", (req, res) => {
  //Gets the following text from the response and sends it to the browser.
  res.send("API is running..");
});

app.get("/api/notes", (req, res) => {
  //gets the data at the specified path ''
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  //gets the note with the specified id. :id = "Which id?"
  const note = notes.find((n) => n._id === req.params.id);

  res.send(note);
});

const PORT = process.env.PORT || 5000; //checks .env for a matching variable and uses the value OR uses 5000 as a default.

app.listen(PORT, console.log(`Server started on PORT ${PORT}`)); //Launch on PORT using a template string
