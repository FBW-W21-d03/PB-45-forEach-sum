// 1 )
const zahlen = [
    3066, 3189, 4001, 200, 0
];
console.log(zahlen);

// 2 )
let total = 0;

zahlen.forEach(function (namber) {
    total += namber;
});

console.log("Die Summe aller Zahlen ist :", total);