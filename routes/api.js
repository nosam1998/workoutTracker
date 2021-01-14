const express = require("express");
const router = express.Router();

const Workout = require("../models/workout");

router.get("/workouts", (req, res) => {
  Workout.find({})
    .sort({ _id: -1 })
    .limit(1)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/workouts/", ({ body }, res) => {
  Workout.create(body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/workouts/:id", ({ body, params }, res) => {
  Workout.findOneAndUpdate(
    { _id: params.id },
    { $push: { exercises: body } },
    { new: true }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/workouts/range", (req, res) => {
  Workout.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;