const mongoose = require('mongoose')
const { Schema } = mongoose;

const teamSchema = new Schema({
  name: String,
  members: [{ type: mongoose.Schema.Types.ObjectId }],
  lastAssigned: [{ type: Number, default: -1 }]
})

const Team = mongoose.model('Team', teamSchema)
module.exports = Team