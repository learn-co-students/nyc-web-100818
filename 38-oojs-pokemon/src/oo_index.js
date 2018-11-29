document.addEventListener('DOMContentLoaded', () => {
  const domController = new DOMController
  const pokeAdapter = new JSONAPIAdapter('http://localhost:3000/pokemon')
  pokeAdapter.getAll()
    .then(resp => {
      if (resp.ok) {
        return resp.json()
      }
    })
    .then(parsedPokeJSON => {
      parsedPokeJSON.forEach(singlePoke => new Pokemon(singlePoke))
      domController.appendAllPokemonToPage(Pokemon.renderAllPokemon())
      // const ivy = new Pokemon(parsedPokeJSON[0])
      // domController.appendAllPokemonToPage(ivy.render())
      // domController.appendPokemonToPage(someHTMLString)
      // document.getElementById('pokemon-container').innerHTML += ivy.render()
    })

    // pokeAdapter.getSingleItem(25).then(r => r.json()).then(console.log)
})
