const mongoose = require("mongoose");
const { Schema } = mongoose;

const WorkoutSchema = new Schema({
    day: Date,
    exercises: [{
        type: String,
        name: String,
        duration: String,
        weight: String,
        reps: String,
        sets: String
    }]
});


//     , { toJSON: { virtuals: true }});
// WorkoutSchema.virtual("totalDuration").get(function () {
//     return this.exercises.reduce((total, exercises) => {
//         return total + exercises.duration;
//     }, 0);
// });

// const Workout = mongoose.model("Workout", WorkoutSchema);

// module.exports = Workout;
module.exports = mongoose.model("Workout", WorkoutSchema);