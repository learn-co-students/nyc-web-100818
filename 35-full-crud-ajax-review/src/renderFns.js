function renderSingleImage(imageObj) {
  return `
        <div id="image-${imageObj.id}">
          <h1 class="post-header">${imageObj.title}</h1>
          <button class="edit" data-action="edit" data-id="${imageObj.id}">Edit</button>
          <button class="delete" data-action="delete" data-id="${imageObj.id}">Delete Post</button>
          <img class="post-img" src="${imageObj.url}">
          <hr>
        </div>
  `
}

function renderAllImages(imageArray) {
  return imageArray.map(renderSingleImage).join('')
}


function editImage(id, title, url) {
  return fetch(`http://localhost:3000/images/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      title: title,
      url: url
    })
  }) //id stored in the form itself

}

function createImage(title, url) {
  return fetch('http://localhost:3000/images', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', //data we are sending to the server
      'Accept': 'application/json' //data type we want back from the server
    },
    body: JSON.stringify({
      title: title,
      url: url
    })
  })
}


function deleteImg(imgId) {
  return fetch(`http://localhost:3000/images/${imgId}`, { method: 'DELETE' })
}
