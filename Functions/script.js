"use strict";
/* This sections discusses fucntions implementation in JavaScript.
 */
function GetIntert() {
  const Interest = prompt(
    `What would you like to know about Gerard?',
  'job,`,
    "age",
    "firstname",
    "lastname",
    "friends"
  );
}

// Coding Challenge:
//Tip Calculator:
function CalcutlateTip(amount) {
  let tip;
  let newvalue = amount;

  if (amount > 0 && amount >= 50 && amount <= 300) {
    tip = 0.15;
    newvalue *= tip;
  } else {
    tip = 0.2;
    newvalue *= tip;
  }
  return newvalue;
}

// Coding Challenge:

//Arrow Functions: Used for simple functions
const CalcutaleAge = (birthyear) => 2022 - birthyear;

// Arrow Funstions with more parameters: remember to incase values in paremthasis.
const YearsUntilRetirement = (birthyear) => {
  const age = 2022 - birthyear;
  const retirment = 65 - age;
  return retirment;
};

// More Functions
function CutFruitPieces(fruit) {
  return fruit * 4;
}

//Functions can be called inside of other functions.
function FruitProccessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and juice with oranges ${oranges}`;

  return juice;
}
let AverageScore = 0;
// Coding Challenge+

function CalculateAverage(amount) {
  let counter = 0;
  let scores = [];
  let index = 0;
  while (counter <= 2) {
    index = amount;
    index += prompt("What are doing?");
    scores.push(`${index}`);
    counter++;
  }
  amount + 1;

  let sum = 0;
  for (let i = 0; i < scores.length; ++i) {
    Number((sum += +scores[i]));
  }
  console.log(`The total average is: ${sum / 3}`);
}
// Coding Challenge
//------------// Arrays //--------------------------------------------Arrays------------//

// the two most important data strctures are arrays and onjects

// two ways of declaring an array.
const friends = ["Tony: ", "andre: ", "Pooch: "];
const years = new Array(1991, 1984, 2008);

//print the element
console.log(friends[0]);
//get the length of the array
console.log(friends.length); // to get length: -1

// insert an element
friends[1] = "Andre: ";
console.log(friends);

//Array Operations

friends.push("Mad Dog: ");

const newLength = friends.push("Don Won: "); // this captures the length in a veriable.

friends.unshift("Marry: "); // adds an element to the beginning of the array.
// friends.pop(); take out the last element.
// friends.IndexOf('Marry'); returns the element at this index.
// friends.includes('element') returns a boolean value.

// Coding Challenge

//Coding Challenge

//------------//Arrays

//-------------------//Objects

//Data structures:
const GerardArray = [];

//object construction
const Gerard = {
  // key value pairs are called properties.
  // fucntions are also properties along with all other properties.
  firstname: "Gerard",
  lastname: "Paul",
  birthdate: 1976,
  job: "Freelancer",
  friends: friends,
  hasFriends: true,

  //adding functions to objects:
  calculateAge: function (birthyear) {
    return 2020 - this.age;
  },
};

// retrieve and change  Data:
console.log(Gerard.lastname);
// or bracket notation. Allows you to use expressions.
console.log(Gerard["lastname"]);

// expression example:
const nameKey = "name";
console.log(Gerard["first" + nameKey]);
console.log(Gerard["last" + nameKey]);

// to get information

//console.log(Gerard[Interest]);

// -||Challenge: write a sentence in a dynamic way.

// -||Challeng write a string that contains all of the data for this object.

// -||Start Coding: Challenge.

// -||End Coding: Challenge.

const types = [];
// for loops

for (let i = 0; i <= friends.length; ++i) {
  console.log(`${friends[i - 1]}` + `${i}`);

  //fill an array.
  types.push(typeof friends[i]);
}

// for loops
console.log(CalcutlateTip(70));

//-------------------//Objects
CalculateAverage(AverageScore);
