const mongoose = require("mongoose")

const comicSchema = mongoose.Schema(
  {
    comic: { type: String, requiered: true },
    num: { type: String, requiered: true },
    link: { type: String, requiered: true },
  }
)

module.exports = new mongoose.model("Comic", comicSchema);
