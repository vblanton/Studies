console.log() // print to console (in firefox, chrome, etc) whatever is in the paranthesis
console.warn() // print a warning
console.clear() // clear the console
typeof // check data structure or type of a variable (string, int, etc)
console.log(typeof 0);
// 7 data types:
// Boolean, Null, Undefined, Number, String, Symbol (ES6), BigInt (ES2020),
// and one type for mutable items: Object.
// Note that in JavaScript, arrays are technically a type of object.

\ //use the escape character to make sure text isn't interpreted as code, or use "" '' depending on context

// all values evaluate to true, except for falsy values:
//  false, 0, "" (an empty string), NaN, undefined, and null.

// Common mistakes
// mixing up = and == or ===
// mixing "" and ''
// not using escape characters
// misspelling variables, case sensitive
// not closing things that are opened properly
// forgetting the open and close paranthesis after a function call this.myfunction();
// inputting function arguments in the wrong order
// off by one errors (OBOE).. counting up from 0 or 1 depending on the situation
// reinitializing/resetting variables within a loop (not resetting a variable in a for loop before re-using it on the next iteration)
// infinite loops (not closing out a loop/breaking, resetting, skipping over a variable you are counting)
