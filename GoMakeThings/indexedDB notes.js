// Open a database
let openDB = indexedDB.open('spellbook', 1);

// doensn't use promises, but is event driven, this library enables promises: https://github.com/jakearchibald/idb
// If the database was successfully opened
openDB.onsuccess = function () {
	let db = openDB.result;
	console.log('success', db);
};

// If there was an error
openDB.onerror = function () {
	console.warn(openDB.error);
};

// open and close the database when using and done

// If the database was successfully opened
openDB.onsuccess = function () {

	// Get the database
	let db = openDB.result;

	// Do some stuff...

	// Close the database
	db.close();

};

// bump up the version to trigger an update:

// Open a database
let openDB = indexedDB.open('spellbook', 2);

// If the version has increased or there's no existing DB
openDB.onupgradeneeded = function (event) {

	// Get the database and previous version number
	let db = openDB.result;
	let oldVer = event.oldVersion;

	// If there's no wizards store, create it
	if (oldVer < 2) {
		// Create the store...
	}

};

// create a store (key:value table)
// db.createObjectStore()

openDB.onupgradeneeded = function (event) {

	// Get the database and previous version number
	let db = openDB.result;
	let oldVer = event.oldVersion;

	// If there's no wizards store, create it
	if (oldVer < 2) {
		db.createObjectStore('wizards');
	}

};


//... todo