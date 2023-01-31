const router = require("express").Router();
const posterModel = require("../models/posterModel");

router.post("/addPoster", async (req, res) => {
  try {
    const newPoster = new posterModel(req.body);
    await newPoster.save().then(() => {
      res.status(200).json({ message: "Poster Added Successfully" });
    });
  } catch (error) {
    console.log(error);
  }
});

// GET

router.get("/getPoster", async (req, res) => {
  let poster;
  try {
    poster = await posterModel.find();
    res.status(200).json({ poster });
  } catch (error) {
    console.log(error);
  }
});

//GET REQ WITH  ID
router.get("/getPoster/:id", async (req, res) => {
  let poster;
  const id = req.params.id;
  try {
    poster = await posterModel.findById(id);
    res.status(200).json({ poster });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
