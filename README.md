<br />
 <p align="center">
    <h1 align="center"> Tuple - TypeScript - Lesson15 </h1>
</p>

<!-- TABLE OF CONTENTS -->

### Table of Contents

- [Tuple](#tuple)
  - [Without tuple](#without-tuple)
  - [Using tuple](#using-tuple)

## Tuple

### Without tuple

```typescript
const a = ["Anis", 20, { country: "Bangladesh" }];
// this all are possible
a[0] = 100; // replaced string("Anis") by number(100)
a[1] = "Hello"; // replaced number(20) by string("Hello")
a[2] = "Bangladesh"; // replaced object by string("Bangladesh")
console.log(a);

// but replacing any property of a by other type is impossible.
// a[0] = true; // Error: Type 'boolean' is not assignable to type 'string | number | { country: string; }'.
```

### Using tuple

```typescript
// here, array's type of index have to fixed.
const b: [string, number, object] = ["Sakib", 35, { country: "BD" }];
b[0] = "Abdullah";
b[0] = 25; // Error: Type 'number' is not assignable to type 'string'.
console.log(b);
```

<br/>
