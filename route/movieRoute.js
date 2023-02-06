const router = require("express").Router();
const movieModel = require("../models/movieModel");

router.post("/addMovie", async (req, res) => {
  try {
    const newMovie = new movieModel(req.body);
    await newMovie.save().then(() => {
      res.status(200).json({ message: "Movie Added Successfully" });
    });
  } catch (error) {
    console.log(error);
  }
});

// GET

router.get("/getMovie", async (req, res) => {
  let movie;
  try {
    movie = await movieModel.find();
    res.status(200).json({ movie });
  } catch (error) {
    console.log(error);
  }
});

//GET REQ WITH  ID
router.get("/getMovie/:id", async (req, res) => {
  let movie;
  const id = req.params.id;
  try {
    movie = await movieModel.findById(id);
    res.status(200).json({ movie });
  } catch (error) {
    console.log(error);
  }
});

//UPDATE Episode BY ID

router.put("/updateMovie/:id", async (req, res) => {
  const id = req.params.id;
  const { title, posters, movies } = req.body;
  let movie;
  try {
    movie = await movieModel.findByIdAndUpdate(id, {
      title,
      posters,
      movies,
    });
    movie = await movie
      .save()
      .then(() => res.json({ message: "Data Update" }));
  } catch (error) {
    console.log(error);
  }
});

//Delete episode BY id
router.delete("/deleteMovie/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await movieModel
      .findByIdAndDelete(id)
      .then(() => res.status(201).json({ message: "Delete Successfully" }));
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
