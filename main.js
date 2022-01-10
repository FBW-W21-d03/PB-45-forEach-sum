const meinZhale = [3066, 3189, 4001, 200, 0];
meinZhale.reverse();
let summe = 0;

meinZhale.forEach((fetuerJahre) => {
  summe = summe + fetuerJahre;
});
console.log("Ergebnis ist:", summe);
