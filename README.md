<br />
 <p align="center">
    <h1 align="center"> Working with Class - TypeScript - Lesson9 </h1>
</p>

<!-- TABLE OF CONTENTS -->

### Table of Contents

- [Classes - TypeScript](#classes---typescript)

## Classes - TypeScript

```typescript
class Player {
  name: string;
  age: number;
  country: string;
  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }
  info() {
    console.log(
      `${this.name} is ${this.age} years old and he comes from ${this.country}`
    );
  }
}
const mashrafi = new Player("Mashrafi", 36, "Bangladesh");
const sakib = new Player("Sakib", 35, "Bangladesh");
console.log(sakib);

// here we can access and re-assign object's properties;
console.log(sakib.age);
sakib.age = 34;
console.log(sakib);
```

```typescript
class Player {
  name: string;
  age: number;
  country: string;
  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }
  info() {
    console.log(
      `${this.name} is ${this.age} years old and he comes from ${this.country}`
    );
  }
}
const mashrafi = new Player("Mashrafi", 36, "Bangladesh");
const sakib = new Player("Sakib", 35, "Bangladesh");

let players: Player[] = [];
// players.push("Sakib");  //  Argument of type 'string' is not assignable to parameter of type 'Player'.
players.push(mashrafi);
players.push(sakib);

console.log(players);
```

<br/>
