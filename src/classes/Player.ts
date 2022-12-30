import { IsPlayer } from "../interface/IsPlayer.js";

// export default class Player implements IsPlayer {
//   constructor(
//     public name: string,
//     public age: number,
//     readonly country: string
//   ) {}

//   playerInfo() {
//     console.log(
//       `${this.name} is ${this.age} years old. He's from ${this.country}`
//     );
//   }
// }

// export default class Player implements IsPlayer {
//   constructor(
//     public name: string,
//     public age: number,
//     readonly country: string
//   ) {}
//   playerInfo() {
//     console.log(
//       `${this.name} is ${this.age} years old. He's from ${this.country}`
//     );
//   }
// }

export default class Player implements IsPlayer {
  constructor(
    public name: string,
    private age: number,
    readonly country: string
  ) {}

  getProperty() {
    return this.age;
  }
  playerInfo() {
    console.log(
      `${this.name} is ${this.age} years old. He's from ${this.country}`
    );
  }
}
