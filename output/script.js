"use strict";
// Working with class - typescript - lesson9
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    info() {
        console.log(`${this.name} is ${this.age} years old and he comes from ${this.country}`);
    }
}
const mashrafi = new Player("Mashrafi", 36, "Bangladesh");
const sakib = new Player("Sakib", 35, "Bangladesh");
console.log(sakib);
// here we can access and re-assign object's properties;
console.log(sakib.age);
sakib.age = 34;
console.log(sakib);
// let players: string[] = [];
let players = [];
// players.push("Sakib");  //  Argument of type 'string' is not assignable to parameter of type 'Player'.
players.push(mashrafi);
players.push(sakib);
console.log(players);
