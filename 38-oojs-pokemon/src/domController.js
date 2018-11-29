class DOMController {
  constructor() {
    this.pokemonDivContainer = document.getElementById('pokemon-container')
    this.pokemonDivContainer.addEventListener('click', this.handle)
  }

  appendAllPokemonToPage(htmlString) {
    this.pokemonDivContainer.innerHTML = htmlString
  }
}
