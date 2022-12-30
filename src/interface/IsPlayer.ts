// export interface IsPlayer {
//   name: string;
//   age: number;
//   country: string;

//   playerInfo(): void;
// }

export interface IsPlayer {
  name: string;
  readonly country: string;

  getProperty(): number;
  playerInfo(): void;
}
