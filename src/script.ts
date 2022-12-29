// Type Aliases - TypeScript - Lesson7
// without using type aliases

// const userDetails = (
//   id: number | string,
//   user: { name: string; age: number }
// ) => {
//   console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
// };
// userDetails(5, { name: "Saikat", age: 24 });

// const sayHello = (user: { name: string; age: number }) => {
//   console.log(`Hello, ${user.age > 50 ? "Sir" : "Mr."} ${user.name}!`);
// };
// sayHello({ name: "Samim", age: 25 });

// using type aliases
type stringOrNum = string | number;
type userType = { name: string; age: number };

const userDetails = (id: stringOrNum, user: userType) => {
  console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
};
userDetails(101, { name: "Saikat", age: 24 });

const sayHello = (user: userType) => {
  console.log(`Hello, ${user.age > 50 ? "Sir" : "Mr."} ${user.name}!`);
};
sayHello({ name: "Sakil", age: 27 });
