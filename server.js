const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors");
const app = express()
const charactersRoute = require("./route/charactersRoute")
const posterRoute = require("./route/posterRoute")
const comicRoute = require("./route/comicRoute")
const movieRoute = require("./route/movieRoute")
require('dotenv').config();
require("./connection/conn");


mongoose.set('strictQuery', false);
app.use(cors());
app.use(express.json());

app.use("/chainsawman/v1", charactersRoute);
app.use("/chainsawman/v1", posterRoute);
app.use("/chainsawman/v1", comicRoute);
app.use("/chainsawman/v1", movieRoute);


app.listen(3000, () => {
  console.log(`Node API app is running on port 3000`)
})