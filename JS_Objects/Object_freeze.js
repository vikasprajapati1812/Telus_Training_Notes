
/*
The Object.freeze() method prevents any changes to an object.
The Object.freeze() method will fail silently in non-strict mode.
The Object.freeze() method will throw a TypeError in strict mode.
Frozen objects are read-only. No modification, addition or deletion of properties are allowed.

The Object.isFrozen() method can be used to check if an object is frozen.
*/

'use strict'     //if use strict  not used ,then no error will be showing .
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
Object.freeze(person);
console.log(Object.isFrozen(person));     //return the true

let text;
try {
  person.age = 51;
    text = Object.values(person);
    console.log(text);
} catch (err) {
  console.log(err);
}

