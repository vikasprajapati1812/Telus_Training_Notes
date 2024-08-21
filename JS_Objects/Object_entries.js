/*
The Object.entries() method returns an array of the key/value pairs of an object.

The Object.entries() method does not change the original object.
*/

const person = {
  firstName: "John",
  lastName: "Wick",
  age: 45,
  movies: "action",
};
for (let [key, value] of Object.entries(person)) {
  console.log(key, value);
}

console.log("************Object.entries()****************");

let text = Object.entries(person);

for ([key, value] of text) {
  console.log(key, value);
}

// console.log(text);

console.log("************Object.fromEntries()****************");

// The fromEntries() method creates an object from a list of key/value pairs.
'use strict'
const fruits = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500],
];

const myObj = Object.fromEntries(fruits);
console.log(myObj);
console.log(myObj.apples);
console.log(myObj.bananas);
