const Person = require('../models/person')
const Task = require('../models/task')
const Team = require('../models/team')

async function assignTask({ taskId, teamId }) {
  const task = await Task.findById(taskId)
  const team = await Team.findById(teamId)
  const lastAssigned = team.lastAssigned.length > 0 ? team.lastAssigned[team.lastAssigned.length - 1] : -1
  let assignTo = -1
  if (lastAssigned == -1 || lastAssigned >= team.members.length - 1) { // optimise this
    assignTo = 0
  } else {
    assignTo = lastAssigned+1
  }
  const updatedTeam = await Team.findByIdAndUpdate(teamId, { $push: { lastAssigned: assignTo } })
  const person = await Person.findById(team.members[assignTo])
  return {taskName: task.name, teamName : team.name, personName: person.name}
}

module.exports = assignTask