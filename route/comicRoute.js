const router = require("express").Router();
const comicModel = require("../models/comicModel");

router.post("/addComic", async (req, res) => {
  try {
    const newComic = new comicModel(req.body);
    await newComic.save().then(() => {
      res.status(200).json({ message: "Comic Added Successfully" });
    });
  } catch (error) {
    console.log(error);
  }
});

// GET

router.get("/getComic", async (req, res) => {
  let comic;
  try {
    comic = await comicModel.find();
    res.status(200).json({ comic });
  } catch (error) {
    console.log(error);
  }
});

//GET REQ WITH  ID
router.get("/getComic/:id", async (req, res) => {
  let comic;
  const id = req.params.id;
  try {
    comic = await comicModel.findById(id);
    res.status(200).json({ comic });
  } catch (error) {
    console.log(error);
  }
});

//UPDATE Episode BY ID

router.put("/updateComic/:id", async (req, res) => {
  const id = req.params.id;
  const { comics, num, link } = req.body;
  let comic;
  try {
    comic = await comicModel.findByIdAndUpdate(id, {
      comics,
      num,
      link,
    });
    comic = await comic
      .save()
      .then(() => res.json({ message: "Data Update" }));
  } catch (error) {
    console.log(error);
  }
});

//Delete episode BY id
router.delete("/deleteComic/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await comicModel
      .findByIdAndDelete(id)
      .then(() => res.status(201).json({ message: "Delete Successfully" }));
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
