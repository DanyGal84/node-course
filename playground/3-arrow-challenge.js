const tasks = {
  tasks: [{
    text: 'Grocery Shopping',
    completed: true
  },
  {
    text: 'Clean yard',
    completed: false
  },
  {
    text: 'Film course',
    completed: false
  }],
  getTaskTodo() {
    return this.tasks.filter(task => task.completed === false);
  }
}

console.log(tasks.getTaskTodo());