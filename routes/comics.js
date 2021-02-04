const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/comics", async (req, res) => {
  try {
    axios
      .get(
        `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_SECRET_KEY}`
      )
      .then(response => {
        res.status(200).json(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.get("/comics/:id", async (req, res) => {
  try {
    axios
      .get(
        `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.id}?apiKey=${process.env.API_SECRET_KEY}`
      )
      .then(response => {
        res.status(200).json(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
