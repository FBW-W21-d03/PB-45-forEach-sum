// const Zahlen = [3066, 3189, 4001, 200, 0];

// let counter = 0;


// Zahlen.forEach(
//     (Zahlen) => {
//         counter = counter + Zahlen;
//     }
// );



// console.log(counter)



const zahlen = [3066, 3189, 4001, 200, 0];

const counter = zahlen.reduce((v , j) => v + j);


console.log(counter)
