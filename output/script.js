// Interfaces  - TypeScript - Lesson12
import Player from "./classes/Player.js";
const mashrafi = new Player("Mashrafi", 36, "Bangladesh");
let sakib;
sakib = new Player("Sakib", 35, "Bangladesh");
const players = [];
players.push(mashrafi, sakib);
console.log(players);
// interface rectangleOptions {
//   length: number;
//   width: number;
// }
// const drawRectangle = (options: rectangleOptions) => {
//   let length = options.length;
//   let width = options.width;
//   console.log(length, width);
// };
// const threeDOption = {
//   length: 30,
//   width: 20,
//   height: 10,
// };
// drawRectangle(threeDOption);
