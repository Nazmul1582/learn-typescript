<br />
 <p align="center">
    <h1 align="center"> Explicit & Union Types - TypeScript - Lesson4 </h1>
</p>

<!-- TABLE OF CONTENTS -->

### Table of Contents

- [Explicit & Union Types](#explicit--union-types)
  - [Explicit & Union Types for variable](#explicit--union-types-for-variable)
  - [Explicit & Union Types for function](#explicit--union-types-for-function)
  - [Explicit & Union Types for array](#explicit--union-types-for-array)
  - [Explicit & Union Types for object](#explicit--union-types-for-object)

## Explicit & Union Types

### Explicit & Union Types for variable

```typescript
let a: number;
a = 10;
a = "Bangla"; // Type 'string' is not assignable to type 'number
console.log(a);
```

```typescript
let b: string;
// b = 100;         // type number is not assignable to type string
b = "Bangladesh";
console.log(b);
```

```typescript
let c: string | number;
c = "Hello";
c = 15;
// c = true; // type boolean is not assignable to type (string | number)
```

## Explicit & Union Types for function

```typescript
function sum(a: number, b: number) {
  return a * b;
}
console.log(sum(10, 20));
```

```typescript
function greet(name: string, greeting: string) {
  return `${greeting}, ${name}! `;
}
console.log(greet("Nafiz", "Good morging"));
```

## Explicit & Union Types for Array

```typescript
let a: string[] = [];
a.push("Bangladesh");
// a.push(50); //  Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(a);
```

```typescript
const a: number[] = [];
a.push("Banana"); // Type 'string' is not assignable to type 'number
```

```typescript
let a: string[];
a = ["Bangla"];
a.push("English");
a.push(20); //  Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(a);
```

### Union Type

```typescript
let a: (string | number)[] = [];
a.push("Bangladesh");
a.push(1971);
a.push(Boolean); // Argument of type 'BooleanConstructor' is not assignable to parameter of type 'string | number'.
```

```typescript
const b: (string | number)[] = [];
b.push("Nazmul", 24, true); // // Argument of type 'true' is not assignable to parameter of type 'string | number'.
```

## Explicit & Union Types for Object

```typescript
let c: object;
c = 5; // Type 'number' is not assignable to type 'object'.
c = "Nazmul"; // Type 'string' is not assignable to type 'object'.
c = [1, 2, "three", true]; // work perfectlly. because javascript array is a kind of object.
c = {};
c = {
  name: "Nazmul",
  age: 24,
};
console.log(c);
```

```typescript
let c: {
  name: string;
  age: number;
  adult: boolean;
};

c = {
  name: "Nazmul", // Type '{ name: string; }' is missing the following properties from type '{ name: string; age: number; adult: boolean; }': age, adult
};
```

```typescript
c = {
  name: "Nazmul",
  age: 24,
  //   adult: "yes", // error
  adult: true,
  //   address: "Cumilla", // Object literal may only specify known properties, and 'address' does not exist in type '{ name: string; age: number; adult: boolean; }'.
};
console.log(c);
```
