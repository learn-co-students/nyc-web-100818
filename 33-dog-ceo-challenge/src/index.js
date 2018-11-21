console.log('%c HI', 'color: firebrick')
// wait for the DOM to render in the browser
document.addEventListener('DOMContentLoaded', () => {
  // declare a variable for the dog breeds so we don't have to fetch each time we need the data
  let allBreeds = []
  // api endpoints
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  // dom nodes for attaching event listeners
  const dogImgContainer = document.getElementById('dog-image-container')
  const dogBreedUl = document.getElementById('dog-breeds')
  const breedDropdown = document.getElementById('breed-dropdown')
  // listen for clicks on the li
  dogBreedUl.addEventListener('click', (event) => event.target.style.color = 'red')
  // without arrow fn:
  // dogBreedUl.addEventListener('click', function(event) {
  // event.target will be the node that was clicked
  //   event.target.style.color = 'red'
  // })

  breedDropdown.addEventListener('change', /*function*/(event) => {
    const selectedLetter = event.target.value //'a' 'b' 'c' or 'd'
    // filter out the dogs whose names don't match the selected letter
    const filteredBreeds = allBreeds.filter((breed) => breed.startsWith(selectedLetter))
    // without arrow fn:
    // const filteredBreeds = allBreeds.filter(function(breed) {
    //   return breed.startsWith(selectedLetter)
    //   // OR
    //   // 'string'[0] -> 's'
    //   return breed[0] === selectedLetter
    // })
    // set the innerHTML of the unordered list using our render helper fn
    dogBreedUl.innerHTML = createDogLis(filteredBreeds)
  })
// fetch will default to sending an HTTP GET request
  fetch(imgUrl, { method: 'GET' })
  // the initial `fetch` returns a promise with a response object inside of it
    .then(/*function*/(response) => {
      console.log(response)
      // .then takes a callback and passes the return val from the previous promise to it
      if (response.ok) { //if the HTTP status code is < 400
        // response.json() returns another promise
        // the only way to get the value is with another .then
        return response.json() //return the parsed json as a promise
      }
    })
    .then(/*function*/(dogImgData) => {
      console.log(dogImgData) //parsed data from our previous .then
      // dogImgData.message.forEach(function(imgUrl) {
      //   dogImgContainer.innerHTML += `<img src="${imgUrl}">`
      // })
      // const dogImgString = dogImgData.message.map((imgUrl) => {
      //   return `<img src="${imgUrl}">`
      // })
      // set the innerHTML of the <div> to a large string of img tags
      const dogImgString = dogImgData.message.map((imgUrl) => `<img src="${imgUrl}">`)
      dogImgContainer.innerHTML = dogImgString.join('')
    })


  fetch(breedUrl, { method: 'GET' })
  // arrow functions WITHOUT curlies {} will IMPLICITLY RETURN
    .then((resp) => resp.json())
    // the return value is our parsed json; the breedData object
    .then((breedData) => {
      // breedData is an object whose keys are the breed names
      // Object.keys({ name: 'winfield', breed: 'terrier mix' }) -> ['name', 'breed']
      allBreeds = Object.keys(breedData.message) //set our allBreeds variable declared at the top of the DOMContentLoaded callback so we can hold on to the data in JS instead of fetching each time we need access to it
      console.log(allBreeds) //allBreeds is an array of dog breeds
      dogBreedUl.innerHTML = createDogLis(allBreeds) //use our helper fn to get the dog breeds onto the page as <li></li>
    })
})

// we could also move this to another file for helper functions
function createDogLis(dogBreedArray) {
  const dogLiStringArray =  dogBreedArray.map(function(breed) {
    // return the string below to our map function callback
    return `<li>${breed}</li>`
  })
  // join so we don't have commas on the page
  return dogLiStringArray.join('')
}


// same fn written as an arrow function:
// const createDogLis = /*function*/(dogBreedArray) => {
//   return dogBreedArray.map(breed => `<li>${breed}</li>`).join('')
// }
