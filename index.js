//  AUFGABE TEIL-1
const numbers = [3066, 3189, 4001, 200, 0];


//   AUFGABE TEIL - 2
let counter = 0;

numbers.forEach(
    (number) => {
        counter = counter + number;
    }
);

//    AUFGABE TEIL - 3
console.log("Counter:", `${counter}`);





// ANDER LÖSUNG MIT VEREENDUNG VON REDUCE:

const numbers2 = [3066, 3189, 4001, 200, 0];

const result = numbers2.reduce((previouce, current) => previouce + current);

console.log("Result ist:", `${result}`);