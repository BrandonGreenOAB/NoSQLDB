const router = require("express").Router();
const Workout = require("../models/workout");
const mongojs = require("mongojs");

router.get("/api/workouts", (req, res) => {
  Workout.find({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});

router.post("/api/workouts/", (req, res) => {
  var workout = req.body;
  console.log(req.body);

  Workout.create({
    id: mongojs.ObjectId(req.body.id),
    day: workout.day,
    exercises: workout.exercises,
  });

  res.json(workout);
});

router.put("/api/workouts/:id", (req, res) => {
  var id = req.params.id;
  var wBody = req.body;

  Workout.update(
    {
      _id: mongojs.ObjectId(id),
    },
    {
      $set: {
        type: wBody.type,
        name: wBody.name,
        duration: wBody.duration,
        weight: wBody.weight,
        reps: wBody.reps,
        sets: wBody.sets,
        distance: req.body.distance,
        duration: req.body.duration,
      },
    }
  ).then((data) => {
    res.json(data);
  });
});

module.exports = router;
