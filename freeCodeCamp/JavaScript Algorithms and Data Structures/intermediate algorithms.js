// Map the Debris

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let a;
  for (let x = 0; x < arr.length; x++) {
  a = earthRadius + arr[x].avgAlt;
  delete arr[x].avgAlt;
  arr[x].orbitalPeriod = Math.round((2*Math.PI)*Math.sqrt(Math.pow(a,3)/GM));
  }
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

// Make a Person
// making an object constructor
// i could have made it more succinct by referencing fullName every time and using fullName.split(" ")[0] etc

const Person = function(firstAndLast) {
  let firstName = firstAndLast.split(" ").shift();
  let lastName = firstAndLast.split(" ").pop();
  let fullName = firstName + " " + lastName;
  this.getFullName = function() {
    return fullName;
  };
  this.getFirstName = function() {
    return firstName;
  };
  this.getLastName = function() {
    return lastName;
  };
  this.setFirstName = function(name) {
    firstName = name;
    fullName = firstName + " " + lastName;
  }
  this.setLastName = function(name) {
    lastName = name;
    fullName = firstName + " " + lastName;
  }
  this.setFullName = function(name) {
    fullName = name;
    firstName = name.split(" ").shift();
    lastName = name.split(" ").pop();
  }
};
const bob = new Person('Bob Ross');
bob.getFullName();

// Arguments Optional
// practicing nested arguments with simple addition
function addTogether() {
const a = arguments[0];
const b = arguments[1];
function isNum(x) {return Number.isInteger(x)};
  if (!isNum(a)) {
    return undefined
  }
  // if two arguments:
  if (arguments.length == 2) {
    if (!isNum(b)) {
      return undefined;
    }
  return a + b;
  }
  // if only one argument (and one passed argument)
  if (arguments.length == 1) {
    return function(x) {
      if (!isNum(x)) {
        return undefined;
      }
      return x + a;
    }
  }
}
// another shorter solution:
function addTogether() {
  const [first, second] = arguments;
  if (typeof(first) !== "number")
    return undefined;
  if (arguments.length === 1)
    return (second) => addTogether(first, second);
  if (typeof(second) !== "number")
    return undefined;
  return first + second;
}
// Everything Be True
// check if all objects are truthy using Boolean()
// alternatively i could have used the ".every()" method to run a function on all of them
function truthCheck(collection, pre) {
  for (let x = 0; x < collection.length; x++) {
    if (Boolean(collection[x][pre]) !== true) {
      return false;
    }
  }
  return true;
}
truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}], "number");
// every() alternative:
function truthCheck(collection, pre) {
  return collection.every(obj => obj[pre]);
}

// Binary Agents
// convert sentence string in binary to a sentence in letters
function binaryAgent(str) {
  let strArr = str.split(" ");
  for (let x = 0; x < strArr.length; x++) {
    strArr[x] = String.fromCharCode(parseInt(strArr[x], 2)); // convert binary to integer used by unicode
  }
  strArr = strArr.join("");
  return strArr;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

// Steamroller
// Flatten a nested array with multiple levels of nesting in it.
// using recursion here
function steamrollArray(arr) {
  let dataFromArr = [];
  for (let x = 0; x < arr.length; x++) {
    if (Array.isArray(arr[x])) {
      dataFromArr.push(...steamrollArray(arr[x])); // don't entirely understand the ...
    } else {
      dataFromArr.push(arr[x]);
    }
  }
  return dataFromArr;
}
steamrollArray([1, [2], [3, [[4]]]]);


// Drop it

function dropElements(arr, func) {
  while (!func(arr[0])) { // if false, shift and try again until true
    arr.shift()
  };
  return arr;
}
dropElements([1, 2, 3], function(n) {return n < 3; });

// Smallest Common Multiple
// made faster by using multiples of the largest number instead of calculating every possible number

function smallestCommons(arr) {
  const min = Math.min(arr[0], arr[1]);
  const max = Math.max(arr[0], arr[1]);
  let multiple = max;
  let count = 0;
  while (count < (max - min + 1)) {
    count = 0;
    for (let x = min; x <= max; x++) {
      if (multiple % x !== 0) {
          multiple = multiple + max;
        }
      else {
        count += 1;
      }
    }
  }
  return multiple;
}
smallestCommons([1, 5]);
smallestCommons([23, 18]);


// Sum All Primes
// less than or equal to "num"
// loop each number under "num". nested loop through that and check if it is prime. if prime, add to sum. start sum at 2 since 2 is a prime number but we skip it in nested loop.
function sumPrimes(num) {
  let sum = 2;
  for (let number = 0; number <= num; number++) {
  for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            break;
        }
        if (i == number - 1) {
          sum = sum + number;
        }
    }
  }
  return sum;
}
sumPrimes(977);
// alternateive solution using a helper function to check if prime instead of nested loops:
function sumPrimes(num) {
  // Helper function to check primality
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0)
        return false;
    }
    return true;
  }
  // Check all numbers for primality
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i))
      sum += i;
  }
  return sum;
}

// Sum All Odd Fibonacci Numbers
// less than or equal to "num"
function sumFibs(num) {
  let fibPrevious = 0;
  let fibLast = 1;
  let fibCurrent = 0;
  let fibSum = 0;
  while (fibCurrent <= num) {
    if (fibCurrent % 2 !== 0){
      fibSum = fibSum + fibCurrent;
    }
    fibPrevious = fibLast;
    fibLast = fibCurrent;
    fibCurrent = fibPrevious + fibLast;
  }
  return fibSum;
}

sumFibs(4);

// Convert HTML Entities (&, ", ', <, >)
function convertHTML(str) {
  str = str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;");
  return str;
}
convertHTML("Dolce & Gabbana");

// Sorted Union
// unite multiple arrays, removing duplicate numerical entries
function uniteUnique(arr) {
  let unitedArr = [];
  for (let x = 0; x < arguments.length; x++) {
    for (let y = 0; y < arguments[x].length; y++) {
      if (!unitedArr.includes(arguments[x][y])) {
        unitedArr.push(arguments[x][y]);
      }
    }
  }
  return unitedArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// or, with using a Set (doesn't allow duplicates) and .flat() (flat concatanates multiple arrays into one)
function uniteUnique(...arr) {
  return [...new Set(arr.flat())];
}
// Or as an arrow function
const uniteUnique = (...arr) => [...new Set(arr.flat())];

// Missing letters
// use unicode conversions to check for missing letter in row of alphabetical letters
function fearNotLetter(str) {
  let firstLetterCode = str[0].charCodeAt();
  for (let x = 0; x < str.length; x++) {
    if (str[x].charCodeAt() !== firstLetterCode + x) {
      return  String.fromCharCode(firstLetterCode + x);
    }
  }
  return undefined;
}

fearNotLetter("abce");

// DNA Pairing
// expand DNA code into base pairs of AT, TA, GC, CG
function pairElement(str) {
  const arr = [];
  for (let x = 0; x < (str.length); x++) {
    switch (str[x]) {
      case "A": arr.push(["A", "T"]);
      break;
      case "T": arr.push(["T", "A"]);
      break;
      case "C": arr.push(["C", "G"]);
      break;
      case "G": arr.push(["G", "C"]);
      break;
    }
  }
  return arr;
}
pairElement("ATCGA")

// Search and Replace
function myReplace(str, before, after) {
  // if before is capital case, capitalize after. could also use .substring
  if (before[0] == before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);;
  }
  // if before is lowercase, lowercase after
  if (before[0] == before[0].toLowerCase()) {
    after = after[0].toLowerCase() + after.slice(1);;
  }
  // and use .replace (didn't need to convert to regexp after all hmm)
  // let regBefore = new RegExp(before);
  str = str.replace(before, after)
  return str;
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// Pig Latin
// convert a word (string) to pig latin
// in this i use string matching tools and myRegex
// .match, regex, .substring
function translatePigLatin(str) {
  // if first letter is a vowel, add "way" to end and return
  let pigStr = "";
  const regex = /[aeiou]/gi;
  if (str[0].match(regex)) {
    pigStr = str + "way";
  }
  // check if no vowels and just add "ay"
  else if (str.match(regex) == null) {
    pigStr = str + "ay";
  }
  // otherwise, loop through each consonant until you hit a vowel, move consonants to end of the string and then add "ay"
  else {
    for (let x = 0; x < str.length; x++) {
      if (str[x].match(regex)) {
        pigStr = str.substring(x) + str.substring(0, x) + "ay";
        break;
      }
    }
  }
  console.log(pigStr);
  // rejoin the split string and return
  return pigStr;
}
translatePigLatin("california")
translatePigLatin("algorithm");
translatePigLatin("rhythm")

// but here is the more elegant solution using replace and a placeholders:
function translatePigLatin(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}
translatePigLatin("consonant");


// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  // replace any uppercase character with a space and then a copy of that character, split it into an array removing spaces or underscores, then filter out empty arrays.
  let spinalArr = str.replace(/[A-Z]/g, ' $&').split(/[ _-]/).filter(x => /\S/.test(x));
  let spinalStr = spinalArr.join("-").toLowerCase()
  console.log(spinalStr);
  return spinalStr;
}

spinalCase("AllThe-small Things");

// Wherefore art thou
// check if key value pairs exist in an object and then if all of them match, add the object to an array. Return after checking all objects.
// I check that the the object doesn't match and return false, avoiding the need for recursion for positive cases.
function whatIsInAName(collection, source) {
const property = Object.keys(source);
const value = Object.values(source);
const arr = collection.filter(function(object) {
    for (let x = 0; x < property.length; x++) {
      if (object.hasOwnProperty(property[x]) == false || object[property[x]] !== value[x]) {
        return false;
      }
    }
  return true;
});
  return arr;
}
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });


//Seek and Destroy
// arguments[0] references anything passed into a function, even if not explicitly named as a input value
function destroyer(arr) {
  let newArr = [...arr];
  for (let i = 1; i < arguments.length; i++) {
      newArr = newArr.filter(x => x != arguments[i])
    }
  console.log(newArr)
  return newArr;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// another succinct method using a spread operator:
function destroyer(arr, ...valsToRemove) {
  return arr.filter(elem => !valsToRemove.includes(elem));
}

// Diff Two Arrays
function diffArray(arr1, arr2) {
  const newArr = [];
  for (let x = 0; x < arr1.length; x++) {
    if (arr2.includes(arr1[x]) == false) {
      newArr.push(arr1[x]);
    }
  }
  for (let x = 0; x < arr2.length; x++) {
    if (arr1.includes(arr2[x]) == false) {
      newArr.push(arr2[x]);
    }
  }
  console.log(newArr);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// alternative solution using concat and then filter:
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Sum All Numbers in a Range
// a cleaner solution I didn't use would be to use an arithmetic summing formula “(startNum + endNum) * numCount / 2”.

function sumAll(arr) {
  let sum = 0;
  sum += (arr[0] + arr[1]);
  console.log(sum);
  if (arr[0] > arr[1]){
    for (let x = arr[1] + 1; x < arr[0]; x++) {
      sum += x;
    }
  }
  else if (arr[1] > arr[0]){
    for (let x = arr[0] + 1; x < arr[1]; x++) {
      sum += x;
    }
  }
  console.log(sum);
  return sum;
}

sumAll([1, 4]);
// alternative solution using built in functions:
function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sumBetween = 0;
  for (let i = min; i <= max; i++) {
    sumBetween += i;
  }
  return sumBetween;
}

sumAll([1, 4]);
