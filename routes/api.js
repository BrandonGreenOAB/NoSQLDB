const router = require("express").Router();
const Workout = require("../models/workout");
const mongojs = require("mongojs");

// get all workouts from the db
router.get("/api/workouts", (req, res) => {
  Workout.find({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});

// create a workout when selecting "New Workout"
router.post("/api/workouts/", (req, res) => {
  var workout = req.body;
  console.log(req.body);
  //creates the workout from the workout model
  Workout.create({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", ({body, params}, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    {$push: {exercises: body}},
    // "runValidators" will ensure new exercises meet our schema requirments
    { new: true, runValidators: true }
  ).then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err)
  })
});

module.exports = router;
