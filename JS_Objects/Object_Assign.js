// The Object.assign() method copies properties from one or more source objects to a target object.
//// Object.assign(target, source(s));

/*
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

const person2 = { firstName: "Anne", lastName: "Smith" };
Object.assign(person1, person2);
console.log(person1)
*/


/////////Object.create()   /////////
// The Object.create() creates an object from an existing object.
// Object.create(object, properties);

const person4 = {
  firstName: "John",
  lastName: "Doe",
  language: "EN",
};

// Create new Object
const man = Object.create(person4);    //creates only a empty objects,not copying inside values;
console.log(man);
man.firstName = "Peter";     //here assigning the first property to man object
console.log(man);