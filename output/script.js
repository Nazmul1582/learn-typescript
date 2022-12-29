"use strict";
// strict type checking
// ============== for variable ===============
// // (1) ============
// let playerName = "Mashrafi";
// let age = 35
// console.log(playerName);
// // playerName = 34; // Type 'number' is not assignable to type 'string'
// age = 'sakib'   // Type 'string' is not assignable to type 'number'
// // playerName = true;   // Type 'boolean' is not assignable to type 'string'.
// // (2) ===========
// var num = 20;
// // num = num - '10'; // here 10 show's error!
// console.log(num);
// // (3) =========
// let isValid = true;
// // isValid = "false"; // Type 'string' is not assignable to type 'boolean'
// let playerName;     // here playerName is undefined. So, it's type is 'any'. and it's possibile to re-assign
// console.log(playerName);
// playerName = "Mashrafi";    // no error
// playerName = 35;    // no error
// console.log(playerName);
// ============== for function ===================
// function sum(a, b) {
//   // Parameter 'a' and 'b' implicitly have an 'any' type
//   return a + b;
// }
// console.log(sum(5, 10));
// function multiply(a, b) {
//   return a * b;
// }
// console.log(multiply("sakib", 5));
// function multiply(a: number, b: number) {
//   return a * b;
// }
// console.log(multiply("abc", 6));        // Argument of type 'string' is not assignable to parameter of type 'number'.
// ============== for array ===================
// const fruits = ["apple", "banana"];
// fruits.push("pineapple");
// console.log(fruits);
// const fruits = ["apple", "banana"]; // here fruits type is string. So, it's not take other type of property
// fruits.push(35); // Argument of type 'number is not assignable to parameter of type 'string'
// console.log(fruits);
// const arr = []; // type any
// arr.push("Bangladesh");
// arr.push(150);
// arr.push(false);
// arr.push(undefined);
// console.log(arr);
// const arr = ["hello", 12, true]; // here type is 'string | number | boolean'.
// arr.push("Sakib");
// arr.unshift(100);
// arr.push({ a: 5, b: 10 });  // Argument of type '{ a: number; b: number; }' is not assignable to parameter of type 'string | number | boolean'.
// console.log(arr);
// ============== for object ===================
// const player = {
//   // here player is player={name: string, age: number, isCaptain: boolean}
//   name: "Mashrafi",
//   age: 35,
//   isCaptain: true,
// };
// // player.age = "thirty-five"; // Type 'string' is not assignabe to type 'number'
// player.address = "Magura";    // Property 'address' does not exist on type '{ name: string; age: number; isCaptain: boolean; }'
// const obj = {};
// obj.name = "Fahim"; // Property name does not exist on type {},
