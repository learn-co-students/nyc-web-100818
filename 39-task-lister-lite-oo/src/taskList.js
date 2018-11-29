class TaskList {
  constructor({ name, tasks }) {
    // ars -> { name: 'flat', tasks: ['ironschool'] }
    // const { name, tasks } = args
    this.name = name
    this.tasks = tasks.map(t => new Task(t))
  }

  createTask(taskTitle) {
    return fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        listId: 1,
        content: taskTitle
      })
    })
    .then(r => r.json()).then(newTaskJSON => {
      this.tasks.push(new Task(newTaskJSON))
    })
  }

  deleteTask(id) {
    const idxToDelete = this.tasks.findIndex(t => t.id == id)
    this.tasks.splice(idxToDelete, 1)
    return this.renderTasks()
  }

  renderTasks() {
    return this.tasks.map(t => t.render()).join('')
  }
}
