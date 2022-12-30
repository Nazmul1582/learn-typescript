export default class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    playerInfo() {
        console.log(`${this.name} is ${this.age} years old. He's from ${this.country}`);
    }
}
