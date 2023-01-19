// module making using a IIFE
// grouping mixins into a module
let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})();
// which is then evoked like this:
motionModule.glideMixin(duck);
duck.glide();

// evoke an anonymous function immediately, using two () at the end:
// Called IIFE, immediately invoked function expression
// anonymous and immediately invoked
(function () {
  console.log("Chirp, chirp!");
})();


// making a property private to not be able to change it.
// you have to create a new property that is a function that defines a new variable
// this is called closure, because only the function's property name has access to the variable it creates.
function Bird() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function() {
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount();



// mixin : a collection of functions that any objects can use
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};

flyMixin(bird); // adds it to the object
flyMixin(plane);

// you can overwrite a parent of supertype prototype function by making another one with the same name in the child

// add a function to a prototype
Dog.prototype.bark = function () {
  console.log("Woof!");
}

// create an object that inherits the Animal.prototype blueprint
let animal = Object.create(Animal.prototype); // alternative to the previous let concept...
animal instanceof Animal; // return true


// You can make a new prototype to be a shared prototype of other prototypes to not duplicate coriander
// DRY Don't Repeat Yourself
function Animal() { };

Animal.prototype = {
  constructor: Animal,
  describe: function() {
    console.log("My name is " + this.name); // adds name to all Animals
  }
};

// you can then make Bird inherit Animal hence making an inheritance chain or prototype chain.
Bird.prototype = Object.create(Animal.prototype);
//prototypes chain: supertypes and subtypes. duck >> bird.prototype >> object.prototype
// Object is a supertype for all objects

// but then set the constructor for them manually so it read right in the chain
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;


Dog.prototype.isPrototypeOf(beagle);  // yields true
Object.prototype.isPrototypeOf(Dog.prototype);  // yields true

// constructor property can be overwritten
// check duck's constructor property if it bird. output true or false.
console.log(duck.constructor === Bird);
// check object's prototype property
Bird.prototype.isPrototypeOf(duck); // return true or false


// or a function that checks
function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}

// prototypes: these properties are shared in all instances of a constructor but defined outside.
Bird.prototype.numLegs = 2;
// or a bunch:
Bird.prototype = {
  constructor: Bird, // assign the constructor value so that it doesn't get erased later by accident
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};


//ownProperty which is defined in the constructor itself
// push each own propertty of duck to a list and view it
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
let prototypeProps = [];
// Only change code below this line
for (let property in canary) {
  if(canary.hasOwnProperty(property)) {
    ownProps.push(property); // push ownProperty's to an array
  } else {
  prototypeProps.push(property); // push prototype properties to an array
}
  }
}
console.log(ownProps);

// check whether an object is an instance of a constructor
crow instanceof Bird; // returns true or false

// design the constructor to accept variables:
function Bird(name, color) {
  this.name = name; // an "own property"
  this.color = color; // an "own property"
  this.numLegs = 2;
}
let falcon = new Bird("Big", "brown"); // create a bird object with those names and colors

// constructor functions create new objects
// they define properties and behaviours, but don't return a result
function Bird() { //capitalize the name
  this.name = "Albert"; // it is necessary to use this.
  this.color = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird(); // generate/create a new instance of the object named bluebird

// Basic Object:
// + Method: or property with a function
let dog = {
name: "Truedog",
numLegs: 7
sayLegs: function() {return "This dog has " + this.numLegs + " legs.";} // method
};

console.log(dog.name);
