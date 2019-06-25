// CRUD Create Read Update and Delete
const { MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database')
  }

  const db = client.db(databaseName)

  // db.collection('users').findOne({ _id: new ObjectID('5d129de65f7b1515884f558a')}, (error, user) => {
  //   if (error) {
  //     return console.log('Unable to fetch')
  //   }

  //   console.log(user)
  // })

  // db.collection('users').find({ age: 27 }).toArray((error, users) => {
  //   console.log(users)
  // })

  db.collection('tasks').findOne({ _id: new ObjectID("5d1297993b26a3232081fc60")}, (error, task) => {
    if(error) {
      return console.log('Unable to fetch')
    }
    console.log(task)
  })

  db.collection('tasks').find({ completed: false}).toArray((error, tasks) => {
    if(error) {
      return console.log('Unable to find tasks')
    }

    console.log(tasks)
  })
  
})