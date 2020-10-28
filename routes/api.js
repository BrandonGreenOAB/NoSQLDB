const router = require("express").Router;
const Workout = require("../models/workout")

router.post("/api/workouts/", (req, res) => {
    var workout = req.body;
    console.log(req.body);

    Workout.create({
        day: workout.day,
        exercises: workout.exercises
    });

    res.status(204).end();
})