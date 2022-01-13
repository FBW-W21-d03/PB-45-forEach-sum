const zahlen = [3066, 3189, 4001, 200, 0];
let reducer = (ersteWert, zweiterWert) => ersteWert + zweiterWert
zahlen.forEach(
    (jahrgang) =>{
        console.log(zahlen.reduce(reducer));
    }
);

const array1 = [3066, 3189, 4001, 200, 0];
let counter = 0;
array1.forEach(
    (addiere) => {
        counter += addiere;

    }
)
console.log(counter)

/*function isBigEnough(value) {
    return value >= 100;
  }
  
  let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
  // filtered is [12, 130, 44]
  console.log(filtered)*/