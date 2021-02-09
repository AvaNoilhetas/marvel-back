const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/characters", async (req, res) => {
  try {
    let url = `${process.env.URL}/characters?&limit=${req.query.limit}&skip=${req.query.skip}&apiKey=${process.env.API_SECRET_KEY}`;

    if (req.query.name) {
      url = `${url}&name=${req.query.name}`;
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
