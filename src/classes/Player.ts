export default class Player {
  constructor(
    private name: string,
    public age: number,
    readonly country: string
  ) {}
  playerInfo() {
    console.log(
      `${this.name} is ${this.age} years old. He's from ${this.country}`
    );
  }
}
