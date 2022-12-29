"use strict";
// Type Aliases - TypeScript - Lesson7
// without using type aliases
const userDetails = (id, user) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
};
userDetails(101, { name: "Saikat", age: 24 });
const sayHello = (user) => {
    console.log(`Hello, ${user.age > 50 ? "Sir" : "Mr."} ${user.name}!`);
};
sayHello({ name: "Sakil", age: 27 });
