const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/comics", async (req, res) => {
  try {
    let url = `${process.env.URL}/comics?&limit=${req.query.limit}&skip=${req.query.skip}&apiKey=${process.env.API_SECRET_KEY}`;
    if (req.query.title) {
      url = `${url}&title=${req.query.title}`;
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

router.get("/comics/:id", async (req, res) => {
  try {
    axios
      .get(
        `${process.env.URL}/comics/${req.params.id}?apiKey=${process.env.API_SECRET_KEY}`
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
