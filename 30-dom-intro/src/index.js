console.log('%c Hello, World!', 'color: orange')

const outerNode = document.getElementById('outer-node')

// if i want to add several img tags and put them inside the div with id container, how can i do this?


// find the div
const imgContainer = document.getElementById('container')

// iterate over the array of urls
// and create an image tag FOREACH element in the array

// dankMemes.forEach(function(singleMeme) {
//   // create a new img tag
//   // set the url for this img tag
//   // append the images to the imgContainer
//   const newImg = document.createElement('img')
//   newImg.src = singleMeme
//   imgContainer.appendChild(newImg)
// })

function createImgTag(url) {
  const newImg = document.createElement('img')
  newImg.src = url
  imgContainer.appendChild(newImg)
}



dankMemes.forEach(createImgTag)
