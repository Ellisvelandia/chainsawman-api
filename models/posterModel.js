const mongoose = require("mongoose")

const posterSchema = mongoose.Schema(
  {
    sypnosis: {type: String, requiered: true},
    poster: {type: String, requiered: true},
    trailer: {type: String, requiered: true},
    logo: {type: String, requiered: true},
    Author: {type: String, requiered: true},
    Genre: {type: String, requiered: true},
  }
)

module.exports = new mongoose.model("Poster", posterSchema);
