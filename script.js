const zahlen = [3066, 3189, 4001, 200, 0];
let counter = 0; // speichert Summe

zahlen.forEach((zahl) => {
  counter += zahl;
});

console.log("Gesamtsumme:", counter);
