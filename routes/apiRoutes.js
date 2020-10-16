const Workout = require("../models/workoutModel.js");

module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    Workout.find({})
      .then((db) => {
        res.json(db);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //   CREATES NEW WORKOUT
  app.post("/api/workouts", function (req, res) {
    Workout.create({})
      .then((db) => res.json(db))
      .catch((err) => {
        console.log("err", err);
        res.json(err);
      });
  });

  //   UPDATES BY ID
  app.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
      .then((db) => {
        res.json(db);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //   DISPLAYS STATS
  app.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .then((db) => {
        res.json(db);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
};
