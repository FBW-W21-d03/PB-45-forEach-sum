console.log("Aufgabe 1: ");
let arrayZahlen = [3066, 3189, 4001, 200, 0];
console.log("\n", arrayZahlen);

console.log("Aufgabe 2: \n");

let sum = 0;
arrayZahlen.forEach((zahlen) => {
    sum += zahlen;
});

console.log("Das Ergebnis: ", sum);

// Teile reduce

const arrayReduce = arrayZahlen.reduce((sum, zahlen) => sum + zahlen);
console.log("Reduce ergebnis: ", arrayReduce);