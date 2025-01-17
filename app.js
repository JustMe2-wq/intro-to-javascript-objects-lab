
console.log('hello')

const pokemon = require('./data.js');


const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
}

game.difficulty = 'Med'

game.party.push('Pikachu', 'Bulbasaur', 'Charmander', 'Squirtle')

game.gyms[2].completed = true

game.party[0] = 'Raichu'
game.party[1] = 'Ivysaur'
game.party[2] = 'Charmeleon'
game.party[3] = 'Wartortle'
// I was completely over thinking this one/also don't this was my splice, most likely wrong.
// game.party.splice(0, 4, 'Raichu', 'Ivysaur', 'Charmeleon', 'Wartortle')

game.starter = ['Pikachu', 'Bulbasaur', 'Charmander', 'Squirtle']

game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj)
}

game.items = function(quantity) {
    if (this.catchPokemon) {
      quantity -= 1;
    }
    return quantity;
}

for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 6) {
    game.gyms[i].completed = true;
  }
}
// I don't understand why I i'm getting [Function (anonymous)]
game.gymStatus = function() {
  const status = {
    completed: 0,
    notCompleted: 0
  };

  this.gyms.forEach(function(gym) {
    if (gym.completed) {
      status.completed += 1;
    } else {
      status.notCompleted += 1;
    }
  });

  return status;
}

game.partyCount = function() {
  return this.party.length;
}

game.gyms[7].completed = true


console.log('Pokemon Count:', game.partyCount())
console.log(game.gymStatus())


console.log(game)

// 