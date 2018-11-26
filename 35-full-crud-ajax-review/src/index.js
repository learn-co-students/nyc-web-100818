console.log('hi')

// when the page loads, i should see all of the images on the page

document.addEventListener('DOMContentLoaded', function(e) {
  const imagesDiv = document.getElementById('images')
  const newPostForm = document.getElementById('new-post-form')
  // const imagesDiv = document.getQuerySelector('#images')

  newPostForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const newPostTitle = e.target.querySelector('#new-post-title').value
    // const newPostTitle = document.getElementById('new-post-title').value
    const newPostUrl = e.target.querySelector('#new-post-url').value
    if (e.target.dataset.action === 'create') { //form is on 'create' mode
      // e.target is the form itself
      // form has some children, the input fields
      // we can query for those input fields by id

      // optimistic rendering; NOT WAITING FOR A SERVER RESPONSE
      imagesDiv.innerHTML += `<div>
      <h1>${newPostTitle}</h1>
      <img src="${newPostUrl}">
      <hr>
      </div>`

      ///////////////////////////////////
      fetch('http://localhost:3000/images', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', //data we are sending to the server
          'Accept': 'application/json' //data type we want back from the server
        },
        body: JSON.stringify({
          title: newPostTitle,
          url: newPostUrl
        })
      }) //pessimistic rendering. waiting for the server to send back a response before udpating the DOM
      .then(r => r.json())
      .then(newImgJSON => { //JSON representing the newly created img
        console.log(newImgJSON)
        //   imagesDiv.innerHTML += `<div>
        //                             <h1>${newImgJSON.title}</h1>
        //                             <img src="${newImgJSON.url}">
        //                             <hr>
        //                           </div>`
      })

    } else if (e.target.dataset.action === 'edit') { //form is in 'edit' mode
      fetch(`http://localhost:3000/images/${e.target.dataset.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          title: newPostTitle,
          url: newPostUrl
        })
      }) //id stored in the form itself
        .then(r => r.json())
        .then(console.log)
      console.log('EDITING NOW')
      console.log(newPostTitle, newPostUrl)
    }
  })

  fetch('http://localhost:3000/images', { method: 'GET' })
    .then(function(responseObject) {
      return responseObject.json() //returns a promise
    })
    .then(function(parsedJSONResponseImageArray) {
      // parsedJSONResponseImageArray.forEach(function(image) {
      //   // this method does not use the forEach return value
      //   console.log(image)
      //   const newImgTag = document.createElement('img')
      //   newImgTag.src = image.url
      //   imagesDiv.appendChild(newImgTag)
      // })
      const jsonAsHTML = parsedJSONResponseImageArray.map(function(imageObj) {
        return `<div>
                  <h1>${imageObj.title}</h1>
                  <button class="edit" data-action="edit" data-id="${imageObj.id}">Edit</button>
                  <img src="${imageObj.url}">
                  <hr>
                </div>`
      }).join('')
      imagesDiv.innerHTML = jsonAsHTML//.join('')
      // take this array of data and create dom nodes
    })
  console.log('what will run frist')

  imagesDiv.addEventListener('click', function(e) {
    // take the id of the post that was clicked, fetch to the server
    // use that data to fill the form
    if (e.target.className === 'edit') {
      const clickedImageId = e.target.dataset.id //id stored in the edit button
      fetch(`http://localhost:3000/images/${clickedImageId}`)
        .then(r => r.json())
        .then(foundImgObj => {
          document.getElementById('new-post-title').value = foundImgObj.title
          document.getElementById('new-post-url').value = foundImgObj.url
          document.getElementById('new-post-button').innerText = 'Edit'
          newPostForm.dataset.action = 'edit' //set the form to edit 'mode' because the user clicked the edit button
          newPostForm.dataset.id = clickedImageId //save the id of the clicked img in a dataset
        })
    }
  })
})
