const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const courseSchema = new Schema({
  name: { type: String, unique: true, required: true },
  description: { type: String, required: true },
  createdAt: {
    type: String,
    default: Date.now,
  },
});
const Course= mongoose.model('Course',courseSchema);
module.exports=Course;