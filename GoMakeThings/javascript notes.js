//tips:
// document organizing:

// Variables go at the top
// Functions go in the middle
// Event listeners and function execution goes at the end

// keep good in-code documentation, or use JSDoc

// create your own library wrappers to simplify code reading
// check out: https://gomakethings.com/the-vanilla-js-constructor-pattern/
// check out: https://gomakethings.com/the-vanilla-js-class-pattern/

// Modularizing your code base (similar to last one)
// use ESModules: https://click.convertkit-mail2.com/e5um3p5vm9i7hpwr2g9u8/58hvh7h54vxpl2f6/aHR0cHM6Ly9nb21ha2V0aGluZ3MuY29tL3Nlcmllcy9lcy1tb2R1bGVzLw==



// use the new FormData() object constructor to create forms:

// Get the form
let form = document.querySelector('form');

// Get all field data from the form
// returns a FormData object
let data = new FormData(form);

// loop through it using for.. of!

// logs...
// ["title", "Go to the beach"]
// ["body", "Soak up the sun and swim in the ocean."]
// ["userId", "1"]
for (let entry of data) {
    console.log(entry);
}

// logs "title", "Go to the beach", etc.
for (let [key, value] of data) {
    console.log(key);
    console.log(value);
}


// using a for.. of loop to sort through an array and make a new array
let wizardsWithStaffs = [];

for (let wizard of wizards) {
	if (wizard.tool !=='staff') continue;
	wizardsWithStaffs.push(wizard.name);
}

wizardsWithStaffs.sort();


// POST vs GET methods for forms. By defualt, it uses GET

<form action="path/to/the/endpoint.php" method="POST">
	<label for="email">Enter your email</label>
	<input type="email" id="email" name="email" />
	<button>Subscribe</button>
</form>


 // assign object values to individual variables using destructuring

 let movies = {
	disney: 'Moana',
	pixar: 'Up',
	dreamworks: 'How to Train Your Dragon',
	nickelodeon: 'Wonder Park'
};

let {pixar, dreamworks} = movies;

// logs "Up"
console.log(pixar);

// Uncaught ReferenceError: disney is not defined
console.log(disney);

//rename using ":""
let {disney, pixar, dreamworks, nickelodeon: nick} = movies;

// logs "Wonder Park"
console.log(nick);