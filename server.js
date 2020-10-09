const mongoose = require("mongoose");

const Fitness = require("./workoutModel.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
});
