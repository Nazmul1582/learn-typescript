<br />
 <p align="center">
    <h1 align="center"> TypeScript Editor Setup & Compilation - Lesson2 </h1>
</p>

<!-- TABLE OF CONTENTS -->

### Table of Contents

- [Editor Setup & Compilation](#editor-setup--compilation)

## Editor Setup & Compilation

1. Write a index.html file and a script.js file
2. Now linked the script.js file in the index.html
3. Typescript JavaScript ই। তাই আমরা typescript ফাইলে যেকোনো valid JavaScript code লিখলে সেটা valid TypeScript code হবে। Write some JavaScript code (like: console.log("Hello World!");) in script.js

4. Now see the output in browser. But ব্রাউজারে আউটপুট দেখাচ্ছে না। কারণ আমার index.html ফাইলে লিংক করা আছে script.js, এবং আমার ব্রাউজার বুঝতে পারে শুধু .js, .ts বুঝতে পারে না। So, আমাদেরকে some how .ts টাকে কম্পাইল করে js এ কনভার্ট করে দিতে হবে। সেই কাজটাই করে দিবে আমাদের typescript (tsc) কম্পাইলারটা।
   So, write `tsc script.ts` in terminal and hit enter. Then see the output.
