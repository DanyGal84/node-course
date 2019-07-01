/* eslint-disable no-console */
const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//   res.status(503).send('Site under maintenance, please come back soon')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
  console.log(`Server is up in port ${port}`)
})

// const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
  // const task = await Task.findById('5d1a2e86c55ba73128e5e7e8')
  // await task.populate('owner').execPopulate()
  // console.log(task.owner)

  const user = await User.findById('5d1a2da7bb28eb3090db065c')
  await user.populate('tasks').execPopulate()
  console.log(user.tasks)
}

main()