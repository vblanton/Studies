// NOTES

// transpiler turns new code into older style code for compatibility
// polyfills provide the code for new methods and built in functions for older compatibility
@ts-check // enable typescript like alerts in IDE, add to top of the file

// CALL STACK
// LIFO: Last In, First Out (the last read piece is the first to execute on the stack)
// JavaScript is synchronous, or one threaded read top to bottom.
// to do asynchronous code, like requests, JS uses an event loop

// the event loop (in the browser):
// the web browser, however, can do things concurrenltly, like clicks, a fetch request, or setTimeout()
// and so tasks that take time are placed in a seperate queue called the callback queue or task queue and then are put back on the Call stack when ready

// DATA TYPES

// Number 
// limited in size to 2^53 -1 (or in the negative -2^53 -1)
Infinity
-Infinity
NaN
// BigInt 
const bigInt = 1234567890123456789012345678901234567890n; // append n to the end of an integer to make it a BigInt
// Strings
const string = "hello" // surround by qoutes, single or double
let phrase = `can embed another ${string}`; // note the use of backticks to embed variables or expressions in a string by wrapping in ${}
// Boolean
let foo = true;
// Null
// null is not a null pointer, it's just a reference to nothing, empty, or value unknown, usually assigned by you
let bebop = null;
// Undefined
// meaning: “value is not assigned”, similar to null, but reserved for a defualt initial value
let age; // the value will be undefined
// Object
let man = {
  age: 29;
  height: "6'2\""
}
// for more complex data structures (not primitive, because it can store more than one single thing)
// Symbol / Symbol value
// for unique identifiers given to objects
const sym1 = Symbol();

typeof 0 // returns the type of a variable, number, whatever.
typeof(0) // also valid, it's just regular paranthesis grouping however

// VARIABLES
// naming: letters, digits, $ and _ only, cannot start with a number, camelCase is commonly used, or all uppercase for consts, cast matters 

kebab-case // CSS style classes
camelCase // javascript functions, variables
ALLCAPS // javascript consts 
CapitalizedCamelCase // React components
snake_case // C, C++, Java, Python, Rust, and others but not so much javascript for variables, subroutines, filenames

var variable // pre ES6+ method, ignores block scopes, only function or global scope, tolerates re-declaration, processed at function start, old code may have used IIFE to emulate scope by wrapping a function in paranthesis and immediately calling a variable with an alert or something
let variable // create an ES6+ variable that is mutable, limits to block scope, doesn't tolerate re-declaration
const variable // create an ES6+ variable that is immutable

// a variable inherently returns true or false depending on whether it evaluates to a falsy or truthy value

// MATHS OPERATORS COMPARISONS
// math operators have precedence, with unary + and - having highest, then division and multiplication, addition subtraction, etc, and finally the equals
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

! // NOT operater, converts a value to boolean and then return the opposite value
!! // Double NOT operator, converts a value to boolean, but the opposite, and then the opposite again, hence just turning a value to a boolean
Boolean() // alternative to !!
= // assignment operator
== // Equal to, will do type conversion: converts types of vars, but will not convert some things to numbers
=== // Strict equality, no type conversion
!== // not equal to
!=== // strict not equal
// precedence of && is higher than ||, so imagine && in parenthesis
// dont use && for if. you can, but it isn't recommended. less readable.
&& // and, will evaluate left to right and return the first falsy value or if all are truthy returns the last operand. 
|| // or, will evaluate left to right until a truthy value is found and then return the first truthy value
?? // nullish coalescing, returns the first defined value "a ?? b" (if not null or undefined, return what is on the left, otherwise the right). can be stacked (a || b || c || "Nope!")
// equality checks will convert strings to numbers, and null/undefined to 0. for strings, it is the first letter, than the second, etc following unicode numbers for the letter
> // greater than. 
< // lesser
>= // greater than or equal
<= 
(true && expression) // evaluates to expression
(false && expression) // evaluates to false or 0
0 == false / falsy
1 == true / truthy

+ // addition, concatanation of string, as a "unary" to convert a string to a number, or to increment by 1 
-
*
/
% // gives remainder of division for instance to check if even or odd.
** // exponentiation operator

++ // increment by one (only for variables)
--
++variable // prefix form, immediately adds 1 to variable
variable++ // postfix form, returns original variable, then adds 1 to it for later use

+= // add to self
-/
*=
/=

// bitwise operators, operating on binary representation of operators. not used much for web development. used in cryptography
& // and
| // or
^ // xor
~ // not
<< // left shift
>> // right shift
>>> // zero fill right shift

, // used to evaluate and throw our everything but last expression. very low priority, needs paranthesis. example:
for (a = 1, b = 3, c = a * b; a < 10; a++) {}

// type conversion examples
"" + 1 + 0 = "10"
"" - 1 + 0 = -1
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5"
"  -9  " - 5 = -14
null + 1 = 1
undefined + 1 = NaN
" \t \n" - 2 = -2

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
Number("123"); // convert string to number, 123
Number(""); // 0
Number(null) // 0
Number("0o11"); // 9 (hex)

.toFixed(4) // fix to 4 decimal places
.toString() // convert number to string

// STRINGS
// note: you can read, but not write to a string using bracket notation introduced as of ES2015

let str = "hello" + var // use a + to concatanate strings
let str = ""; // define a string, also you can use single quotes ''
let phrase = `can embed another ${str}`; // notice the use of backticks in this case, this is called using template literals and it is considered more readable
let phrase = `or an expression ${1 + 2}`; // or embed an expression
let str = 'I\'m happy!'; // backslash escape character

// Escape characters "\" allows for next character to not be interpreted
"\'"	// single quote
"\""	// double quote
"\\"	// backslash
"\n"	// newline
"\r"	// carriage return
"\t"	// tab
"\b"	// word boundary
"\f"	// form feed

// all string methods return a new value, they do not modify the original string
str.length // calculate length of a string variable
str[str.length - 1] // get last letter
str.slice(start, end) // takes out a portion of a string from position start (0) to end (1) and returns the new value, end not necessary if using all of the rest. if parameter is negative, it is counted from the end, but then left to right
str.substring(start, end) // start reading from start position, end position beginning from 0, but values less than zero are treated as zero
str.substr() // deprecated
str.replace("name", "vlad") // replace specified value in a string with another. returns a new string, only first match,
str.repalce(/name/ig, "vlad") //  regex accepted and written without quotes
str.replaceAll() // all matches, ES2021 feature
str.trim() // remove whitespaces before and after
str.trimStart()
str.trimEnd()
str.padStart() // as of ES2017, pads a string with another string: let padded = text.padStart(4,"x"); convert numbers to strings with quotes to pad numbers into a string
str.padEnd()
str.split(", ") // convert a string into an array, with seperation defined. if not seperator defined, will return the whole string
str.repeat() // repeat a string method
str.toUpperCase() // conver something to uppercase (return true if already uppercase)
str.toLowerCase() // convert something to lowercase
str.concat() // add a string to another string, or just use + operator
str[x] // get letter at position x starting from 0, property code access, will return undefined if no string found, read only
str.charAt() // like using [], will return an empty string if no string found
str.charCodeAt(x) // get unicode code of a character
str.search(regexp) // returns index of the match and accepts or converts to a regexp
str.constructor() // returns the string's constructor function
str.endsWith() // returns if string ends with a specified value
str.startsWith()
str.includes() // returns if string incudes a specified value
str.indexOf() // returns first index of match
str.lastIndexOf() // returns index of last match
// more: https://www.w3schools.com/jsref/jsref_obj_string.asp
// even more methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

.toString() // converts number to a string

// ARRAYS

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
arr.reduce() // STUDY call a function that calculates something off each element in an array and output a single answer (number, etc)
arr.trim() // remove whitespaces in array
arr.split() // seperate string into an array of strings
arr.split(" ") // seperate by spaces
arr.join() // return an array joined into a string
arr.some() // check if at least one element in the array passes the provided function and returns a boolean
[arr1].concat([arr2]) // add an array to another arry
Array.prototype.sort() // modifies the original array, and by default will order the items alphanumerically. returns -1, 0, or 1 through callback function to sort before, keep untouched, or after current item.

Array.isArray(obj) // check if "obj" is an array boolean

// CONDITIONALS, LOOPS

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

switch (expression) { // executes expression and test's it according to each case to see if true match
  case x:  // possible equality test of the variable
    console.log("x");
    break; // stop executing statements if case x true
  case y:  // possible test of a value
    console.log("y");
    break;
  default: // in case no cases match, like else statement
    console.log("Something Else");
}
switch (true) {} // trick to just run a switch without input variable (possibly bad practice)

// if/else statments
if, else if, else // stacking if/else statements
a ? b : d // ternary operator. if/else on one line using conditional operator or ternary operator. condition ? code to run if true : code to run if else

return (a === b)  // using multiple else if else
  ? "a and b are equal"
  : (a > b) ? "a is greater"
  : "b is greater";

const greeting = isBirthday
  ? 'Happy birthday Mrs. Smith — we hope you have a great day!'
  : 'Good morning Mrs. Smith.';

function sum(arr, n) { // recursion with base case at top
    if (n <=0 ) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  }


// OBJECTS

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

Symbol() // returns an object's or key's unique symbol identifier, or creating it and then returning it
Symbol.for("key")

// SYMBOLS
// for unique identifiers given to objects
const sym1 = Symbol();
// it is possible to create a specific symbol wrapper object if needed by creating a symbol var and then an Object(symbolVar)
// it is possible to create a symbol that is available across files and even realms (global scopes) in the JavaScript sybmol registry.
Symbol.keyFor(Symbol.for("tokenString")) === "tokenString"; // true

// well-known symbols:
// All static properties of the Symbol constructor are Symbols themselves, whose values are constant across realms. heir purpose is to serve as "protocols" for certain built-in JavaScript operations, allowing users to customize the language's behavior. For example, if a constructor function has a method with Symbol.hasInstance as its name, this method will encode its behavior with the instanceof operator.
Object.getOwnPropertySymbols() // returns an array of symbols on a given object. it is empty by default

// Static Properties

Symbol.asyncIterator // used by "for await... of"
Symbol.hasInstance // used by instanceof
Symbol.isConcatSpreadable // a boolean used by array.prototype.concat()
Symbol.iterator // used by for... of
Symbol.match // using by String.prototype.match()
SymbolmatchAll
Symbol.replace
Symbol.search
Symbol.split
Symbol.species
Symbol.toPrimitive
Symbol.toStringTag

// Static methods

Symbol.for(key) // searches and returns or otherwise creates a new symbol
Symbol.keyFor(sym) // 


// CLASS ES6 (template for creating objects)
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

// SET a keyed collection
// Array or Object with only unique values
new Set()

// MAP 
// a keyed collection, remember order of objects added to it
// Speed: it could be represented internally as a hash table (with O(1) lookup), a search tree (with O(log(N)) lookup), or any other data structure, as long as the complexity is better than O(N).
// Safety: safe to use with user-provided keys and values, unlike objects
// Keys can be any value, including functions, objects, and any primitive
let map1 = new Map()
map1.set(key, value) // add a key and value to a map
map1.get(key) // get a value from a specific key in map
map1.delete(key) // delete a key and value from a map
map1.size // get the size of a map

// STRUCTURED DATA / JSON

ArrayBuffer
SharedArrayBuffer
DataView
Atomics
JSON

// MEMORY MANAGEMENT

WeakRef
FinalizationRegistry

// PROMISE
const myPromise = new Promise((resolve, reject) => {
  if(condition here) { resolve("Promise was fulfilled");}
  else { reject("Promise was rejected"); }
});
myPromise.then(result => { }); // Handle a Fulfilled Promise with then, which executes after resolve (fulfilled). placed below the resolve function
myPromise.catch(error => { }); // Handle a rejected promise with catch, which executes after rejection, placed below rejection function

// GENERATOR, AYNC GENERATOR

// FUNCTIONS
// all functions are scanned for a created before code is run, unless it is a function expression (declared to a variable)
// a function is a value stored in a variable which is the name of the function, and can be copied to a new variable or 
// should be short and do one thing
function functionName(param1, param2) {} // this is how to make a function
function functionName(param1 = 1, param2) {} // setup a default parameter if none is provided
function(); // this is how to call your function
return var // returns the end result of the function and ends it
(function () { alert('hello'); }) // anonymous function
// arrow functions
textBox.addEventListener('keydown', (event) => console.log(`You pressed "${event.key}".`)); // anonymous arrow function
let sum = (a, b) => a + b; // arrow function as function expression
// default values
// you can set a function's parameter's default value to something in case it is not called by simply declaring it with an equals:
function showMessage(from, text = "no text given") { ... }; // a default value is given to "text"
// in old functions JavaScript didn't support defaults values and so programmers but if statements or || statements inside the function to declare defaults
// without a return value a function returns "undefined"
return blah + blah; // always keep returns on one line, otherwise JS will insert a semicolon automatically
// callback
ask("Do you agree?", showOk, showCancel); // callback: passing a function as a variable to another function's parameter

//common function names:

get...
calc...
create...
check...

// BUILT IN FUNCTIONS OR METHODS

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
let a = prompt("First Number?", 1); // prompt user for a number, defaulting to 1?
alert(+a); // show result of prompt and convert a to a number


// INPUT
prompt("text");
let age = parseInt(prompt("Please enter your age"));

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


// INTERNATIONALIZATION

Intl
Intl.DateTimeFormat
Intl.DisplayNames
Intl.ListFormat
Intl.Locale

// ...


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
select.value // value of a var called select
var.innerText
var.textContent
var.style.display = "none" // modify a style directly, in this case, display

const select = document.querySelector('select'); // select a form or item
document.body.style.padding = '10px'; // update CSS
html.style.backgroundColor = black;

// rendering stuff:
canvas // <canvas></canvas> element
ctx

// Errors
// </></>
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors
// ReferenceError: it's about a variable being undefined, unavailable, or unchangeable etc
// SyntaxError: missing parenthesis, semicolon, quote mark for strings, curly brackets, or other type of code for a function
// TypeError: consider the data type you are trying to use a method with, perhaps you mixed them up, or spelled it wrong
//  - type issue, modifying a value that cannot be changed, or using a value in an inappropriate way
// RangeError: a math / type issue