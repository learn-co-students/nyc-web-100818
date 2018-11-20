console.log('%c Hello lol', 'color:goldenrod')

document.addEventListener('DOMContentLoaded', function () {
  const firstHeader = document.querySelector('h3')
  console.log(firstHeader)

  const commentForm = document.querySelector('#comment-form')
  const commentDiv = document.querySelector('#comments-container')

  commentForm.addEventListener('submit', function submitForm(event) {
    event.preventDefault() //prevent the form from its default action of POSTing
    // const userInputField = document.querySelector('#new-comment')
    // const userInputField = commentForm.querySelector('#new-comment')
    // the event.target will be the element/node that recieved the event
    const userInputField = event.target.querySelector('#new-comment')

    const newPTag = document.createElement('p')
    newPTag.innerText = userInputField.value //value is the string the user input
    commentDiv.appendChild(newPTag)

    console.log(userInputField.value)
    // event.target is the form itself
    event.target.reset() //reset the form to its initial state (how it was in the HTML file when the page first loaded)
  })

  document.getElementById('helicopter-parent').addEventListener('click', function(e) {
    console.log(`%c The event is:`, 'color: pink', e)
    console.log(`%c The event TARGET is:`, 'color: cyan', e.target)
    switch (e.target.dataset.name) {
      case "alert":
        window.alert('u clicked teh alert btn')
        break;
      case "log":
        console.log('u clicked log')
        break;
      case "error":
        console.error('u clicked error')
        break;
      default:
    }
  })

})
