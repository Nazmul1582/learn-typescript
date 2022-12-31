// Tuple - typescript - lesson15

const a = ["Anis", 20, { country: "Bangladesh" }];
// this all are possible
a[0] = 100; // replaced string("Anis") by number(100)
a[1] = "Hello"; // replaced number(20) by string("Hello")
a[2] = "Bangladesh"; // replaced object by string("Bangladesh")
console.log(a);

// but replacing any property of a by other type is impossible.
// a[0] = true; // Error: Type 'boolean' is not assignable to type 'string | number | { country: string; }'.
// using tuple:
const b: [string, number, object] = ["Yeasin", 35, { country: "BD" }];
b[0] = "Abdullah";
// b[0] = 25; // Error: Type 'number' is not assignable to type 'string'.
console.log(b);
