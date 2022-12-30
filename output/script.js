"use strict";
// Access modifier - typescript
// class Player {
//   name: string;
//   age: number;
//   country: string;
//   constructor(n: string, a: number, c: string) {
//     this.name = n;
//     this.age = a;
//     this.country = c;
//   }
//   info() {
//     console.log(
//       `${this.name} is ${this.age} years old and he's from ${this.country}`
//     );
//   }
// }
// const mashrafi = new Player("Mashrafi", 36, "Bangladesh");
// mashrafi.name = "Sakib";
// mashrafi.age = 40;
// mashrafi.country = "England";
// console.log(mashrafi.name);
// console.log(mashrafi.age);
// console.log(mashrafi.country);
// class Player {
//   private name: string;
//   public age: number;
//   readonly country: string;
//   constructor(n: string, a: number, c: string) {
//     this.name = n;
//     this.age = a;
//     this.country = c;
//   }
//   info() {
//     console.log(
//       `${this.name} is ${this.age} years old and he's from ${this.country}`
//     );
//   }
// }
// const mashrafi = new Player("Mashrafi", 36, "Bangladesh");
// private property can't access and re-assign outside of class.
// // mashrafi.name = "Sakib";  // Property 'name' is private and only accessible within class 'Player'.
// // console.log(mashrafi.name);  // Property 'name' is private and only accessible within class 'Player'.
// mashrafi.age = 40;
// console.log(mashrafi.age);
// // mashrafi.country = "England"; // Cannot assign to 'country' because it is a read-only property.
// console.log(mashrafi.country);
class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    playerInfo() {
        console.log(`${this.name} is ${this.age} years old and he's from ${this.country}`);
    }
}
const mashrafi = new Player("Mashrafi", 36, "Bangladesh");
mashrafi.age = 40;
console.log(mashrafi.age);
// private property can't access and re-assign outside of class.
// mashrafi.name = "Shakib"; // Property 'name' is private and only accessible within class 'Player'.
// console.log(mashrafi.name); // Property 'name' is private and only accessible within class 'Player'.
// readonly property can access from anywhere but can't re-assign
// mashrafi.country = "England"; // Cannot assign to 'country' because it is a read-only property.
console.log(mashrafi.country);
