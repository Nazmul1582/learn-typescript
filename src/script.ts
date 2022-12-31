// Working with Generic - typescript - lesson13

// before Generic
// const addID = (obj: object) => {
//   let id = Math.floor(Math.random() * 100);
//   return { ...obj, id };
// };
// const user = addID({
//   name: "Mashrafi",
//   age: 35,
// });

// After Generic

// const addID = <T>(obj: T) => {
//   let id = Math.floor(Math.random() * 100);
//   return { ...obj, id };
// };
// const user = addID({
//   name: "Mashrafi",
//   age: 35,
// });
// console.log(user.name);

// but the problem is:
// const addID = <T>(obj: T) => {
//     let id = Math.floor(Math.random() * 100);
//     return { ...obj, id };
//   };
//   const user = addID("Mashrafi");     // Now addID() takes also string and etc.

// Generic => more specific
// const addID = <T extends object>(obj: T) => {
//   let id = Math.floor(Math.random() * 100);
//   return { ...obj, id };
// };
// const user = addID("Mashrafi"); // Error: Argument of type 'string' is not assignable to parameter of type 'object'

// const addID = <T extends object>(obj: T) => {
//   let id = Math.floor(Math.random() * 100);
//   return { ...obj, id };
// };
// const user = addID({
//   name: "Mashrafi",
//   age: 36,
// });
// console.log(user.name);

// const addID = <
//   T extends {
//     name: string;
//     age: number;
//   }
// >(
//   obj: T
// ) => {
//   let id = Math.floor(Math.random() * 100);
//   return { ...obj, id };
// };
// const user = addID({
//   name: "Mashrafi",
//   age: 36,
// });
// console.log(user.age);

// Generic with interface

// interface APIResponse<T> {
//   status: number;
//   type: string;
//   data: T;
// }
// const response: APIResponse<object> = {
//   status: 300,
//   type: "something",
//   data: {
//     value: "something",
//     num: 150,
//   },
// };

interface APIResponse<T> {
  status: number;
  type: string;
  data: T;
}

const response: APIResponse<string> = {
  status: 200,
  type: "something",
  data: "test",
};
