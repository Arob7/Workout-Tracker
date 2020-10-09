const mongoose = require("mongoose");

const Fitness = require("./fitnessModel.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbFitness", {
  useNewUrlParser: true,
});
