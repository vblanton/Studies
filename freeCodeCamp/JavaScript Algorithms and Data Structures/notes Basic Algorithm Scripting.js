// Chunky Monkey
// Write a function that splits an array into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let temp = []; // temporary store array
  let groupArray = [];   // push completed array

  for (let x = 0; x < arr.length; x++) {
    if (x !== 0 && x % size == 0) { // if it isn't the first position and the remained divided by size is 0, push it to the next array.
      groupArray.push(temp);
      temp = [];
    }
    temp.push(arr[x])
    if (x == arr.length - 1) { // finally push the last section to the array
      groupArray.push(temp);
      temp = [];
    }
  }
  return groupArray;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);

// cleaner code using slice and iterating over the size of i += size
function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}
// or a version that uses a while loop and deletes
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}


// Mutations
//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// if you match, continue to next letter and repeat
// after finishing, check whether a counter matches the length of the string

function mutation(arr) {
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();
  let counter = 0;
  for (let x = 0; x < (arr[1].length + 1); x++) {
    if (x == arr[1].length && counter == (arr[1].length)) {
      console.log(x)
      return true;
      // if x passes the length of second string, that means i've checked all letters
      // check the counter
      // if the counter is the same length as x, return true;
    }
    if (x == arr[1].length) {
      return false;
      // otherwise, return false, because not all letters matched
    }
    for (let y = 0; y < arr[0].length; y++) {
      if (arr[0][y] == arr[1][x]) {
        counter++;
        console.log(x, y)
        console.log(counter)
        break;
        // break out of this for loop and into the previous one if you find a match
        // so as not to create multiple matches for the same letter
      }
    }
  }
}

// note, using indexOf() would've allowed for less code:

function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

mutation(["floor", "for"]);

// Where do I Belong, return where a number value should be located in an array once sorted smallest to largest

function getIndexToIns(arr, num) {
  arr.sort(function(a, b){return a - b}); // for sorting numbers, as sort by default sorts strings
  for (let x = 0; x < arr.length; x++) {
    if (arr[x] >= num) {
      return x;
    }
  }
  return arr.length; // if no integers were less, than return the length since it will be in the last position
}

// Falsy Bouncer Remove all falsy values from an array.
function bouncer(arr) {
  for (let x = 0; x < arr.length; x++) {
    if (!arr[x]) {
      arr.splice(x, 1);
      --x;
    }
  }
  console.log(arr)
  return arr;
}

bouncer([7, "ate", "", false, 9]);


// Slice and Splice.. Copy each element of the first array into the second array, in order. Begin inserting elements at index n of the second array.
function frankenSplice(arr1, arr2, n) {
  let arr3 = [...arr2];
  for (let x = 0; x < arr1.length; x++){
    arr3.splice(n + x, 0, arr1[x]);
  }
  return arr3;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Title Case a Sentence (could probably do this cleaner, but...)

function titleCase(str) {
  let strArray = str.split("");
    for (let x = 0; x < strArray.length; x++) {
      if (x == 0) {
        strArray[x] = strArray[x].toUpperCase();
        continue;
      }
      if (str[x - 1] == " ") {
        strArray[x] = strArray[x].toUpperCase();
        continue;
      }
      else {
        strArray[x] = strArray[x].toLowerCase();
        continue;
      }
    }
  strArray = strArray.join("")
  console.log(strArray)
  return strArray;
}

titleCase("I'm a little tea pot");

// Boo who, Check if a value is classified as a boolean primitive

function booWho(bool) {
  if (bool === true || bool === false) {
    return true;
  }
  else {
    return false;
  }
}

booWho(null);


// Finders Keepers, check if an element in an array matches, and return it

function findElement(arr, func) {
  for (let x = 0; x < arr.length; x++) {
    if (func(arr[x]) == true) {
      return arr[x];
      }
  }
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

// Truncate a String
function truncateString(str, num) {
  if (str.length > num) {
    let newStr = str.substring(0, num) + "...";
    return newStr;
  }
  else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);


// Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
  let newStr = str;
  if (num <= 0) {
    return str = "";
  }
  else {
    for (let x = 2; x <= num; x++){
      newStr += str;
    }
    console.log(newStr);
  }
   return newStr;
}

repeatStringNumTimes("abc", 3);


// Confirm the Ending of a string
function confirmEnding(str, target) {
  // check if the target matches the str length - length of target
  // use substring();

  let answer = false;
  let targetLen = target.length; // check length of target
  if (str.substring(str.length - targetLen) == target) {
    answer = true;
  }
  return answer;
}


// Return Largest Numbers in Arrays
function largestOfFour(arr) {
  let answer = [];
    for (let x = 0; x < arr.length; x++) {
        let tempAnswer = arr[x][0]; // reset through each iteration
      for (let y = 0; y < arr[x].length; y++) {
        // iterate through and find the largest number
        if (arr[x][y] > tempAnswer) {tempAnswer = arr[x][y];}
        // after the number is 3, push it to the array
        if (y == 3) {answer.push(tempAnswer);}
        console.log(answer)
      }
    }
  return answer;
}

// find the longest word in a string
function findLongestWordLength(str) {
  let wordArray = str.split(" ");
  let longestWordLength = 0;
  console.log(wordArray);
  for (let x = 0; x < wordArray.length; x++) {
    if (wordArray[x].length > longestWordLength) {
      longestWordLength = wordArray[x].length;
    }
  }
  return longestWordLength;
}

// Factorialize a Number
function factorialize(num) {
  let answer = 1;
  while (num > 0) {
    answer *= num;
    num--;
    console.log(answer);
  }
  return answer;
}

factorialize(5);

// reverse a string
function reverseString(str) {
  let revStr = "";
  for (let x = 0; x < str.length; x++){
    revStr += str[str.length - x - 1];
  }
  console.log(revStr)
  return revStr;
}
reverseString("hello");
// or the easy way:
function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

// C to F
function convertCtoF(celsius) {
  let fahrenheit;
  fahrenheit = celsius * 9/5 + 32;
  return fahrenheit;
}
convertCtoF(30);
