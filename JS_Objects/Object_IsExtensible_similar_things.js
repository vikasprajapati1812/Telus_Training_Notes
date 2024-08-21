/*
    Object.preventExtensions() allows modifications, but prevents addition of properties.
    Object.isExtensible() returns true if an object is extensible.
    
    
    Object.seal() allows modifications, but prevents additions and deletions of properties.
    Object.isSealed() returns true if an object is sealed.
    
    Object.freeze() prevents modifications, additions and deletions of properties.
    Object.isFrozen() returns true if an object is frozen.

*/
'use strict'
console.log("-----------------Extensible-------------------");

const person = { firstName: "John", lastName: "Doe" };
console.log(Object.isExtensible(person));

Object.preventExtensions(person);
console.log(Object.isExtensible(person));
try {
    person.nationality = "English";
    console.log("Property can be added after the preventEntension");
    console.log(person);
}
catch (error) {
    console.log("property can't be added ");    
}


/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];
Object.preventExtensions(fruits);

fruits.push("Kiwi");                // This will throw an error:
*/
/////////////////////////Sealed//////////////////
console.log("-----------------Sealed-------------------");

const anotherPerson = { firstName: "John", lastName: "Doe" };
console.log(Object.isSealed(anotherPerson));
Object.seal(anotherPerson);
console.log(Object.isSealed(anotherPerson));


console.log("-----------------Freeze-------------------");

const freezePerson = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

// Freeze Object
Object.freeze(freezePerson);
console.log("Freeze=>",Object.isFrozen(freezePerson));

// Test Error
let text1;
try {
  person.age = 51;
  text1 = Object.values(freezePerson);
} catch (err) {
  text1 = err;
}
console.log(text1);    ////TypeError: Cannot add property age, object is not extensible