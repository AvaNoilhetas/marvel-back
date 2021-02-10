const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const charactersRoute = require("./routes/characters");
const comicsRoute = require("./routes/comics");

let corsOptions = {
  origin: process.env.FRONT_WEB_SITE
};

app.disable("x-powered-by");
app.use(cors(corsOptions), charactersRoute, comicsRoute);

app.all("*", (req, res) => {
  res.status(400).json({ message: "not found" });
});

app.listen(process.env.PORT, () => {
  console.log("Server has started");
});
