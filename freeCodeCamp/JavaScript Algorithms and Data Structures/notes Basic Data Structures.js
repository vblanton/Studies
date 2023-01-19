// arrays

let arr = ['one', 2, 'three', true, false, undefined, null];  // array
arr.unshift() // add to beginning
arr.push() // add to end
arr.pop() // remove from end
arr.shift() // remove from beginning
arr.splice(startIndex, amountToDelete, whatToAdd) // remove or add any consecutive items from within the array, can take 3 variables.
arr.slice(indexToStart, indexToStopNotIncluding) // copy a section of a arr to another arr
... // spread operator/syntax. for copying everything in an array
let arr = [...otherArray]; //ex1
let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander']; //ex2
arr.indexOf('thing') // returns the first index in which an element appears in the array. will return -1 if not in the array

// ways to iterate over an array
.every()
.forEach()
.map()
// or a for loop
// or a for.. in loop to iterate over objects in an array
for (let obj in objArray) {
}
// or
for (let user in users) {
  console.log(user); // will output every "user" obj in an array of usernames for instance
}
// or iteratore over keys with Object.keys() method
return Object.keys(obj);

// two additional types of objects from ES6
// map object remembers the additional insertion order of keys
// set object only allows unique values (only one of each)

// nested or multidimensional arrays. can have any amount of nested arrays inside arrays [2][1][3][0][0] would have 5 levels of depth

// objects
// collection of key-value pairs or key-property pairs
// can be nested, and include any data types even other objects inside
// do not maintain order like arrays. position is irrelevant

const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};
// assign a new value called origin:
tekkenCharacter.origin = 'South Korea';
// or use brackets if it is a variable or has a space in it:
tekkenCharacter['hair color'] = 'dyed orange';


object.key; // add a key and optional value
object.key = value;
object.nestedObj.anotherNestedObj = 10; // add or access a nested object:
delete object.key // remove a key
obj.hasOwnProperty(value) // check if obj has a property, returns true or false
value in obj // check if obj has a property
