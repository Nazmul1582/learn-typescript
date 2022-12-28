<br />
 <p align="center">
    <h1 align="center"> TypeScript Introduction and Installation</h1>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [TypeScript](#typescript)
  - [What is typescript?](#what-is-typescript)
  - [What's wrong with JavaScript?](#whats-wrong-with-javascript)
  - [Benefits of typescript](#benefits-of-typescript)
  - [Installing typescript](#installing-typescript)

# TypeScript

## What is typescript?

1. TypeScript is a superset of JavaScript created by Microsoft.
2. TypeScript allows static strict typing
3. Extra features - interfaces, enums, tuples, generics
4. typescript supports modern features (arrow functions, let, const)
5. Typescript is based on the .NET harmony specification.

**What is typescript?**

- (i) Typescript is a superset of JavaScript created by Microsoft.
  superset মানে কোন একটা জিনিস আছে, তার সাথে যদি আরও কিছু এড করে একটা বড় জিনিস তৈরি করা হয়, তাহলে বড় জিনিসটাকে ছোট জিনিসটা সুপারসেট বলা হয়। So, typescript এর মধ্যে JavaScript আসলে আছে। JavaScript এর সাথে আরো কিছু জিনিস যোগ করে typescript তৈরি হয়েছে।

- (ii) typescript JavaScript এ type এড করে দিয়েছে। static strict typing add করে দিয়েছে। JavaScript এ variable লেখার সময় আমরা type বলে দেই না। এটা না বলার কারণে enterprise level application এ বেশ কিছু প্রবলেমের সম্মুখীন হতে হয়। typescript আমাদেরকে এই প্রবলেমটা solve করে দিয়েছে। জাবাস্ক্রিপ্টে type এনে দিয়েছে। যার কারণে এর নামও দেওয়া হয়েছে typescript.

- (iii) আরো কিছু এক্সট্রা ফিচারস - interfaces, enums, tuples, generics (যেগুলো জাবাস্ক্রিপ্টে নাই অন্যান্য প্রোগ্রামিং ল্যাঙ্গুয়েজে আছে) এই জিনিসগুলো typescript জাভাস্ক্রিপ্টে এনে দিয়েছে।

- (iv) typescript modern features(arrow functions, let, const) গুলো সাপোর্ট করে। এই জিনিসগুলো কিন্তু অনেক older ব্রাউজার এখনো সাপোর্ট করে না।
  আমাদের ব্রাউজার কিন্তু typescript বুঝতে পারে না। typescript some how JavaScript এ compile হয়। তার মানে typescript একটা programming language তো বটেই তার সাথে সাথে এটা একটা কম্পাইলারও। typescript compiler ultimately JavaScript এ convert হয়, যেটা সমস্ত ব্রাউজার বুঝতে পারে।

- (v) Typescript is based on the .NET harmony specification.

## What's wrong with JavaScript?

1. JavaScript is not suitable for large applications.
2. Lacks strong typing
3. Weird inheritance, unfamiliar sytax
4. Only errors during runtime.
5. Suffers type coercior

**What's wrong with JavaScript?**

- (i) সবচেয়ে বড় যে প্রবলেমটা ছিল সেটা হল JavaScript is not suitable for large applications. because JavaScript was designed to develop web applications.
- (ii) JavaScript এ strong typing ছিলনা।
- (iii) অন্যান্য ল্যাঙ্গুয়েজ থেকে আশা ডেভলপাররা কিছু weird behavior দেখত। (weird inheritanc, Unfamiliar syntax)
- (iv) Only errors during runtime. জাভাস্ক্রিপ্টে আমরা error শুধুমাত্র রান টাইমে পাই। অর্থাৎ ব্রাউজারে যাওয়ার পরে console এ দেখি। but typescript compile time এ error দেখার ব্যবস্থা করে দিয়েছে।
- (v) type coercior suffer করছে।

## Benefits of typescript

- Typescript = JavaScript
- compuls to JavaScript - runs everywhere
- Familar object Orient programming
- New features work everywhere

## Installing typescript

- install node.js in your machine
- install typescript compiler ( npm i -g typescript). npm i -g typescript দিলে tsc (typescript compiler) নামে একটা commad রেডি হয়ে যায়।
