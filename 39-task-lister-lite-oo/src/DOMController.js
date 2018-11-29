class DOMController {
  constructor(taskList) {
    this.taskList = taskList
    this.newTaskForm = document.getElementById('create-task-form')
    this.newTaskDescription = document.getElementById('new-task-description')
    this.taskUlForAppendingTasks = document.getElementById('tasks')
    this.newTaskForm.addEventListener('submit', this.handleAddTask.bind(this))
    this.taskUlForAppendingTasks.addEventListener('click', this.handleDeleteTask.bind(this))
    this.taskUlForAppendingTasks.innerHTML = this.taskList.renderTasks()
  }

  handleAddTask(event) {
    event.preventDefault()
    this.taskList.createTask(this.newTaskDescription.value).then(() => this.taskUlForAppendingTasks.innerHTML = this.taskList.renderTasks())
    event.target.reset()
  }

  handleDeleteTask(event) {
    if (event.target.className === 'delete') {
      this.taskUlForAppendingTasks.innerHTML = this.taskList.deleteTask(event.target.dataset.id)
    }
  }
}
