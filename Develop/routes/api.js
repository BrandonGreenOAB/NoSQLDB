const router = require("express").Router;
const Workout = require("../models/workout")

router.post("/api/workouts", (req, res) => {
    var workout = req.body;

    Workout.create({
        day: workout.day,
        exercises: workout.exercises
    })
})