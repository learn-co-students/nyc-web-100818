document.addEventListener('DOMContentLoaded', (e) => {
  const imagesDiv = document.getElementById('images') //find the static imagesDiv (we'll be modifying the CONTENTS of this div not the div itself)
  const newPostForm = document.getElementById('new-post-form') //static form element on the page

  // initial fetch for all the image data
  getAllImageData() //helper function that sends a GET request to `/images`; the image index route
    .then((responseObject) => responseObject.json()) //returns a promise)
    .then((parsedJSONResponseImageArray) => {
      // parsedJSONResponseImageArray.forEach(function(image) {
      //   // this method does not use the forEach return value
      //   console.log(image)
      //   const newImgTag = document.createElement('img')
      //   newImgTag.src = image.url
      //   imagesDiv.appendChild(newImgTag)
      // })
      imagesDiv.innerHTML = renderAllImages(parsedJSONResponseImageArray) //render ALL of the images; this will happen after the initial fetch
    })

  newPostForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const newPostTitle = newPostForm.querySelector('#new-post-title').value
    // the event's target will be whatever element received the event. In the case of `submit`, this will be the form itself
    // const newPostTitle = e.target.querySelector('#new-post-title').value
    const newPostUrl = newPostForm.querySelector('#new-post-url').value
    if (e.target.dataset.action === 'create') { //form is on 'create' mode
    // this branch of our if statement could be moved to a helper fn as well
       createImage(newPostTitle, newPostUrl) //helper function that sends off a 'POST' request to our server
        .then((r) => r.json())
        .then((newImgJSON) => { //JSON representing the newly created img; this is what the server sends back after creating a new image in the database
          console.log('%c Newly created image data: ', 'color: purple', newImgJSON)
          imagesDiv.innerHTML += renderSingleImage(newImgJSON) //append the new image to the DOM using a helper method that returns an HTML string
        })
    } else if (e.target.dataset.action === 'edit') { //form is in 'edit' mode. this is set when the user clicks the edit button
      editImage(e.target.dataset.id, newPostTitle, newPostUrl) //helper function that sends a PATCH request to the server
        .then(r => r.json()) //parse the json from the response object
        .then((updatedImg) => {
          const targetImgDiv = document.getElementById(`image-${updatedImg.id}`) //find the div that needs to be updated with the new data
          targetImgDiv.querySelector('.post-header').innerText = updatedImg.title
          targetImgDiv.querySelector('.post-img').src = updatedImg.url
          // reset the form back to 'post mode'
          e.target.dataset.action = 'create'
          // OR
          // newPostForm.dataset.action = 'create'
          newPostForm.querySelector('#new-post-button').innerText = 'Create New Image'
        })
    }
    e.target.reset() //outside the if statement, reset the form inputs
  })

  imagesDiv.addEventListener('click', (e) => { //listen for clicks on the images div for the edit button (EVENT DELEGATION)
    // this is different from the form submission. we need to pre-fill the form with the image the user wants to edit and toggle the form to 'edit mode'
    if (e.target.className === 'edit') { //if the user clicked any of the edit buttons
      const clickedImageId = e.target.dataset.id
      getSingleImageData(clickedImageId) //send GET request to the server for the 'show' route for the clicked image
        .then((r) => r.json())
        .then((clickedImgJSON) => {
          newPostForm.querySelector('#new-post-title').value = clickedImgJSON.title
          newPostForm.querySelector('#new-post-url').value = clickedImgJSON.url
          newPostForm.querySelector('#new-post-button').innerText = 'Edit'
          newPostForm.dataset.action = 'edit' //set the form to edit 'mode' because the user clicked the edit button
          newPostForm.dataset.id = clickedImageId //save the id of the clicked img in a dataset (we'll need to use this when PATCHING to the database)
        })
    } else if (e.target.className === 'delete') { //the user clicked one of the delete buttons
      deleteImg(e.target.dataset.id) //helper fn that sends a DELETE request to the server
      // document.getElementById(`image-${e.target.dataset.id}`).remove()
      imagesDiv.querySelector(`#image-${e.target.dataset.id}`).remove() //remove the image div from the page
    }
  })
})
