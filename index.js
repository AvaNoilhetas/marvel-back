const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.json({ message: "Hi" });
});

app.all("*", (req, res) => {
  res.status(400).json({ message: "not found" });
});

app.listen(process.env.PORT, () => {
  console.log("Server has started");
});
