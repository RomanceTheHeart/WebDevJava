"use strict";
// Function example:
// This is an example of how Javascript
// works behind the scene.
console.log(addFunction(2, 4));

function addFunction(a, b) {
  return a + b;
}

//-------------------------------------------------------------------------

//This is a function expression.
//This expression can not implement the hoisting
// feature of JavaSctipt.

const addExpression = function (a, b) {
  return a + b;
};

//-------------------------------------------------------------------------
// this is an arrow function.
// the arrowo returns the value of a + b
// implisitly.

const addArrowFunction = (a, b) => a + b;

// In conclusion try to declare all of your variables with Const or Var
// Note explore the window object in the console.
