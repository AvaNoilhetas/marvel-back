const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/characters", async (req, res) => {
  try {
    let url = "";
    if (req.query.name) {
      url = `https://lereacteur-marvel-api.herokuapp.com/characters?name=${req.query.name}&limit=${req.query.limit}&skip=${req.query.skip}&apiKey=${process.env.API_SECRET_KEY}`;
    } else {
      url = `https://lereacteur-marvel-api.herokuapp.com/characters?&limit=${req.query.limit}&skip=${req.query.skip}&apiKey=${process.env.API_SECRET_KEY}`;
    }

    axios
      .get(url)
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
