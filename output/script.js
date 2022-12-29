"use strict";
// Explicit & Union Types - TypeScript
// ============= variable ================
// let a: number;
// a = 10;
// a = "Bangla";        // Type 'string' is not assignable to type 'number
// console.log(a);
// let b: string;
// // b = 100;         // type number is not assignable to type string
// b = "Bangladesh";
// console.log(b);
// let c: string | number;
// c = "Hello";
// c = 15;
// // c = true; // type boolean is not assignable to type (string | number)
// ========== array ===========
// let a: string[] = [];
// a.push("Bangladesh");
// // a.push(50); //  Argument of type 'number' is not assignable to parameter of type 'string'.
// console.log(a);
// const a:number[] = [];
// a.push("Banana"); // Type 'string' is not assignable to type 'number
// let a: string[];
// a = ["Bangla"];
// a.push("English");
// a.push(20); //  Argument of type 'number' is not assignable to parameter of type 'string'.
// console.log(a);
// union type ===========
// let a: (string | number)[] = [];
// a.push("Bangladesh");
// a.push(1971);
// a.push(Boolean); // Argument of type 'BooleanConstructor' is not assignable to parameter of type 'string | number'.
// const b: (string | number)[] = [];
//  b.push("Nazmul", 24, true); // // Argument of type 'true' is not assignable to parameter of type 'string | number'.
//  =========== object ===========
// let c: object;
// // c = 5; // Type 'number' is not assignable to type 'object'.
// // c = "Nazmul";   // Type 'string' is not assignable to type 'object'.
// // c = [1, 2, "three", true];  // work perfectlly. because javascript array is a kind of object.
// // c = {};
// c = {
//   name: "Nazmul",
//   age: 24,
// };
// console.log(c);
let c;
// c = {
//   name: "Nazmul", // Type '{ name: string; }' is missing the following properties from type '{ name: string; age: number; adult: boolean; }': age, adult
// };
c = {
    name: "Nazmul",
    age: 24,
    //   adult: "yes", // error
    adult: true,
    //   address: "Cumilla", // Object literal may only specify known properties, and 'address' does not exist in type '{ name: string; age: number; adult: boolean; }'.
};
console.log(c);
function sum(a, b) {
    return a * b;
}
console.log(sum(10, 20));
function greet(name, greeting) {
    return `${greeting}, ${name}! `;
}
console.log(greet("Nafiz", "Good morging"));
