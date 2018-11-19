console.log('%c HELLO WORLD', 'color: green')

var myName = 'jimmy'

function dogWalker() {
  var dog = 'jimmy'
  debugger
  return dog
}

dogWalker()

debugger

window.alert('HOTDOG')

// literal:
let num = 100
// constructor:
let anotherNum = new Number(100)

// pass by value/ pass by reference
var j = { name: 'jeff' }
var g = j //create another POINTER/REFERENCE to the object above

g.name = 'geoffrey'

g //-> { name: 'geoffrey' }
j //-> { name: 'geoffrey' }

//falsey values in js
if ([]) console.log('HAHAH lol') //'HAHAH lol'
if ('') console.log('HAHAH lol') //undefined
// falsey vals: 0, '', undefined, null, NaN, false
// length is zero, which is falsey; nothing happens
if ([].length) console.log('HAHAH lol')
// length is 1, which is truthy
if ([1].length) console.log('HAHAH lol') //HAHAH lol
!!'' //false
!![] //true

// PLS BURN THIS IN2 UR MEMORY, THX

// fn reference vs invocation

function jimmy() {
  console.log('hi i am jimmy nice 2 meet u 🤠')
}

jimmy // return a REFERENCE to a function
jimmy() //runs/executes/invokes the fn
jimmy = 'nice' //reassigning the variable called jimmy

var willJimmySpeak = function() {
  'hi'
}

const makeTurtlesFly = function () {
  return 'TURTLES ARE FLYING!!!!!'
}


if (true) {
  console.log('hello')
} //the `i` in your `if` statement shold line up with the curly bracket that terminates it
