var age = 30;
var oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

// declare an object:
const me = {
  name: "Gerard",
  age: 46,
  family: ["dad", "mom", "sister"],
};

// Primatives and Objects in Practice.

/*
NOTE:
*/

// when creating an object in Javascript
// you are essentially creating a refference to
// the original object that was created

const friend = me;
friend.age = 27;

console.log("Friend", friend);
console.log("Me", me);

// To create a shallow copy.
const newfriend = Object.assign({}, me);
newfriend.age = 100;
newfriend.family.push("nicole");
console.log(newfriend);

// To create a deep clone lead to a more complex topic.

// declaring arrays
const arr = [2, 3, 4];
// destructuring the array. (unpacking)
const [x, y, z] = arr;

//declaring a restaurant object.
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  printOrder: function (indexOne, indexTwo) {
    return [this.starterMenu[indexOne], this.mainMenu[indexTwo]];
  },

  makeOrder: function () {
    var array = [];
    var index;

    while (array.length < 3) {
      // prompt(index);
      array.push(prompt("Enter your order"));
      array[index] += 1;

      //else if (array.length == 3) break;
    }

    console.log(...array);
  },

  listMenu() {
    console.log(...restaurant.mainMenu, "  \n", ...restaurant.starterMenu);
  },
};

// declaring and destructuring object variables.
var [first, second] = restaurant.categories;
console.log(first, second);
// to skip elements
// const [first, , second] = restaurant.categories;

// Switch elements one of two ways
// create a temporary variable to store a value
/*var temp = first;
first = second;
second = temp;
*/
//or

[first, second] = [second, first];
console.log(first, second);
console.log(x, y, z);
console.log(restaurant.printOrder(3, 0));

// The spread operator creates shalow copies of an Iterable.

// The Spread Operator logs the indivual elements of an array.
var newarr = [1, 2, 3, ...arr]; // this builds a new array and adds other elements to the end.
console.log(newarr);

// You can also add other items to an array with the spread operator.
const newMenu = [...restaurant.mainMenu, " Tofu", "Spinach"];
console.log(newMenu);

// Combine too arrays with the spread operator.
specialMenu = [...newMenu, ...newarr];
console.log(specialMenu);

restaurant.listMenu();
