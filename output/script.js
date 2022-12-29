"use strict";
// Lesson 5 - Dynamic Type - TypeScript - Lesson5
// ============= variable ================
// let a;
// a = "Bangladesh";
// a = 123;
// a = true;
// console.log(a);
// let a: any;
// a = "Saikat";
// a = 24;
// a = true;
// console.log(a);
// ========== function ===========
// const myFunc = (a: any) => {
//   return `type of '${a}' is a ${typeof a}`;
// };
// console.log(myFunc(3));
// console.log(myFunc("Mother"));
// console.log(myFunc(false));
// ========== array ===========
const arr = [];
arr.push("fruits", 120, true, null);
console.log(arr);
//  =========== object ===========
let c;
c = {
    name: "Saikat",
    age: 24,
    isMarried: false,
};
console.log(c);
