document.addEventListener('DOMContentLoaded', () => {
  const domController = new DOMController //find dom nodes we care about and attach event listeners
  const pokeAdapter = new JSONAPIAdapter('http://localhost:3000/pokemon')
  pokeAdapter.getAll() //helper method to send a GET request to http://localhost:3000/pokemon
    .then(resp => {
      if (resp.ok) { // HTTP status code < 400
        return resp.json() //parse json and return it so we can access it in the next `.then` callback fn
      }
    })
    .then(parsedPokeJSON => {
      parsedPokeJSON.forEach(singlePoke => new Pokemon(singlePoke)) //instantiate poke instances
      domController.appendAllPokemonToPage(Pokemon.renderAllPokemon()) //add those poke instances to the page
    })
})
