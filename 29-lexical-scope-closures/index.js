/****************** Lexical Scoping **************************/
// where are our variables physically declared in our program
/*******************************************************/

/*******************JS Scopes***************************/
/*******************Global***************************/

const mikey = 'batman' //available everywhere in our application


/*******************Function***************************/

function jimmy() {
  const foodComa = '2 much pie 2 handle'
  console.log(foodComa)
}

jimmy()


function funCeption() {
  const timmy = 'later'
  console.log(timmy) //'later'
  return function nestedFn() {
    const timmy = 'tim but fun'
    const superDuperLocalVar = 'can u see me lol?'
    console.log(timmy, superDuperLocalVar) // 'tim but fun can u see me lol?'
  }
}
// funCeption RETURNS another fn, nestedFn
// in order to run nested fn, i need to run funCeption then invoke its return value
funCeption() // -> a reference to nestedFn
funCeption()()

/*******************Block***************************/

// object literal -> { name: 'jimmy' }
if (true) {
  // curlies here are a block, as opposed to an object literal
  // the lexical scope of iceCream is the block { }
  let iceCream = 'yimmy'
}

{ //free-floating block
  let blockVar = 'BLOCK'
}

{ // object literal
  pizza: 'hut'
}

// both of these logs will throw an error: iceCream and blockVar are not defined (not declared)
// console.log(iceCream)
// console.log(blockVar)

/*******************************************************/

/************** Var Let Const *********************/
// variables declared with the VAR keyword can be REDECLARED and REASSIGNED an UNLIMITED NUMBER OF TIMES!!!!!

function noVar() {
  // variables declared WITHOUT var/let/const WILL DEFAULT TO BECOMING GLOBAL
  forgotKeyword = 'what is the scope of this?'
}

noVar()

var freeBird = 'i am freeeeeeeee'

console.log(`%c freeBird is ${freeBird}`, 'color: red')

freeBird = function() {
  return 'something super unexpected'
}

console.log(`%c freeBird is ${freeBird}`, 'color: goldenrod')

var freeBird = Number.MAX_SAFE_INTEGER

console.log(`%c freeBird is ${freeBird}`, 'color: cyan')
//////////////////////////////////////////////////////////////////////

// variables declared with `let` can be REASSIGNED any number of times but can only be declared once (per scope)

// delcaration and assignment:
let semiFreeBird = 'sometimes free, not always'

// reassigning semiFreeBird
semiFreeBird = 'free 50% of the time'

console.log(semiFreeBird)

//let semiFreeBird = 'always free' // Uncaught SyntaxError: Identifier 'semiFreeBird' has already been declared

if (true) {
  let semiFreeBird = 'free all the time'
}

if (true) {
  // js will look for an already declared variable, semiFreeBird in the CURRENT LEXICAL SCOPE
  // if that variable is not found, js will check the most immediate outer scope (in this case, the global scope)
  // because semiFreeBird has already been declared in the global scope, that global variable will be reassigned on the line below
  semiFreeBird = 'REASSIGNED IN AN IF BLOCK'
}

if (true) {
  let semiFreeBird = 'not free at all'
  semiFreeBird = 'free 0% of the time'
  console.log(`%c ${semiFreeBird}`, 'color: pink')
}

console.log(`%c ${semiFreeBird}`, 'color: purple')
/*******************************************************/

// variables declared with the `const` keyword cannot be REASSIGNED nor REDECLARED
// school can only be declared and assigned ONCE (per scope/lexical environment)
const school = 'flatiron'

//school = 'when i say flat u say ironschool' //Uncaught TypeError: Assignment to constant variable.

// const school = 'flatIRONSchool' //Uncaught SyntaxError: Identifier 'school' has already been declared

// functions declared with the `function` keyword can be REASSIGNED and REDECLARED; they behave like variables declared with the `var` keyword

function sayHi() {
  console.log('hi lol')
}

sayHi = 'NOT A FUNCTION lol'

// const sayHi = 'hi' //Uncaught SyntaxError: Identifier 'sayHi' has already been declared

const myFunction = function() {
  console.log('my super fun function')
}

// myFunction = 'not a function' //Uncaught TypeError: Assignment to constant variable.

/*******************************************************/

/************** Hoisting *********************/
willIBHoisted()

function willIBHoisted() {
  console.log('🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔')
}

console.log(`%c Before dog: ${dog}`, 'color: green')

var dog = 'winfield'

console.log(`%c After dog: ${dog}`, 'color: firebrick')
/*******************************************************/

/****** First Class Functions ******************/

const eatSnack = function(snack) {
  console.log(`I am eating ${snack}`)
}


eatSnack('block of cheese w/ hotsauce')


const snacks = ['peanut butter', 'ice cream', 'dark chocolate']

snacks.forEach(eatSnack)

function myForEach(arr, callbackFn) {
  // for (let i = 0; i < arr.length; i++) {
  //   const currentElement = arr[i]
  //   callbackFn(currentElement, i, arr)
  // }
  for (const idx in arr) {
    const currentElement = arr[idx]
    callbackFn(currentElement, idx, arr)
  }
}

myForEach(snacks, eatSnack)

function higherOrderFn() {
  const spiderman = 'jimmy parker'
  return function() {
    console.log(spiderman)
  }
}

const innerSpideyFn = higherOrderFn()

innerSpideyFn() // 'jimmy parker'

function closure() {
  const snack = 'popcorn'
  return function innerPopCorn() {
    console.log(snack)
  }
}

const innerSnack = closure()

innerSnack()

function numClosure(num) {
  return function innerNum() {
    console.log(num)
  }
}

const thousandInnerNum = numClosure(1000)
thousandInnerNum()

function createMultiplier(multiplier) {
  return function multiply(num) {
    return num * multiplier
  }
}

const double = createMultiplier(2)
double(50) //100
const tripler = createMultiplier(3)
tripler(50) // 150
createMultiplier(5)(5)


/*******************************************************/


// if (true){
//   var name = 'NOT THE WINDOW'
// }
//
// for (var i = 0; i < 5; i++) {}
//
// console.log(i)
