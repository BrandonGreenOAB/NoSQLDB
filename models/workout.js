const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date(),
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter excercise type",
        },
        name: {
          type: String,
          trim: true,
          required: "Enter exercise name",
        },
        duration: {
          type: Number,
          required: "Enter a duration of exercise in minutes",
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        distance: {
          type: Number,
        },
        sets: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: {
      //include any virtual properties when data is requested
      virtuals: true,
    },
  }
);
workoutSchema.virtual("totalDuration").get(function () {
  //"reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercises) => {
    return total + exercises.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
