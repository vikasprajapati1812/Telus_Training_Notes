const person = {
  firstName: "ABC",
  lastName: "DEF",
  age: 55,
  eyeColor: "blue",
};
let text = person.constructor;
console.log(text);

////Result :  return the Function Object
// The constructor property returns the function that created the Object prototype.
// function Object() { [native code] }
