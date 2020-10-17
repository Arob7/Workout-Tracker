const Workout = require("../models/workoutModel.js");

const router = require("express").Router();

// READS WORKOUTS
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((db) => {
      // db.totalDuration = 15;
      // console.log(db);
      res.json(db);
    })
    .catch((err) => {
      res.json(err);
    });
});

//   CREATES NEW WORKOUT
router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then((db) => res.json(db))
    .catch((err) => {
      console.log("err", err);
      res.json(err);
    });
});

//   UPDATES BY ID
router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
    .then((db) => {
      res.json(db);
    })
    .catch((err) => {
      res.json(err);
    });
});

//   DISPLAYS STATS
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then((db) => {
      res.json(db);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
module.exports = router;
