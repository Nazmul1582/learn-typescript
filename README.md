<br />
 <p align="center">
    <h1 align="center"> Function Signatures - TypeScript - Lesson8 </h1>
</p>

<!-- TABLE OF CONTENTS -->

### Table of Contents

- [Function Signatures](#function-signatures)

## Function Signatures

```javascript
let myFunc: () => void;

// এটা হলো function signature. মানে function টা পরবর্তীতে কিভাবে use করতে হবে সেটা বলে দেওয়া। function টির parameter এ কি কি থাকবে এবং ফাংশানটি কি return করবে (return type) সেটা function signature এ বলে দেওয়া হয়।
```

```javascript
let myFunc: () => void;

let myFunc: (a: string, b: number) => number;
// এই ফাংশানটি ২টা parameter(a:string and b:number) নিবে এবং  return  করবে number
```

```typescript
let add: (a: number, b: number) => number; // this is the signature of add() function
add = (num1, num2) => {
  console.log(num1 + num2);
};
add(3, 4); // Error: Type 'void' is not assignable to type 'number'. এখানে return করার কথা ছিল number. কিন্তু return করেছে void
```

```typescript
let add: (a: number, b: number) => number; // this is the signature of add() function
add = (num1, num2) => {
  return num1 + num2;
};
console.log(add(5, 10));
```

```typescript
let calculator: (a: number, b: number, z: string) => number;

calculator = (num1: number, num2: number, condition: string) => {
  if (condition === "add") {
    return num1 + num2;
  } else {
    // here else block don't return anything. So, it makes an error!
  }
};
console.log(calculator(20, 15, "add"));
```

```typescript
let calculator: (a: number, b: number, z: string) => number;

calculator = (num1: number, num2: number, condition: string) => {
  if (condition === "add") {
    return num1 + num2;
  } else {
    return num1 - num2;
  }
};
console.log(calculator(20, 15, "minus")); // now it's working
```

```typescript
let userDetails: (
  id: number | string,
  userInfo: { name: string; age: number }
) => void;

userDetails = (
  userId: string | number,
  userInfo: { username: string; age: number } // Error:  here parameter's name can be changed. but property name of object parameter can't be changed
) => {};
```

```typescript
let userDetails: (
  id: number | string,
  userInfo: { name: string; age: number }
) => void;

userDetails = (
  userId: string | number,
  user: { name: string; age: number }
) => {};
```
