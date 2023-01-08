// a class holds multiple objects, methods, a constructor, allows manipulation of them

this. // references the object. The this keyword refers to different objects depending on how it is used: In an object method, this refers to the object.

Math.max // method returns the number with the highest value. expects comma seperated values, but not an array
Math.random() // function to return a random fraction between 0 and 1, but not including 1.
Math.floor() // round down to nearest whole number

map() // create a new array from an old array (a copy) and also do to each element in the array whatever is in the paranthesis, like a math thing
filter() // return an array with all values from target array that match the filter (like a number, or over a number)
reduce() // a reducer function on each element of an array. essentially, call a function that does something to every element in an array and output a single answer (number, etc)

.trim() // remove whitespac
.split() // seperate string into an array of Strings
.join () // turn array into a string

let // ES6 var, but can only be declared once for safety (ES6), and is local to a function, loop, statement or whatever. where you declare it matters. while var is always global unless inside a function i think.
const  // ES6 a variable whose name cannot be reassigned, but values can be. values are mutable, but not able to be assigned new values erasing the old ouright(?)
// some devs use const unless you know you need it to be mutable

// data types: undefined, null, boolean, string, symbol, bigint, number, and object.

% // gives remainder of division for instance to check if even or odd.
! // NOT operater, converts a value to boolean and then return false it is true and true if is false.
!! // Double NOT operator, converts a value to boolean and return true if it is true and false if it is false.
Boolean(10 > 9) // returns TRUE or FALSE, built in

\ // escape character for a string to interpret the next character correctly
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed

//string
var.length // calculate length of a string variable
[var.length - 1] // get last letter
str.substring(start, end) // start reading from start position, end position beginning from 0
.repeat() // repeat a string method
.toUpperCase() // conver something to uppercase (I think also return true if already lowercase, false otherwise, or something)
.toLowerCase() // convert something to lowercase
// note you can read, but not write to a string using bracket notation introduced as of ES2015

//array
array.push() // add something to the end of an array
let var = array.pop() // take out the last element of an array and assign it to a var
array.shift() // removes first element of an array
array.unshift() // add elements to the beginning of an array
array.slice() // return selected items from an array as a new array. from a given start, up to a (not inclusive) given end.
array.splice(start, amount, optionalToAdd) // add or remove elements within an array, modifies the array

// loops
break; // ends the loop
continue; // skips to next iteration of the loop

// individual character in a string are immutable, but the string can be replaced.

Array // organize multiple pieces of information together
Multi Dimensional Array // a matrix of arrays linked together, an array of arrays
// arrays are mutable, even if decalred with "const"

function(); // this is how to call your function
function functionName() {} // this is how to make a function

function functionName(param1, param2) {} // function will include paramaters or variables given when called
functionName(1, 2);
return var // returns a variable after the function completes
// a local variable with the same name will take precedence over a global variable
== // Equal to, will do type conversion: converts types of vars
=== // Strict equality, no type conversion
!=
!== // similar
|| // or
if, else if, else // stacking else statements
if, if, if // stacking if statements, or just use &&, || operators.

switch (lowercaseLetter) { // testing possible values
  case "a":  // possible test of a value
    console.log("A");
    break; // stop executing statements
  case "b":  // possible test of a value
    console.log("B");
    break;
  case "v":
  case "g":
    console.log("V or G");
    break;
  default: // in case no cases match (like else)
    defaultStatement;
    break;
}

switch (true) {} // run a switch and use any available variables (stackoverflow). useful if you want to test for multiple variables, but typescript doesn't accept this method and some say it's not best practice because it can have unintended results
// returning a boolean answer through a function succinctly:
function isLess(a, b) {
  return a < b;
}
// making an object (or object literal)
const myDog = { // a const is a variable whose name can't be reassigned, but values can (ES6)
name: "Puppy",
legs: 4, // i think this 4 will be a string
tails: 2,
friends: ["Tony", "Terrible"] // an array
};
// use . or [] to access properties or value of a property of an object or to add a new property and value pair
myObj["Space Name"]; // necessary for properties with spaces, or can be used to reference a variable as the reference input
myObj.spacename;
delete myObj.name // delete property and value "name" associated with const
.hasOwnProperty(propname) // test if an object has a property
.append(value) // add a value to a property? (stackoverflow)

// while loop to add items to an array
const myArray = [];
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}
// for loop
const myArray = [];
for (let i = 1; i < 6; i++) {
  myArray.push(i);
}
// for loop through array of arrays or multi-dimensional array
const arr = [
  [1, 2], [3, 4], [5, 6]
];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
//do while loop, which ensures the code inside the loop will run at least once as opposed to a while loop without the do
const ourArray = [];
let i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);

parseInt() // convert a string that is a number into a int. if the first character can't be converted it return NaN (Not a Number)
parseInt(string, radix) // include radix to state the base number of the integer (2 through 36)
a ? b : c // conditional operator or ternary operator. if/else on one line. condition ? code to run if true : code to run if defaultStatement
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}
// using multiple conditional operators
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal"
    : (a > b) ? "a is greater"
    : "b is greater";
}
// Recursion - in this case it adds up a string up to position "n". calling a function within itself. Needs a base case to end the recursion on the bottom of the loop
function sum(arr, n) {
  if (n <=0 ) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}
