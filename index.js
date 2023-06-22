const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const Person = require('./models/person')
const Team = require('./models/team')
const Task = require('./models/task')
const assignTask = require('./helpers/assignTask')

const dbUrl = process.env.MONGODB_URL
console.log(dbUrl)
const app = express()

app.use(cors())

app.use(express.json())

app.get("/", (req, res) => {
  console.log('received request on home route')
  res.send("home route working")
})

app.post("/createPerson", async (req, res) => {
  const { name } = req.body
  const person = await Person.create({ name })
  // console.log(person._id)
  res.send('created person')
})

app.post("/createTeam", async (req, res) => {
  const { name, members } = req.body
  const team = await Team.create({ name, members })
  res.send('created team')
})

app.get("/getAllTeams", async (req, res) => {
  const teams = await Team.find({}).populate({ path: 'members' , model: 'Person' })
  res.send({teams})
})

app.post("/createTask", async (req, res) => {
  const { taskName, teamId } = req.body
  console.log(taskName, teamId)
  const task = await Task.create({ name: taskName })
  const result = await assignTask({ taskId: task._id, teamId })
  console.log(result)
  res.send({result})
})

mongoose.connect(dbUrl)
  .then(() => {
  console.log('database connected')
  }).then(() => {
    app.listen(8080, () => {
      console.log('server started')
    })
})

