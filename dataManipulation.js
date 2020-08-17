// some arrays
const arrayOfStrings = ["hello!", "how are you today?", "🐻🐼🐨"];

// an object
const arrayOfNumbers = [2, 4, 6];

const objectOfACat = {
  legs: 4,
  name: "fluffykins",
  attack: function () {
    // "this" points to the object (objectOfACat)
    console.log(`${this.name} attacks for ${this.legs} damage!`);
  },
};

// attack cat's attack() function to the first button on the page
const button = document.querySelector("button");
button.addEventListener("click", function () {
  objectOfACat.attack();
});

//
//
//
// * let vs const
let mutableString = "hi";
mutableString = "hello";

const immutableString = "can't change me";
// immutableString = "compiler error"

//
//
//
// * Array method: forEach
// loop over an array and do something for each value

let longString = "";

arrayOfStrings.forEach(function (string) {
  longString = longString + string;
});

//
//
//
// * Array methods: map, filter, sort,

// * map
// transform each value in an array using the same operation

const arrayMultipliedByTwo = arrayOfNumbers.map(function (number) {
  return number * 2;
});

// * filter
// remove items from an array if they don't meet a condition

const arrayOf4OrGreater = arrayOfNumbers.filter(function (number) {
  return number >= 4; // return "true" if you want to keep the item
});

// * sort
// sort an array by comparing the first and second items

const arraySortedDescending = arrayOfNumbers.sort(function (a, b) {
  // a and b are the first and second items
  return b - a; // return a negative or positive value to sort left / right
});

//
//
//
// * Array methods: find, findIndex
// find an item in an array

// * find
const theNumber4 = arrayOfNumbers.find(function (number) {
  return number === 4; // return true if you want to find that item
});

// * findIndex
const indexOfTheNumber4 = arrayOfNumbers.findIndex(function (number) {
  return number === 4;
});

//
//
//
// * Array method: join, split
// join array into string,
// split string into array

const anotherLongString = arrayOfStrings.join("---");
const myOriginalArray = anotherLongString.split("---");

// combine with map for complex operations

const stringsArrayUppercased = arrayOfStrings
  .join(",") // join into one string with commas
  .split("") // split into array of letters
  .map((letter) => letter.toUpperCase()) // uppercase each letter
  .join("") // join into one string with commas
  .split(","); // split by commas

//
//
//
// * how to find all Object and Array methods:
// in the browser Developer Tools -> Console tab,
// type [] and hit Enter
// type {} and hit Enter
// click the expansion triangle open and open the [].__proto__ and {}.__proto__

//
//
//
// * {...spread} and {...rest}
// {hi: "hey", wat: "what", details: { color: "blue", size: "small" }}

// * spread
// take an array or object and "flatten" it out into another array or object
// like spreading out a deck of cards,
// then we can wrap it up again in a new deck

const arrayOfStringsPlusHello = [...arrayOfStrings, "hello"];

const objectOfACatWithSuperpower = {
  ...objectOfACat,
  superpower: function () {
    return `${this.name} burps`;
  },
};

// * rest
// wrap up any remaining function arguments into one parameter
// (handy if you don't know how many arguments there are!)

// basic function with rest (contrived example)

function callAFriend(friendName, phoneNumber, ...rest) {
  if (rest.length > 0) {
    console.warn(
      "function callAFriend only accepts two arguments! Extra arguments passed were:",
      rest
    );
  }
  return `calling ${friendName} at ${phoneNumber}...`;
}

callAFriend("Lui", 18006667777, "hello", "how are you today", true);

// callback function with rest (real example)

window.addEventListener("click", function (...rest) {
  console.log(
    "🌟🚨: let's see what parameters we get in the click event listener's callback function:",
    rest
  );
});

//
//
//
// * Object methods: Object.keys, Object,values, Object.entries
// turn objects into arrays with: Object.keys, Object,values, Object.entries

// array of keys
const keys = Object.keys(objectOfACat); // ["legs","name","attack"]
// array of values
const values = Object.values(objectOfACat); // [4, "fluffykins", function () { console.log(`${this.name} attacks for ${this.legs} damage!`)}]
// array of [key, value] arrays
const entries = Object.entries(objectOfACat); // [["legs",4], ["name": "fluffykins"], ["attack", function () { console.log(`${this.name} attacks for ${this.legs} damage!`)}]]

// * Array methods: reduce
// reduce is the most flexible array method;
// it can perform any of the other array methods, or a combination, and more

// e.g. return the same array (i.e. do nothing)
const theSameArray = arrayOfStrings.reduce(function (acc, cur) {
  acc.push(cur);
  return acc;
  // or
  // return [...acc, cur]
}, []); // acc starts out as [] (empty array)

// e.g. turn array into object
const objectOfStrings = arrayOfStrings.reduce(function (acc, cur, idx) {
  acc[`string${idx}`] = cur;
  return acc;
  // or
  // return { ...acc, [`string${idx}`]: cur };
}, {}); // acc starts out as {} (empty object)

// e.g. turn object into array
const arrayOfCatProperties = Object.entries(objectOfACat).reduce(function (
  acc,
  cur
) {
  const [key, val] = cur; // "destructure" the key and value from the current item
  // or
  // const key = cur[0]
  // const val = cur[1]

  // only add the property to the object if it's not a function
  if (typeof val !== "function") {
    acc = [...acc, val];
  }

  return acc;
},
[]);

// BONUS: make a new array of size N
// [...Array(N)].map((_, i) => ({ id: i })),

const arrayOfPrimes = [...Array(100)]
  .map((_, idx) => idx)
  .filter((num) => getIsPrime(num));
console.log("🌟🚨: arrayOfPrimes", arrayOfPrimes);

// source: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-8.php
function getIsPrime(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}

const App = () => <div>Hello React</div>;

// render App in the element with id="root"
const rootElement = document.querySelector("#root");
ReactDOM.render(<App />, rootElement);

// learn more about React at https://egghead.io/lessons/react-a-beginners-guide-to-react-introduction
