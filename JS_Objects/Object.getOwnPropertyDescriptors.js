/*
Object.defineProperty() adds or changes one property.
Object.defineProperties() adds or changes many properties.


Object.getOwnPropertyNames() returns the property names of an object.
Object.getOwnPropertyDescriptor() returns the descriptor of a property.
Object.getOwnPropertyDescriptors() returns the descriptors of all properties.
*/
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

// Get Properties
/*
let descriptor = Object.getOwnPropertyDescriptor(person);
console.log(descriptor.firstName);
console.log(descriptor.lastName);
console.log(descriptor.age);
console.log(descriptor.eyeColor);
console.log(descriptor.enumerable);
console.log(descriptor.writable);
console.log(descriptor.configurable);
*/
///// Result of All consoles: TypeError: Cannot read properties of undefined (reading 'firstName')

// Get Properties
let descriptors = Object.getOwnPropertyDescriptor(person, "age"); // for the result you have to define the second parameter as  any "key Name"of the "Object"  // here it is given "age", to get this value have to write  descriptors.value intead of descriptors.age

// console.log(descriptors.value);
// console.log(descriptors.age);

// /*
// console.log(descriptor.firstName);
// console.log(descriptor.lastName);
// console.log(descriptors.eyeColor);
// */
// //All above three value will be undefined

// console.log(descriptors.enumerable);
// console.log(descriptors.writable);
// console.log(descriptors.configurable);

////To get the Whole property descriptotrs at the Once .... then use the  getOwnPropertyDescriptors()

const anotherPerson = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

let descript = Object.getOwnPropertyDescriptors(anotherPerson);
console.log(descript.firstName);
console.log(descript.lastName);
console.log(descript.age);
console.log(descript.eyeColor);



/*
Object.getOwnPropertyNames

The Object.getOwnPropertyNames() method returns an "array" with the properties of an object.
The Object.getOwnPropertyNames() method "does not change the original object".
*/

const personOne = {
  firstName: "Harry",
  lastName: "Brooke",
  age: 50,
  eyeColor: "brown",
};

let props = Object.getOwnPropertyNames(personOne)
console.log(props[0]);
console.log(props[1]);
console.log(props[2]);
console.log(props[3]);