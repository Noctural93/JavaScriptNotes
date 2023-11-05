/*
// values and variables
console.log("gowtham");
console.log(20);

let firstName = "gowtham";

console.log(firstName);

//variable name conventions
let first_element = "GV";
let $function = 20;

let person = "gowtham";
let PI = 3.1415;
// camel case
let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

// let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990; -- we can't reassign or redeclare the const variable
// const job;

var job = 'programmer';
job = 'teacher'
// let and var both are same but, var is mostly used in old version of js
lastName = 'Schmedtmann';
console.log(lastName);

// Basic Operators
// Math operators
const now = 2037;
const ageRavi = now - 1991;
const ageSai = now - 2018;
console.log(ageRavi, ageSai);

console.log(ageRavi * 2, ageSai / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
// string concantation
const firstName = 'Gowtham';
const lastName = 'Varma';
console.log(firstName + ' ' + lastName);
console.log(4 % 2);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageRavi > ageSai); // >, <, >=, <=
console.log(ageSai >= 18);

const isFullAge = ageSai >= 18;

console.log(now - 1991 > now - 2018);

// Operator Precedence
const now = 2037;
const ageRavi = now - 1991;
const ageSai = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageRavi + ageSai) / 2;
console.log(ageRavi, ageSai, averageAge);

// Strings and Template Literals
const firstName = 'Gowtham';
const job = 'Null';
const birthYear = 2003;
const year = 2037;

const Gowtham = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(Gowtham);

const GowthamNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(GowthamNew);

console.log(`Just a regular string...`);

// Ternery Literals
console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);

// Taking Decisions: if / else Statements
const age = 15;

if (age >= 18) {
  console.log('you can start driving license');
} else {
  const yearsLeft = 18 - age;
  console.log(`you're too young. Wait another ${yearsLeft} years`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// Type Conversion and Coercion

// type conversion
const inputYear = '2003';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('gg'));-- we can't covert string to num
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log(`I am ` + 20 + ` years old`); // when ever there's is a number between the strings then number will be converted into string(during the plus operator).
console.log(`21` - 4 - `5`); // When we use the -, *, / operator's it will convert the string into num.
console.log(`3` * `4`);
console.log(`3` / `2`);

let n = `1` + 1;
n = n - 1;
console.log(n); // 10

// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('gg')); // true
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}

// Equality Operators: == vs. ===
const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

//prompt() method displays a dialog box that prompts the user for input
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
  console.log('Cool! 23 is an amzaing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');

// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('you're able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('you're able to drive!');
} else {
  console.log('Someone else should drive...');
}

// The switch Statement
const day = 'friday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}
// we can use switch case in place of if-else.

// Statements and Expressions
3 + 4
1991
true && false && !false
// above examples are expressions

if (23 > 10) {
  const str = '23 is bigger';
}
// above example is statement

const me = 'Gowtham';
console.log(`I'm ${2023 - 2003} years old ${me}`);

// The Conditional (Ternary) Operator
const age = 23;
// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine';
} else {
  drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

*/