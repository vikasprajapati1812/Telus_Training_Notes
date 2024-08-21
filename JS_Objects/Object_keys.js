/*
The Object.keys() method returns an array with the keys of an object.
The Object.keys() method does not change the original object.
*/

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
// Getting the Keys
const keys = Object.keys(person);
console.log(keys);
//// ["firstName", "lastName", "age", "eyeColor"];



/////let make some of object properties not enumerable

const anotherPerson = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

// Change Property
Object.defineProperty(anotherPerson, "age", { enumerable: false });  //here we are putting the age property to not enumerable, so it willnot appear in the keys

// Get the Keys
const key = Object.keys(anotherPerson);
console.log(key);
//// ["firstName", "lastName", "eyeColor"];


console.log("-----------------Object.values()----------------------------");

const personTwo = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

let para = Object.values(personTwo);
console.log(para);
// ["John", "Doe", 50, "blue"];



console.log("+++++++++++++++++++++++Object.entries()+++++++++++++++++++++++++");
/*
The Object.entries() method returns an array of the key/value pairs of an object.

The Object.entries() method does not change the original object.
*/

const actor = {
  firstName: "John",
  lastName: "Wick",
  age: 45,
  movies: "action",
};
for (let [key, value] of Object.entries(actor)) {
  console.log(key, value);
}

console.log("************Object.entries()****************");

let text = Object.entries(actor);

for (let [key, value] of text) {
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
