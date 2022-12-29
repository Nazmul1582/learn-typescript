<br />
 <p align="center">
    <h1 align="center"> Dynamic Type or any Type - TypeScript - Lesson5 </h1>
</p>

<!-- TABLE OF CONTENTS -->

### Table of Contents

- [Dynamic Type](#dynamic-type)
  - [Variable](#variable)
  - [Function](#function)
  - [Array](#array)
  - [Union Type](#union-type)
  - [Object](#object)

## Dynamic Type

### Variable

```typescript
let a;
a = "Bangladesh";
a = 123;
a = true;
console.log(a);
```

```typescript
let a: any;
a = "Saikat";
a = 24;
a = true;
console.log(a);
```

## Function

```typescript
const myFunc = (a: any) => {
  return `type of '${a}' is a ${typeof a}`;
};
console.log(myFunc(3));
console.log(myFunc("Mother"));
console.log(myFunc(false));
```

## Array

```typescript
const arr: any[] = [];
arr.push("fruits", 120, true, null);
console.log(arr);
```

## Object

```typescript
let c: {
  name: any;
  age: any;
  isMarried: any;
};

c = {
  name: "Saikat",
  age: 24,
  isMarried: false,
};
console.log(c);
```
