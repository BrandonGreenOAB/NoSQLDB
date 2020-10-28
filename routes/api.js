const router = require("express").Router();
const Workout = require("../models/workout");


router.post("/api/workouts/", (req, res) => {
  var workout = req.body;
  console.log(req.body);

  Workout.create({
    day: workout.day,
    exercises: workout.exercises,
  });

  res.json(workout)
});

// router.put("/api/workouts/:id", (req, res) => {
//   var id = req.body.id;
// });

module.exports = router;
