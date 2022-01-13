const numbers = [3066, 3189, 4001, 200, 0];

let counter = 0;
numbers.forEach (
    (plus) =>{

       counter = counter + plus;
    }
);
console.log(counter);
const zahlen = [
    3066, 3189, 4001, 200, 0];
    const sum =zahlen.reduce((a,b)=>a+b);
console.log("Die Summe aller Zahlen ist :",sum);
;