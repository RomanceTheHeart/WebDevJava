"use strict";
/* This sections discusses fucntions implementation in JavaScript.
 */

function CalcuteAge(birthyear) {
  const currentyear = 2022;
  let age = currentyear - birthyear;

  return age;
}

let NewAge = CalcuteAge(1976);
console.log(NewAge);

//Arrow Functions: Used for simple functions
const CalcutaleAge = (birthyear) => 2022 - birthyear;
console.log(CalcuteAge(1976));

// Arrow Funstions with more parameters: remember to incase values in paremthasis.
const YearsUntilRetirement = (birthyear) => {
  const age = 2022 - birthyear;
  const retirment = 65 - age;
  return retirment;
};

console.log(YearsUntilRetirement(1964));

// More Functions
function CutFruitPieces(fruit) {
  return fruit * 4;
}

//Functions can be called inside of other functions.
function FruitProccessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and juice with oranges ${oranges}`;

  return juice;
}

// Coding Challenge:
