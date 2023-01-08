/the/ // search for a string
| // or
/i // ignore case
/g // global, or, search or extract a match more than once
. // wildcard, match any letter before/after the position of the dot/period
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
{} // quantity specifier {3,} three or more, {2,5} two to five times or {6} only six.
? // optional element (preceding) like catching american or british english spellings
(?=...) // positive look ahead. replace ... with what you want to lookahead
(?<=...) // positive look behind
(?!=...) // negative look ahead
(?!<=...) // negative look behind
() // check for mixed groupings of characters like: /P(engu|umpk)in/g
(\w+) \1 \1 // capture groups, automatically turns a search term in paranthesis to a variable counted up from 1 from the left. in this case, match any word repeated 3 times


//regex functions

.test() // returns true or false
  myRegex.test(myString);
  let result = myRegex.test(myString); // or assign it to variable
.match() // extract/export a matching search (flip string and regex)
  myString.match(myRegex);
.length // return the count of the result (global/generic function)
.replace() // search for and replace the pattern in a string
  string.replace(pattern, "replacement text")
  "Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1'); // or use $ dollar sign to access a capture group. this will flip Code and Camp to Camp Code

// using ?
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // match <h1> instead of the whole sentence
let result = text.match(myRegex);

// using replace to remove whitespaces at beginning and end
let hello = "   Hello, World!  ";
let wsRegex = /^(\s+)|(\s+)$/g; // search for 1 or more whitespaces at the beginning or the end
let replace = "";
let result = hello.replace(wsRegex, replace); // replace them with nothing :)


let userCheck = /^[a-zA-Z]{2,}\d*$|^[a-zA-Z]{1,}\d{2,}$/ig;
// only alphanumeric: only alpha in front and numbers in back
// numbers have to be at the end: \d$
// lowercase and uppercase is ok: /i
// atleast two characters long, if 2 characters, must be alphabet characters: is OR

// NOTEs:
// Parsing HTML with regular expressions should be avoided,
// but pattern matching an HTML string with regular expressions is completely fine.

// remember to begin ^ and end $ the search term explicitly if you want an exact match
