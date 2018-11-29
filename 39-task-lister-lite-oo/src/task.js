class Task {
  // constructor(taskDetails) {
  //   this.id = taskDetails.id
  //   this.content = taskDetails.content
  // }
  constructor({ id, content }) {
    // arg passed in -> { id: 1, content: 'it is brick outside' }
    // const { id, content } = arg
    this.id = id
    this.content = content
  }

  render() {
    return `<li>${this.content} <button data-id="${this.id}" class="delete">X</button></li>`
  }
}
