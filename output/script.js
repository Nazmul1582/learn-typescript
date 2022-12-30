// Module System - TypeScript - Lesson11
import Player from "./classes/Player.js";
const mashrafi = new Player("Mashrafi", 36, "Bangladesh");
const sakib = new Player("Shakib", 35, "Bangladesh");
console.log(mashrafi.age);
console.log(mashrafi.country);
const players = [];
players.push(mashrafi, sakib);
console.log(players);
