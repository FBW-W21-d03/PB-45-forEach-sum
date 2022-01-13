//// Aufgabenstellung - Teil 1
////Schreibe erneut ein Array mit Zahlen: 3066, 3189, 4001, 200 und 0


const zahlen = [3066, 3189, 4001, 200, 0];
let counter = 0;

zahlen.forEach((meinZahl) => {
  counter = counter + meinZahl;
});
console.log(counter);

let summe = zahlen.reduce((erste, zweite) => erste + zweite);
console.log("lüsong mit reduce",`${summe}`);
