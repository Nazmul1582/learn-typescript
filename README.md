<br />
 <p align="center">
    <h1 align="center"> How to use Functions - TypeScript - Lesson6 </h1>
</p>

<!-- TABLE OF CONTENTS -->

### Table of Contents

- [Function Type](#function-type)
- [Function Parameter](#function-parameter)
- [Optional Parameter](#optional-parameter)
- [ Default Parameter](#default-parameter)
- [Return Type](#return-type)
- [Explicit Return Type](#explicit-return-type)

## Function Type

```typescript
let myFunc: Function;

myFunc = () => {
  console.log("Hello World!");
};
myFunc = 50; // Error: Type 'number' is not assignable to type 'Function'.
myFunc();
```

## Function Parameter

```typescript
const myFunc = (a: string, b: string) => {
  console.log(`${a} and ${b} are friends`);
};
myFunc("Nafiz", "Fahim");
myFunc(3, 56); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
```

## Optional Parameter

```typescript
const myFunc = (a: string, b: string, c?: number) => {
  return `${a} and ${b} have ${c} pens `;
};
console.log(myFunc("Nayem", "Bayezid"));
console.log(myFunc("Nayem", "Bayezid", 10));
```

## Default Parameter

```typescript
const myFunc = (a: string, b: string, c: number = 25) => {
  return `${a} and ${b} have ${c} books`;
};
console.log(myFunc("Nahid", "Fahim"));
console.log(myFunc("Nahid", "Fahim", 20));
```

## Return Type

```typescript
const add = (a: string, b: string) => {
  // it's return void
  console.log(a + b);
};
add("Hello ", "World!");
```

```typescript
const add = (a: string, b: string) => {
  // it's return number
  return Number(a + b);
};
console.log(add("4", "5"));
```

## Explicit Return Type

```typescript
const myFunc = (a: string, b: string, c: number = 10): string => {
  // it's return string
  return `${a} and ${b} have ${c} pens`;
};
console.log(myFunc("Sifat", "Nafiz"));
```

```typescript
const myFunc = (a: string, b: string, c: number = 10): string => {
  // it's return number
  return Number(`${a} and ${b} have ${c} pens`); // Error: Type 'number' is not assignable to type 'string'.
};
console.log(myFunc("Sifat", "Nafiz"));
```
