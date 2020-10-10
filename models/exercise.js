const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const excerciseSchema = new Schema({
  name: {
    type: String,
    trim: true,
    require: "Enter exercise name",
  },
  type: {
    type: String,
    trim: true,
    require: "Enter type of exercise",
  },
  duration: {
    type: Number,
    trim: true,
    require: "Enter duration in minutes",
  },
  distance: Number,
  weight: Number,
  reps: Number,
  sets: Number,
});

const Transaction = mongoose.model("Exercise", exerciseSchema);

module.exports = Transaction;
