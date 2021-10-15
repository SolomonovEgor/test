"use strict";

const person = {
  firstName: "Jack",
  lastName: "Sparrow",
  age: 25,
  location: "Caribbean sea",
};

for (let [key, value] of Object.entries(person))
  console.log(`<${key}> : <${value}>`);

for (let [key, value] of Object.entries(person)) {
  if (key == "firstName") console.log(`First name: ${value}`);
  if (key == "lastName") console.log(`Last name: ${value}`);
  if (key == "age") console.log(`Age: ${value}`);
  if (key == "location") console.log(`Where to find: ${value}`);
}
