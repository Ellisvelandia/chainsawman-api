const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors");
const app = express()
const charactersRoute = require("./route/charactersRoute")
const posterRoute = require("./route/posterRoute")
require('dotenv').config();
require("./connection/conn");


mongoose.set('strictQuery', false);
app.use(cors());
app.use(express.json());

app.use("/chainsawman/v1", charactersRoute);
app.use("/chainsawman/v1", posterRoute);


app.listen(3000, () => {
  console.log(`Node API app is running on port 3000`)
})