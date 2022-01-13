const numbers = [3066, 3189, 4001, 200, 0];

let counter = 0;
numbers.forEach (
    (plus) =>{

       counter = counter + plus;
    }
);
console.log("Result with forEach:",counter);

// Reduce
const reducedResult = numbers.reduce ((current, result)=> current + result);
console.log("Result with reduce:",reducedResult);