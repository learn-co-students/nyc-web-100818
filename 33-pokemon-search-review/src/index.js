document.addEventListener('DOMContentLoaded', () => {
  // send a get request to the server
  // grab all the pokemon data
  const containerForAppendingPokemonCards = document.getElementById('pokemon-container')
  const pokemonSearchInputField = document.getElementById('pokemon-search-input')
  let allPokemonData = []

  pokemonSearchInputField.addEventListener('input', function(event) {
    // event is the input event
    // event.target is the <input> field the user typed into
    // event.target.value is the string the use input; 'charizard'
    const userSearchTerm = event.target.value
    const filteredPokemon = allPokemonData.filter(function(pokemonObject) {
      return  pokemonObject.name.includes(userSearchTerm)
    })
    const pokeHTML = filteredPokemon.map(function(pokemonObject) {
      return `
      <div class="pokemon-container">
      <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${pokemonObject.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img data-id="${pokemonObject.id}" data-action="flip" class="toggle-sprite" src="${pokemonObject.sprites.front}">
          </div>
        </div>
      </div>
    </div>
      `
    }).join('')
    containerForAppendingPokemonCards.innerHTML = pokeHTML
  })


  fetch('http://localhost:3000/pokemon', { method: 'GET' })
    .then(function (responseObject) {
      console.log(responseObject)
      return responseObject.json()
    })
    .then(function(parsedPokeJSON) {
      // store all the pokemon data in a JS array so we can interact with it AFTER the initial `fetch`
      allPokemonData = parsedPokeJSON
      console.table(parsedPokeJSON)
      // once we have the poke data let's try to get SOMETHING on the page
      parsedPokeJSON.forEach(function(pokemonObject) {
        containerForAppendingPokemonCards.innerHTML += `
        <div class="pokemon-container">
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
          <h1 class="center-text">${pokemonObject.name}</h1>
          <div style="width:239px;margin:auto">
            <div style="width:96px;margin:auto">
              <img data-id="${pokemonObject.id}" data-action="flip" class="toggle-sprite" src="${pokemonObject.sprites.front}">
            </div>
          </div>
        </div>
      </div>
        `
      })
    })
})
