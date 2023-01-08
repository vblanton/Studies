//ES6

// two additional types of objects from ES6 (in coding interview prep section)
new Map() // map object remembers the additional insertion order of keys
new Set() // set object only allows unique values (only one of each)

// Javascript promise
// promise to do something, asychronously, and either succeed or fail.
// it is a constructor function, needs to be initiated with "new"
// and has two parameters: resolve, reject.
const myPromise = new Promise((resolve, reject) => {

});
// a promise has 3 states: pending, fulfilled, rejected
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
// Handle a Fulfilled Promise with then, which executes after resolve (fulfilled). placed below the resolve function
myPromise.then(result => {

});
// Handle a rejected promise with catch, which executes after rejection, placed below rejection function
myPromise.catch(error => {

});

// module script for importing / exporting files
<script type="module" src="filename.js"></script>
// include type="module" to enable importing and exporting
// exporting:
export const add = (x, y) => {
  return x + y;
}
// or
const add = (x, y) => {
  return x + y;
}

export { add };
// or
export { add, subtract };
// importing:
import { add, subtract } from './math_functions.js';
// import everything:
import * as myMathModule from "./math_functions.js";
// use a function in myMathModule
myMathModule.add(2,3);
myMathModule.subtract(5,3);
// set a default function to export (can be anonymous function too)
export default function add(x, y) {
  return x + y;
}
// import a default. note that add is not in curly braces. it is whatever we want to name it
import add from "./math_functions.js";

// Use getters and setters to Control Access to an Object
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);

// class syntax to define a constructor
// classes genearlly use UpperCamelCase
// A constructor is a special function that creates and initializes an object instance of a class.
// the class keyword declares a new function, to which a constructor is added.
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');

// old
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');



// Define function in object without function keyword:
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
//old way:
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};


// object literal declarations using object properties shorthand.
// removes need to redeclare a variable inside a function, it automatically creates a variable with that name or something similar(?)
const getMousePosition = (x, y) => ({ x, y });
// old way:
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});



// template literal, uses back ticks (below tilde)
// multi-line strings. no need for /n, a variable inserter (no need for + anymore)
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

// Destructuring assignment, neatly assign values from an object
const { name, age } = user; // assigns the name and age of object user to those variables
// or rename the variables too
const { name: userName, age: userAge } = user;
// or grab it from a nested object
const { johnDoe: { age, email }} = user; // you can rename these variables if you want
// destructure an array:
const [a, b,,, c] = [1, 2, 3, 4, 5, 6]; // will assign a, b and c to 1, 2, and 5
//
[a, b] = [b, a]; // swap values in a and b using array destructuring
// using the rest element. only works as last element in a list
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7]; // assign 1, 2 to a, b and the rest to arr.
// example of using a function to remove first to elements via rest:
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [,, ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
// pass an object as a function's parameters to destructure it automatically
// when you call profileUpate(objName) you'll get variables name, age, nationality... for each obj.
const profileUpdate = ({ name, age, nationality, location }) => {
}


// spreading an array
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
// However, the spread operator only works in-place, like in an argument to a function or in an array literal.
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];  // Change this line
// rest functions, store an arbitrary number of commands in a string in a function
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
// or
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}

// default parameters for functions will add a value to a parameter if not specified otherwise
const greeting = (name = "Anonymous") => "Hello " + name;
const math = (num, subtract = 1) => num - subtract;

//Anonymous Functions:
const myFunc = () => { // you can pass function parameters to the new function inside the paranthesis, and even omit the paranthesis if it has only one paramater
  const myVar = "value";
  return myVar;
}
//ES5 way:
const myFunc = function() {
  const myVar = "value";
  return myVar;
}

Object.freeze(obj) // makes an object immutable

let // var, but can only be declared once for safety (ES6), and is local to a function, loop, statement or whatever. where you declare it matters. while var is always global unless inside a function i think.
const  // a variable whose name cannot be reassigned, but values can be. values are mutable, but not able to be assigned new values erasing the old ouright(?)
// some devs use const unless you know you need it to be mutable
