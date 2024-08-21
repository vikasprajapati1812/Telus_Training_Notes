'use strict'
const person = {
  firstName: "John",
  lastName: "Doe",
};
Object.defineProperties(person, {
  language: { value: "en" },
  year: { value: "Hello" },
});

console.log(person);
console.log(person.language);
