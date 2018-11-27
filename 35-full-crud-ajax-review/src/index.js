document.addEventListener('DOMContentLoaded', function(e) {
  const imagesDiv = document.getElementById('images')
  const newPostForm = document.getElementById('new-post-form')
  // const imagesDiv = document.getQuerySelector('#images')

  newPostForm.addEventListener('submit', function(e) {
    const newPostTitle = e.target.querySelector('#new-post-title').value
    // const newPostTitle = document.getElementById('new-post-title').value
    const newPostUrl = e.target.querySelector('#new-post-url').value
    if (e.target.dataset.action === 'create') { //form is on 'create' mode
       createImage(newPostTitle, newPostUrl)
        .then(r => r.json())
        .then(newImgJSON => { //JSON representing the newly created img
          console.log(newImgJSON)
          imagesDiv.innerHTML += renderSingleImage(newImgJSON)
        })
    } else if (e.target.dataset.action === 'edit') { //form is in 'edit' mode
      editImage(e.target.dataset.id, newPostTitle, newPostUrl)
        .then(r => r.json())
        .then((updatedImg) => {
          const targetImgDiv = document.getElementById(`image-${updatedImg.id}`)
          targetImgDiv.querySelector('.post-header').innerText = updatedImg.title
          targetImgDiv.querySelector('.post-img').src = updatedImg.url
        })
    }
    e.target.reset()
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
      imagesDiv.innerHTML = renderAllImages(parsedJSONResponseImageArray)
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
