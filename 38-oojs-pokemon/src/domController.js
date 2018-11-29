class DOMController {
  constructor() {
    this.pokemonDivContainer = document.getElementById('pokemon-container')
  }

  appendAllPokemonToPage(htmlString) {
    this.pokemonDivContainer.innerHTML = htmlString
  }
}
