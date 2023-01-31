const router = require("express").Router();
const characterModel = require("../models/characterModel");

router.post("/addCharacter", async (req, res) => {
  try {
    const newCharacter = new characterModel(req.body);
    await newCharacter.save().then(() => {
      res.status(200).json({ message: "Character Added Successfully" });
    });
  } catch (error) {
    console.log(error);
  }
});

// GET

router.get("/getCharacter", async (req, res) => {
  let characters;
  try {
    characters = await characterModel.find();
    res.status(200).json({ characters });
  } catch (error) {
    console.log(error);
  }
});

//GET REQ WITH  ID
router.get("/getCharacter/:id", async (req, res) => {
  let character;
  const id = req.params.id;
  try {
    character = await characterModel.findById(id);
    res.status(200).json({ character });
  } catch (error) {
    console.log(error);
  }
});

//UPDATE Episode BY ID

router.put("/updateCharacter/:id", async (req, res) => {
  const id = req.params.id;
  const { Species, Age, Planet, Profession, Status, Firstappearance, image, Name } = req.body;
  let character;
  try {
    character = await characterModel.findByIdAndUpdate(id, {
      Species,
      Age,
      Planet,
      Profession,
      Status,
      Firstappearance,
      image,
      Name
    });
    character = await character
      .save()
      .then(() => res.json({ message: "Data Update" }));
  } catch (error) {
    console.log(error);
  }
});

//Delete episode BY id
router.delete("/deleteCharacter/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await characterModel
      .findByIdAndDelete(id)
      .then(() => res.status(201).json({ message: "Delete Successfully" }));
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
