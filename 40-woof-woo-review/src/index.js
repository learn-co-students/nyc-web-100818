document.addEventListener('DOMContentLoaded', () => {
  const filterDiv = document.getElementById('filter-div')
  const goodDogFilterBtn = document.getElementById('good-dog-filter')
  const dogBarDiv = document.getElementById('dog-bar')
  const dogSummaryContainer = document.getElementById('dog-summary-container')
  const dogInfoDiv = document.getElementById('dog-info')

  let allDogs = []

  dogBarDiv.addEventListener('click', (event) => {
    // console.log(event.target);
    if(event.target.className == 'dog-card') {
      console.log('hi')
    }
  })

  goodDogFilterBtn.addEventListener('click', (event) => {
    console.log(event.target.innerText)
    if (event.target.innerText === 'Filter good dogs: OFF') {
      event.target.innerText = 'Filter good dogs: ON'
      let filteredDogs = allDogs.filter(dog => dog.isGoodDog)
      dogBarDiv.innerHTML = ''
      filteredDogs.forEach(dog => dogBarDiv.innerHTML += `<span class='dog-card' id=${dog.id}>${dog.name}</span>`)

      let dogSpans = Array.from(document.querySelectorAll('span'))

      // console.log(dogSpans);
      dogSpans.forEach(span => {
        span.addEventListener('click', (event) => {
          let clickedDog = allDogs.find(dog => dog.id === parseInt(event.target.id))
          console.log(clickedDog);
          let goodOrBad
          if (clickedDog.isGoodDog) {
            goodOrBad = 'Good Dog!'
          } else {
            goodOrBad = 'Bad Dog!'
          }
          dogInfoDiv.innerHTML += `
            <img src=${clickedDog.image}>
            <h2>${clickedDog.name}</h2>
            <button class='goodOrBadButton' data-id=${clickedDog.id}>${goodOrBad}</button>
          `
        })
      })
    } else {
      event.target.innerText = 'Filter good dogs: OFF'
      dogBarDiv.innerHTML = ''
      allDogs.forEach(dog => dogBarDiv.innerHTML += `<span class='dog-card' id=${dog.id}>${dog.name}</span>`)

      let dogSpans = Array.from(document.querySelectorAll('span'))

      // console.log(dogSpans);
      dogSpans.forEach(span => {
        span.addEventListener('click', (event) => {
          let clickedDog = allDogs.find(dog => dog.id === parseInt(event.target.id))
          console.log(clickedDog);
          let goodOrBad
          if (clickedDog.isGoodDog) {
            goodOrBad = 'Good Dog!'
          } else {
            goodOrBad = 'Bad Dog!'
          }
          dogInfoDiv.innerHTML += `
            <img src=${clickedDog.image}>
            <h2>${clickedDog.name}</h2>
            <button class='goodOrBadButton' data-id=${clickedDog.id}>${goodOrBad}</button>
          `
        })
      })
    }
  })

  const getDogs = () => {
    fetch('http://localhost:3000/pups')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        allDogs = data
        allDogs.forEach(dog => {
          // debugger
          // console.log(dog)
          dogBarDiv.innerHTML += `<span class='dog-card' id=${dog.id}>${dog.name}</span>`
        })

        let dogSpans = Array.from(document.querySelectorAll('span'))

        // console.log(dogSpans);
        dogSpans.forEach(span => {
          span.addEventListener('click', (event) => {
            let clickedDog = allDogs.find(dog => dog.id === parseInt(event.target.id))
            console.log(clickedDog);
            let goodOrBad
            if (clickedDog.isGoodDog) {
              goodOrBad = 'Good Dog!'
            } else {
              goodOrBad = 'Bad Dog!'
            }
            dogInfoDiv.innerHTML += `
              <img src=${clickedDog.image}>
              <h2>${clickedDog.name}</h2>
              <button class='goodOrBadButton' data-id=${clickedDog.id}>${goodOrBad}</button>
            `
          })
        })

      })
  }
  getDogs()

  dogSummaryContainer.addEventListener('click', (event) => {
    // console.log(event.target.tagName)
    if( event.target.className === 'goodOrBadButton') {
      // console.log(event.target.dataset.id);
      if (event.target.innerText === 'Good Dog!') {
        event.target.innerText = 'Bad Dog!'
      } else {
        event.target.innerText = 'Good Dog!'
      }
      let clickedDog = allDogs.find(dog => dog.id === parseInt(event.target.dataset.id))
      clickedDog.isGoodDog = !clickedDog.isGoodDog

      allDogs = allDogs.map(dog => {
        if (dog.id === clickedDog.id) {
          return clickedDog
        } else {
          return dog
        }
      })

      fetch(`http://localhost:3000/pups/${event.target.dataset.id}`, {
        method: 'PATCH',
        headers: {
          'accept': 'application/json',
          'content-type': 'application/json'
        },
        body: JSON.stringify(clickedDog)
      })
        .then(response => response.json())
        .then(console.log)

    }
  })

})
