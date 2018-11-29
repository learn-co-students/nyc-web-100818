class Pokemon {
  constructor(pokeData) { //TODO obj destructuring
    this.id = pokeData.id
    this.name = pokeData.name
    this.sprites = pokeData.sprites
    this.trainer_id = pokeData.trainer_id
    // to find trainer -> search through Trainer.all.find(t => t.id === this.trainer_id)
    // this.constructor.all.push(this)
    Pokemon.all.push(this)
  }

  static renderAllPokemon() {
    return Pokemon.all.map(p => p.render()).join('')
  }

  render() {
    return `
    <div class="pokemon-container">
    <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
    <h1 class="center-text">${this.name}</h1>
    <div style="width:239px;margin:auto">
    <div style="width:96px;margin:auto">
    <img data-id="${this.id}" data-action="flip" class="toggle-sprite" src="${this.sprites.front}">
    </div>
    </div>
    </div>
    </div>
    `
  }
}





Pokemon.all = []


// Pokemon.prototype.render = function() {
//   return `<p>${this.name}</p>`
// }
