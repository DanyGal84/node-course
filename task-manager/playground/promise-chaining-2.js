require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5d13d5bb17500d3c68eab77c').then((task) => {
//   console.log(task)
//   return Task.countDocuments({ completed: false })
// }).then((result) => {
//   console.log('Total incomplete tasks: ' + result)
// }).catch((error) => {
//   console.log(error)
// })

const deleteTaskandCount = async (id) => {
  const task = await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({ completed: false})
  return count
}

deleteTaskandCount('5d13b35b265cbb3968a91bbb').then((count) => {
  console.log(count)
}).catch((error) => {
  console.log(error)
})