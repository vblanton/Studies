// the "arity" of a function is the number of arguments it requires
// to "curry" a function is to convert a function of n arity to n functions of arity 1

// stack functions using shorthand:
// here input x, then a return with a function with input y, then the final return of that function within the function
const curried = x => y => x + y
curried(1)(2) // and that is how you send a value into two functions with stacked returns

// this is useful if you want to run a function but don't have all the data yet. you can assign it to a variable and then send it into another function later
const funcForY = curried(1);
console.log(funcForY(2)); // 3
// another example of a partial function:
function impartial(x, y, z) {
  return x + y + z;
}
const partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13



//some() is like every(), but it checks that ANY element matches
// check is some are positive:
function checkPositive(arr) {
return arr.some(number => Math.sign(number) == 1);
}
checkPositive([1, 2, 3, -4, 5]);

// every() .. returns true if all values in the array match (the input function)
// use every to check if every number is positive
function checkPositive(arr) {
return arr.every(number => Math.sign(number) == 1);
}

checkPositive([1, 2, 3, -4, 5]);

// Apply Functional Programming to Convert Strings to URL Slugs
function urlSlug(title) {
const urlTitle = title
  .toLowerCase()
  .split(" ")
  .filter(a => (/\w/.test(a)))
  .join("-");
console.log(urlTitle);
return urlTitle;
}
urlSlug("Winter Is Coming");

// .join() method combines array into a string with the spacer between array elements being what you define.
const arr = ["Hello", "World"];
const str = arr.join(" ");


//.split() method will split a string at whatever type of place you define and return it to a new string
const str = "Hello World";
const bySpace = str.split(" ");

// split at each digit
const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/);

// split out each word no matter what divides them:
function splitify(str) {
  const splitString = str.split(/[^a-zA-Z]/);
  console.log(splitString);
  return splitString;
}
splitify("Hello World,I-am code");


// .sort() method according to callback function
// sorts via instertion sort. not good for large amounts of data
// If compareFunction(a,b) returns a value less than 0 for two elements a and b, then a will come before b. If compareFunction(a,b) returns a value greater than 0 for two elements a and b, then b will come before a. If compareFunction(a,b) returns a value equal to 0 for two elements a and b, then a and b will remain unchanged.
// returns [1, 2, 3, 4, 5] :
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
ascendingOrder([1, 5, 2, 3, 4]);

//or (wtf?)

function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

reverseAlpha(['l', 'h', 'z', 'b', 's']);


// more map and filter to check that numbers are integers and positive, and then square them:
const squareList = arr => {
  arr = arr.filter(number => (Number.isInteger(number) && Math.sign(number) == 1));
  arr = arr.map(number => Math.pow(number, 2));
  return arr;
};
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

// Use the reduce Method to Analyze Data
//  The callback function accepts four arguments.
// The first argument is known as the accumulator, which gets assigned the return value of the callback function from the previous iteration,
// the second is the current element being processed,
// the third is the index of that element and
// the fourth is the array upon which reduce is called.

mappedList = [ 8.8, 8.6, 9, 8.3 ];
// add up ratings in mappedList:
let addedRatings = mappedList.reduce((previousValue, currentValue) => previousValue + currentValue);

// Combine Two strings or Arrays Using the concat Method
// It returns a new array and does not mutate either of the original arrays.
// or think of it like non mutating push,
// Add Elements to the End of an Array Using concat Instead of push

return [arr1].concat([arr2]);

// Remove Elements from an Array Using slice Instead of splice
// Return Part of an Array Using the slice Method
// slice return a new array
const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const newArray = arr.slice(1, 3);
// newArray would have the value ["Dog", "Tiger"].

// Implement the filter Method on a Prototype
// implement your own version of filter()
Array.prototype.myFilter = function(callback) {
  const newArray = [];
  this.forEach(a =>
    {if (callback(a) == true)
      {newArray.push(a)}
    }
    );
  return newArray;
};
// Use the filter Method to Extract Data from an Array
// narrow down my list of movies to just title and rating, then by rating >= 8.0, converting the rating to a number from string
const filteredList = watchList
  .map(x => ({title: x["Title"], rating: x["imdbRating"]}))
  .filter(item => (Number(item["rating"]) >= 8.0));
// or
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];
const usersUnder30 = users.filter(user => user.age < 30);

// create your own map() function from scratch
// uses forEach to iterate over elements, forEach requires a variable for each element in the array it iterates over
// a for loop is also possible instead of forEach.
// uses "this" to access the array
// uses a callback function, which is to say a function that is sent into the function.

Array.prototype.myMap = function(callback) {
  const newArray = [];
  this.forEach(a => newArray.push(callback(a)));
  return newArray;
};


// use map instead of a for loop to return a new array
//map:
const ratings = watchList.map(x => ({title: x["Title"], rating: x["imdbRating"]}));
//for loop:
const ratings = [];
for (let i = 0; i < watchList.length; i++) {
  ratings.push({title: watchList[i]["Title"], rating: watchList[i]["imdbRating"]});
} */

// clone an array old way:
const newList = bookList.slice();
//ES6 way:
const newList = [...bookList];

// always pass any dependencies into the function directly instead of quietly using them

// mutation: changing or altering things
// side effect:  outcome of changing or altering things

// a basic idea of functional programming is to not change any outside or global variables, always output new variables from old ones in a functionName
// this allows you to get less bugs and locate where things are going wrong easier.

// map() iterate over an array and do something to it. can stack functions into it like
const newArr = numbers.map(Math.sqrt)

// lambda:
// a function that is passed in to or returned from another function

// higher order functions:
// can take functions as an argument, or return a function as a return value

// First Class Functions:
// Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value
// all functions are first class in javascript

// Callbacks:
// Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function

// Functional Programming:
// INPUT --> PROCESS --> OUTPUT
// Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change
// Pure functions - the same input always gives the same output
// Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled
