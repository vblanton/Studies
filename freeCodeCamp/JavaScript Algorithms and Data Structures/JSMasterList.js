// variables
// data types: undefined, null, boolean, string, symbol, bigint, number, and object.
let variable // create an ES6+ variable that is mutable
const variable // create an ES6+ variable that is immutable

// Operators
! // NOT operater, converts a value to boolean and then return false it is true and true if is false.
!! // Double NOT operator, converts a value to boolean and return true if it is true and false if it is false.
= // assignment operator
== // Equal to, will do type conversion: converts types of vars
=== // Strict equality, no type conversion
!== // not equal to
!=== // strict not equal
&& // and
|| // or
% // gives remainder of division for instance to check if even or odd.
** // exponentiation operator
(true && expression) // evaluates to expression
(false && expression) // evaluates to false or 0

// Escape character "\" allows for next character to not be interpreted
\'	// single quote
\"	// double quote
\\	// backslash
\n	// newline
\r	// carriage return
\t	// tab
\b	// word boundary
\f	// form feed


// loops (and if statements)
for (let x = 0; x <= something; x++) {}
for (let obj in objArray) {} // a "for in" loop to iterate over objects in an array
for (let key in obj) {} // iterate over keys in an object
for (let value of obj) {} // iterates over values in an object
for (let item in arr) {} // a for in loop over an array (order may not be preserved, try arr.forEach()) or for objects, iterates over keys
break; // ends the loop
continue; // skips to next iteration of the loop

while (i <= 10) {i++;} // while loop

do {ourArray.push(i); i++;} // do while loop
while (i < 5);

switch (aLetter) { // switch statment using a testing variable
  case "a":  // possible equality test of the variable
    console.log("A");
    break; // stop executing statements
  case "b":  // possible test of a value
    console.log("B");
    break;
  case "v":
  case "g":
    console.log("V or G");
    break;
  default: // in case no cases match, like else statement
    console.log("Something Else");
}
switch (true) {} // trick to just run a switch without input variable (possibly bad practice)

// if/else statments
if, else if, else // stacking if/else statements
a ? b : d // if/else on one line using conditional operator or ternary operator. condition ? code to run if true : code to run if else

return (a === b) ? "a and b are equal" // using multiple else if else
  : (a > b) ? "a is greater"
  : "b is greater";

function sum(arr, n) { // recursion with base case at top
    if (n <=0 ) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  }

// Arrays
let arr = ['one', 2, 'three', true, false, undefined, null];  // array
... // spread operator/syntax. for copying everything in an array
let arr = [...otherArray, 'optional addition']; // copy array, but only one dimensional arrays
let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander']; // splice in another array

arr.unshift() // add to beginning
arr.shift() // remove from beginning
arr.push() // add to end
arr.pop() // remove from end and optionally add it to a new var
arr.splice(startIndex, amountToDelete, whatToAdd) // remove or add any consecutive items from within the array, can take 3 variables, modifies original array
arr.slice(indexToStart, indexToStopNotIncluding) // copy a section of a arr to another arr
arr.indexOf('thing') // returns the first index in which an element appears in the array. will return -1 if not in the array
arr.every() // method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
arr.forEach() // executes a provided function once for each array element.
arr.filter() // call a function returning true or false on every item in an array and assign it to a new array
arr.map() // do something to each element in the array and output a new array
arr.reduce() // call a function that calculates something off each element in an array and output a single answer (number, etc)
arr.trim() // remove whitespaces in array
arr.split() // seperate string into an array of strings
arr.split(" ") // seperate by spaces
arr.join() // return an array joined into a string
arr.some() // check if at least one element in the array passes the provided function and returns a boolean
[arr1].concat([arr2]) // add an array to another arry
Array.prototype.sort() // modifies the original array, and by default will order the items alphanumerically. returns -1, 0, or 1 through callback function to sort before, keep untouched, or after current item.

Array.isArray(obj) // check if "obj" is an array boolean

// Strings
// note: you can read, but not write to a string using bracket notation introduced as of ES2015
let str = ""; // define a string
str.length // calculate length of a string variable
str[x] // get letter at position x starting from 0
str[str.length - 1] // get last letter
str.substring(start, end) // start reading from start position, end position beginning from 0
.repeat() // repeat a string method
.toUpperCase() // conver something to uppercase (return true if already uppercase)
.toLowerCase() // convert something to lowercase
.concat() // add a string to another string
str.charCodeAt(x) // get unicode code of a character
str.search(regexp) // returns index of the match and accepts or converts to a regexp

// Objects
const object = {
  key: 'String Value',
  key: true
};

object.key; // add a key
object.key = value; // add a key and a value
object[key]; // use bracket notation for variables or string matches
object.nestedObj.anotherNestedObj = 10; // add or access a nested object:
delete object.key // remove a key
obj.hasOwnProperty(value) // check if obj has a property, returns true or false
value in obj // check if obj has a property
this. // reference the object itself within the object
.forEach // loop throuhg all keys in an object
.append(value) // add a value to a property? (stackoverflow)

// ES6 Class (template for creating objects)
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
// or an unnamed class
let Rectangle = class { // you can also optionally name it something here (class BigRectangle)
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name); // output: "Rectangle"

class ChildClass extends ParentClass { /* … */ } // extends creates a class that is a child of another class

super() // used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor.

// Set
// Array or Object with only unique values
new Set()

// Map
// remember order of objects added to it
new Map()

// Promise
const myPromise = new Promise((resolve, reject) => {
  if(condition here) { resolve("Promise was fulfilled");}
  else { reject("Promise was rejected"); }
});
myPromise.then(result => { }); // Handle a Fulfilled Promise with then, which executes after resolve (fulfilled). placed below the resolve function
myPromise.catch(error => { }); // Handle a rejected promise with catch, which executes after rejection, placed below rejection function

// Math and Numbers

Math.max() // returns the highest number. expects comma seperated values, but not an array
Math.min() // returns smallest number in comma seperated input
Math.random() // function to return a random fraction between 0 and 1, but not including 1.
Math.round() // returns number rounded to the nearest integer
Math.ceil() // round up to the rearest whole number
Math.floor() // round down to nearest whole number
Math.sqrt() // square root a number
Math.cbrt() // returns cube root of a number
Math.pow(base, exponent) // value of a number to the power of another number
Math.log() // returns natural log (base e) of a number
Math.exp() // returns e (2.718281828459045) raised to the power of a number
Math.PI // represents pi 3.141592653589793
Math.E // represents e 2.718281828459045

parseInt() // convert string into int
parseInt(string, radix) // use radix to convert based on base number (2 for binary)
parseFloat() // convert string into floating number, removing trailing zeros

Number.isInteger()
Number.isFinite()
Number.isNaN()
Number.isSafeInteger()
Number("123"); // 123
Number(""); // 0
Number(null) // 0
Number("0o11"); // 9 (hex)

.toFixed(4) // fix to 4 decimal places

// Functions
function functionName(param1, param2) {} // this is how to make a function
function(); // this is how to call your function
return var // returns the end result of the function and ends it

// Built in Functions

Boolean() // checks if value is falsy or truthy, returns TRUE or FALSE
.length // counting up from 1
console.log() // output something to the console
console.warning() // output a warning to the console
.toLocaleTimeString() // method returns a string with a language-sensitive representation of the time portion of the date.
new Date() // the Date object contains a Number that represents milliseconds since 1 January 1970 UTC. (There is a new Date/Time API being worked on by TC39)
setInterval(func/code, delay, arg0-optional, arg1-optional) // (delay in milliseconds, max 32-bit integer of 2147483647 ms). args are passed to func. repeatedly calls a function or executes a code snippet, with a fixed time delay between each call. returns a unique interval ID, to use with clearInterval() to remove it later
setTimeout() // uses same pool of IDs as setInterval. Choose one or the other for code clarity
clearInterval()
clearTimeout()
bind() // causes a function to have the local scope of another function, or in other words, a specific "this" keyword
eval() // unsafe if allowing user input. evaluates a formula to a number, or string to number
Function() // use in place of eval() for safer conversion of string to number
  function parse(str) {
    return Function(`'use strict'; return (${str})`)()
  };



// Regex
/the/ // search for a string
| // or
/i // ignore case
/g // global, or, search or extract a match more than once
. // wildcard, match any letter before/after the position of the dot/period
{} // quantity specifier {3,} three or more, {2,5} two to five times or {6} only six.
() // check for mixed groupings of characters like: /P(engu|umpk)in/g
[] // character sets, match any characters within the brackets
[-] // match characters. letters of the alphabet: [a-e] or numbers [0-9]
[^] // negated characters (don't match). [^a-e]. characters like: ., !, [, @, / and white space are matched
+ // match one or more repeating character (in a row) /a+/ matches a, and/or aa, or aaa, or aaaa.
* // match zero or more characters. like /go*/ and get back "g" if the string is get. or null if the string it let.
? // lazy matching, match smallest region that matches (regex is by by default greedy, matching largest match)
^ // match for characters only at the beginning of a string
$ // search for a pattern from the end of a string, place at end of search pattern
$# // also used to match a capture group in .replace function
\w // match the alphabet [A-Za-z0-9_]
\W // opposite of alphanumeric [^A-Za-z0-9_]
\d // digits [0-9]
\D // non digits [^0-9]
\s // match whitespace, tab, new line, carriage return, form feed.
\S // non whitespace
? // optional element (preceding) like catching american or british english spellings
(?=...) // positive look ahead. replace ... with what you want to lookahead
(?<=...) // positive look behind
(?!=...) // negative look ahead
(?!<=...) // negative look behind
(\w+) \1 \1 // capture groups, automatically turns a search term in paranthesis to a variable counted up from 1 from the left. in this case, match any word repeated 3 times

myRegex.test(myString); // returns true or false
myString.match(myRegex); // returns the match
myString.replace(myRegex, "replacement text") // search and replace. does accept a variable

// HTML

<button onclick="activateLasers()"> Activate Lasers </button> // call a JS function in an event

<form onsubmit="console.log('You clicked submit.'); return false"> // return false prevents the default behaviour from executing
  <button type="submit">Submit</button>
</form>

event.preventDefault() // how to prevent default event usage in javascipt
EventTarget.addEventListener() // watch an event for changes replacing onXYZ

document.getElementById('idname') // get the element by ID in the DOM
getElementsByTagName("a") // get all elements by a tag in the DOM (usually called within a container)
input.value // value of an input field
.innerText
.textContent
.style.display = "none" // modify a style directly, in this case, display

// variable naming conventions or requirements

kebab-case // CSS style classes
snake_case // C, C++, Java, Python, Rust, and others but not so much javascript for variables, subroutines, filenames
camelCase // javascript functions, variables
CapitalizedCamelCase // React components
