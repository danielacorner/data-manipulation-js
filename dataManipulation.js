// some arrays
const arrayOfStrings = ["hello!", "how are you today?", "🐻"];

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

console.log("🌟🚨: objectOfACat", objectOfACat);

// attack cat's attack() function to the first button on the page
const button = document.querySelector("button");
button.addEventListener("click", () => objectOfACat.attack());

// * let vs const

// ! Object and Array methods

// * Array method: forEach

// * how to find all Object and Array methods:
// TODO: in the browser Developer Tools -> Console tab,
// TODO: type [] and hit Enter
// TODO: type {} and hit Enter
// TODO: click them open and check out the [].__proto__ and {}.__proto__

// * Array methods: map, filter, sort
// map
// filter
// sort

// * {...spread} and {...rest}
// {hi: "hey", wat: "what", details: { color: "blue", size: "small" }}

// * Object methods: Object.keys, Object,values, Object.entries
// TODO: turn objects into arrays with: Object.keys, Object,values, Object.entries

// * Array methods: reduce
// TODO: turn arrays into objects with reduce

// TODO: turn objects into arrays with reduce

// * for loop
// TODO: turn arrays into objects with a for loop

// TODO: turn objects into arrays with a for loop
