"use strict";

const employees = [
  "Sammy",
  "Oscar",
  "Oliver",
  "Ava",
  "Elias",
  "Charlotte",
  "William",
  "Sophia",
  "James",
  "Amelia",
];

const reducer = (previousValue, currentValue) => previousValue + currentValue;

console.log(employees.reduce(reducer));

console.log(employees.reduce(reducer, 5));
