const mongoose = require("mongoose")

const characterSchema = mongoose.Schema(
  {
    name: {type: String, requiered: true},
    age: {type: String, requiered: true},
    kanji: {type: String, requiered: true},
    Profession: {type: String, requiered: true},
    specie: {type: String, requiered: true},
    description: {type: String, requiered: true},
    image: {type: String, requiered: true},
  }
)

module.exports = new mongoose.model("Characters", characterSchema);
