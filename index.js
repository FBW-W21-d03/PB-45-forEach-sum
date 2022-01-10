/*
Aufgabenstellung - Teil 1
Schreibe erneut ein Array mit Zahlen: 3066, 3189, 4001, 200 und 0
*/

let numbers = [3066, 3189, 4001, 200 , 0];
console.log(numbers);

/*
Aufgabenstellung - Teil 2
Wir wollen herausfinden, was die Summe aller Zahlen ist.
Schreibe dazu eine Variable counter mit dem Initialwert 0.
Schreibe nun eine forEach-Schleife für dein Array.
Innerhalb der Schleife musst du die aktuelle Zahl im Array auf den Counter aufaddieren.
*/
let sum = 0;
numbers.forEach(
    (einzelneZahl) => {
        sum = sum + einzelneZahl;
    }
);
console.log(sum);

console.log("------------------------andere Zahlen--------------------------------");

let numbers2 = [5687, 1677, 5723, 333 , 0];
console.log(numbers2);

let sum2 = 0;
numbers2.forEach(
    (einzelneZahl2) => {
        sum2 = sum2 + einzelneZahl2;
    }
);
console.log("Die neue Summe ist: " , sum2);
