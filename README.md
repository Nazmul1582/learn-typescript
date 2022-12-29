<br />
 <p align="center">
    <h1 align="center"> TypeScript Editor Setup & Compilation - Lesson2 </h1>
</p>

<!-- TABLE OF CONTENTS -->

### Table of Contents

- [Editor Setup & Compilation](#editor-setup--compilation)

## Editor Setup & Compilation

1. Write a `index.html` file and a `script.js` file
2. Now linked the `script.js` file in the `index.html`
3. Typescript JavaScript ই। তাই আমরা typescript ফাইলে যেকোনো valid JavaScript code লিখলে সেটা valid TypeScript code হবে। Write some JavaScript code (like: `console.log("Hello World!");`) in `script.js`
4. Now see the output in browser. But ব্রাউজারে আউটপুট দেখাচ্ছে না। কারণ আমার `index.html` ফাইলে লিংক করা আছে `script.js`, এবং আমার ব্রাউজার বুঝতে পারে শুধু `.js`, `.ts` বুঝতে পারে না। So, আমাদেরকে some how `.ts` টাকে কম্পাইল করে js এ কনভার্ট করে দিতে হবে। সেই কাজটাই করে দিবে আমাদের typescript (tsc) কম্পাইলারটা।
   So, write `tsc script.ts` in terminal and hit enter. Then see the output.
5. TypeScript vanilla JavaScript এ convert হয়
6. এখন আমরা একটা TypeScript প্রজেক্ট initialize করব। সেজন্য `tsc –init` commad দিব তাহলে `tsconfig.json` নামে একটা ফাইল তৈরি হবে। `tsconfig.json` ফাইলটা হচ্ছে ট্রান্সক্রিপ্টের কনফিগারেশন ফাইল। এ ফাইলটা typescript কম্পাইলার রিড করতে পারে। এবং সেখানে বিভিন্ন ধরনের configuration variable বলে দেওয়া আছে।
7. Modify input directory => `"rootDir": "./src"` in compilerOptions of `tsconfig.json`
8. Modify input directory => `"outDir": "./output"` in compilerOptions of `tsconfig.json`
9. Now write command only `tsc` ( not need `tsc fileName`).
10. tsc -w command for watch mode. (like nodemon package of node.js)
