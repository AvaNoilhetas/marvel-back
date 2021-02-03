const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/characters", async (req, res) => {
  try {
    axios
      .get(
        `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_SECRET_KEY}`
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
