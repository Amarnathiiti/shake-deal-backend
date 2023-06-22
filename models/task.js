const mongoose = require('mongoose')
const { Schema } = mongoose;

const taskSchema = new Schema({
  name: String,
  duration: { type: Number, default: 60000 }
})

const Task = mongoose.model('Task', taskSchema)
module.exports = Task