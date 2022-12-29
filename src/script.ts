// How to use Functions - TypeScript - Lesson6

// let myFunc: Function;

// myFunc = () => {
//   console.log("Hello World!");
// };
// // myFunc = 50;  // Type 'number' is not assignable to type 'Function'.
// myFunc();

// const myFunc = (a: string, b: string) => {
//   console.log(`${a} and ${b} are friends`);
// };
// myFunc("Nafiz", "Fahim");
// myFunc(3, 56);  //  Argument of type 'number' is not assignable to parameter of type 'string'.

// const myFunc = (a: string, b: string, c?: number) => {
//   return `${a} and ${b} have ${c} pens `;
// };
// console.log(myFunc("Nayem", "Bayezid"));
// console.log(myFunc("Nayem", "Bayezid", 10));

// const myFunc = (a: string, b: string, c: number = 25) => {
//   return `${a} and ${b} have ${c} books`;
// };
// console.log(myFunc("Nahid", "Fahim"));
// console.log(myFunc("Nahid", "Fahim", 20));

// const add = (a: string, b: string) => {   // it's return void
//   console.log(a + b);
// };
// add("Hello ", "World!");

// const add = (a: string, b: string) => {
//   // it's return number
//   return Number(a + b);
// };
// console.log(add("4", "5"));

// const myFunc = (a: string, b: string, c: number = 10): string => {
//   // it's return string
//   return `${a} and ${b} have ${c} pens`;
// };
// console.log(myFunc("Sifat", "Nafiz"));

// const myFunc = (a: string, b: string, c: number = 10): string => {
//   // it's return number
//   return Number(`${a} and ${b} have ${c} pens`);    // Error: Type 'number' is not assignable to type 'string'.
// };
// console.log(myFunc("Sifat", "Nafiz"));
