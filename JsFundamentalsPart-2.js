// Strict note is used to write secured js.
// It creates the visible errors
/*
'use strict';
let name = fale;
const age = true;

if(age) name_1 = true; // by using strict mode it will display the error, without it we can't find the error and code will not execute.
if(name) console.log('name');

const interface = 'Audio'; // Unexpected strict mode reserved word.
const private = 534;
const if = 23; // unexpected token if.

// Functions
function logger(){
  //body of a function
  console.log("My name is Gowtham");
}
logger();//this line is called invoking a function or calling a function or running a function.

// a function can also receive and return data.
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0); // here we are storing the return data of fruitProcessor function in the appleJuice variable.
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23'); // built-in function

// Function Declarations vs. Expressions

// Function declaration
const age1 = calcAge1(2003);

function calcAge1(birthYear) {
  return 2023 - birthYear;
}
const age1 = calcAge1(2003);

// Function expression
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
}
const age2 = calcAge2(2003);

console.log(age1, age2);
// Both function declaration and expression are same but, we can declare the function befor defining it using the function declaration method, but in function expression we will get an error-cannot access calAge2 before initialization, beacuse of hoisting.

// Arrow functions

const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(2003);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2003, 'sai')); 
console.log(yearsUntilRetirement(2002, 'teja'));
// in arrow functions we can't use this keyword.

// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));

// Reviewing Functions
const calcAge = function (birthYear) {
  return 2023 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}
// return statement must be the last statement in the function, after return statement function will get exited immediately.
console.log(yearsUntilRetirement(2003, 'sai'));
console.log(yearsUntilRetirement(1955, 'teja'));

// recursion function
// a function calls itself.
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

console.log(pow(2, 3));

// Introduction to Arrays
const friend1 = 'sai';
const friend2 = 'teja';
const friend3 = 'ravi';

const friends = ['sai', 'teja', 'ravi'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay'; // we can mutate the arrays, we can't cahnge the entire array as we declared it as a const.
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = 'Gowtham';
const jonas = [firstName, 'varma', 2023 - 2003, 'student', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
  return 2023 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

// Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay'); // it will add the data at end. push function will return the length of a new array.
console.log(friends);
console.log(newLength);

friends.unshift('John');// it will add element at the begining of array.
console.log(friends);

// Remove elements
friends.pop(); // Last element will be removed.
const popped = friends.pop(); // It will return the element that got removed.
console.log(popped);
console.log(friends);

friends.shift(); // First element will be removed.
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); // we will get -1.

friends.push(23);
console.log(friends.includes('Steven')); // true
console.log(friends.includes('Bob')); // false
console.log(friends.includes(23)); // true

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}

// Introduction to Objects
const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

// they are key value pairs. keys are also known as properties.
// in objects the order of retriving data does'nt matter
// so we can use arrays for order or structured data and objects for unstructured data.
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};

// Dot vs. Bracket Notation
// . - member access
// [] - computed member access
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey) // unexpected string.

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
// when we use bracket notation it will first gets the value in the interestedIn and gets the value in jonas.
// if we use the dot notation it will display as undefinied.
if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Object Methods

const gowtham = {
  firstName: 'Gowtham',
  lastName: 'varma',
  birthYeah: 2003,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  // calcAge: function (birthYear) { // it is a property of this object so we will use ':'.
  //   return 2023 - birthYear;
  // }

  // console.log(gowtham.calcAge(2003)); // both will give the same output.
  // console.log(gowtham['calcAge'](2003));
  // if we pass the diff argument in the above expression then we will get an error, so to get the value from the object we will use this keyword.
  // this keyword always returns the current object on which it is called.
  // If we change the object name also this will represents the current object only so, instead of using gowtham.birthYear we can use this.birthYear.

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
};

console.log(gowtham.calcAge());

console.log(gowtham.age);
console.log(gowtham.getSummary);

// prototypes: 
// javaScript is an prototype-based OOP language. In prototype-based languages, objects inherit data from objects.
// Object.getPrototypeOf() - Accessing the shared Prototype of an Instance
let myArray = new Array("a", 2, true);
console.log(Object.getPrototypeOf(myArray));

// Adding a Method to the prototype
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.displayFullName = function() {
  return this.firstName + " " + this.lastName;
};

let person1 = new Person("Virat", "Kohli");
console.log(person1.displayFullName());
// prototypal Inheritance
// On calling the new() operator, all the properties and methods defined on the prototype will become accessible to the instance objects. This process is called Prototypal Inheritance.

let myArray = new Array("a", 2, true);
console.log(Object.getPrototypeOf(myArray));

let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal; // (*)

// we can find both properties in rabbit now:
console.log(rabbit.eats);
console.log(rabbit.jumps);

// classes
// The class is a special type of function used for creating multiple objects

class Animal {
    constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  sniff() {
    return this;
  }
}
let dog = new Dog("dog", "german Shepherd");

console.log(dog.sniff());
// here this refers to Instance of object i.e, dog
// The extends keyword is used to inherit the methods and properties of the superclass.
// Calling super() makes sure that SuperClass constructor() gets called and initializes the instance.
// this in object methods refers to current object
// this in regular function refers to the window object.
// In Arrow functions, this depends on two aspects: 1. In object methods - window and In arrow functions with callbacks refers to current object.

// Iteration: The for Loop

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
// emojis shortcut - windows + '.'.

// Looping Arrays, Breaking and Continuing
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];
const types = [];

// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist

for (let i = 0; i < jonas.length; i++) {
  // Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  // Filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break;
  // loop will get terminated immediately, it will not continue any more.
  console.log(jonas[i], typeof jonas[i]);
}

// Looping Backwards and Loops in Loops
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}

// The while Loop
// It is more versatile than the for loop, it can be used in larger variety of situations, because it doen't require the counter, all it needs is a condition.
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

const randomValue = function(){
  let dice = Math.trunc(Math.random() * 6) + 1;
  return dice;
}
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  randomValue();
  if (randomValue.dice === 6) console.log('Loop is about to end...');
}

*/
