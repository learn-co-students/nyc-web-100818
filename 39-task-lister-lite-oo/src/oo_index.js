document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/lists/1/?_embed=tasks')
    .then(r => r.json())
    .then(listData => {
      const taskList = new TaskList(listData)
      const domController = new DOMController(taskList)
    })
})
