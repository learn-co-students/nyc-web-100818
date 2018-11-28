// object literals
const walle = { name: 'wall-e', ability: 'garbage collection, love' }
const r2d2 = { name: 'r2d2', ability: 'plot armor' }

// factory function

function robotFactory(name, ability) {
  // const newRobo = { name: name, ability: ability }
  const newRobo = {
    name,
    ability,
    importFiles: function(fileName) {
      console.log(`${this.name} is currently downloading ${fileName}`)
    }
  } //shorthand for the above syntax if key/vals match
  return newRobo
}

const voltron = robotFactory('voltron', 'combining from other robots')
const terminator = robotFactory('T2000', 'way 2 buff, time travel, coming back')


// Object.create

const robotTemplate = {
  name: null,
  ability: null,
  weight: 99999,
  importFiles: function(fileName) {
    console.log(`${this.name} is currently downloading ${fileName}`)
  }
}

function betterRobotFactory(name, ability) {
  const newRobot = Object.create(robotTemplate)
  newRobot.name = name
  newRobot.ability = ability
  return newRobot
}

const roomba = betterRobotFactory('roomba', 'cleaning')
const c3po = betterRobotFactory('c3po', 'worrying')

// constructor function MUST BE CALLED WITH NEW KEYWORD

function Robot(name, ability) {
  // in a constructor fn this will be a newly created object {}
  // the constructor will assign a special prototype to the new object
  // { constructor: Robot }
  this.name = name
  this.ability = ability
}

Robot.prototype.nice = true
Robot.prototype.eatMetal = function() {
  console.log(`${this.name} is eating METAL`)
}

const megazord = new Robot('megazord', 'fighting giant monsters')
const hal9000 = new Robot('hal9000', 'pls do not kill me, DAVE')

// class syntax


class RobotClass {
  /*function*/constructor(name, ability) {
  // `this` in a constructor fn will be the newly created robot object or 'instance'
    this.name = name
    this.ability = ability
    this.chargeBatteries()
  }
// instead of writing RobotClass.prototype.chargeBatteries = function
  chargeBatteries() {
    console.log(`${this.name} is charging its batteries`)
  }

  callBackBatteries() {
    this.chargeBatteries()
  }
}

const roboCop = new RobotClass('robocop', 'tragically fighting crime')
const ultron = new RobotClass('ultron', 'trying 2 kill the avengers')
