// Interfaces  - TypeScript - Lesson12

import Player from "./classes/Player.js";
import { IsPlayer } from "./interface/IsPlayer.js";

const mashrafi = new Player("Mashrafi", 36, "Bangladesh");
let sakib: IsPlayer;
sakib = new Player("Sakib", 35, "Bangladesh");

const players: IsPlayer[] = [];
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
