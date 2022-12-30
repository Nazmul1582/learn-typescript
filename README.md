<br />
 <p align="center">
    <h1 align="center"> Interfaces - TypeScript - Lesson12 </h1>
</p>

<!-- TABLE OF CONTENTS -->

### Table of Contents

- [Interfaces](#interfaces)

## Interfaces

1.

```typescript
interface rectangleOptions {
  length: number;
  width: number;
}

const drawRectangle = (options: rectangleOptions) => {
  let length = options.length;
  let width = options.width;
  console.log(length, width);
};

drawRectangle({
  length: 30,
  width: 20,
  height: 10, // error: bcz height is invalid in rectangleOptions
});
```

2.

```typescript
interface rectangleOptions {
  length: number;
  width: number;
}

const drawRectangle = (options: rectangleOptions) => {
  let length = options.length;
  let width = options.width;
  console.log(length, width);
};

const threeDOption = {
  length: 30,
  width: 20,
  height: 10,
};
drawRectangle(threeDOption);
```

3. Make interface in ./interface/IsPlayer.ts file and implements in ./classes/Player.ts file

```typescript
// ./interface/IsPlayer.ts
export interface IsPlayer {
  name: string;
  age: number;
  country: string;
  play(): void;
}

// ./classes/Player.ts
import { IsPlayer } from "../interface/IsPlayer.js";

export default class Player implements IsPlayer {
  constructor(
    public name: string,
    public age: number,
    readonly country: string
  ) {}

  playerInfo() {
    console.log(
      `${this.name} is ${this.age} years old. He's from ${this.country}`
    );
  }
}
```

4.

```typescript
// ./interface/IsPlayer.ts
export interface IsPlayer {
  name: string;
  age: number;
  country: string;
  playerInfo(): void;
}

// ./srcipt.ts
import Player from "./classes/Player.js";
import { IsPlayer } from "./interface/IsPlayer.js";

const mashrafi = new Player("Mashrafi", 36, "Bangladesh");
let sakib: IsPlayer;
sakib = new Player("Sakib", 35, "Bangladesh");
```

5.

```typescript
// ./interface/IsPlayer.ts
export interface IsPlayer {
  name: string;
  age: number;
  country: string;
  playerInfo(): void;
}

// ./script.ts
import Player from "./classes/Player.js";
import { IsPlayer } from "./interface/IsPlayer.js";

const mashrafi = new Player("Mashrafi", 36, "Bangladesh");
let sakib: IsPlayer;
sakib = new Player("Sakib", 35, "Bangladesh");

const players: IsPlayer[] = [];
players.push(mashrafi, sakib);
console.log(players);
```

6.

```typescript
// ./interface/IsPlayer.ts
export interface IsPlayer {
  name: string;
  readonly country: string;

  getProperty(): number;
  playerInfo(): void;
}

// ./classes/Player.ts
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
```

<br/>
