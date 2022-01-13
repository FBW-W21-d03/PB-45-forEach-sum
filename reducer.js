const zahl = [3066, 3189, 4001, 200, 0];

const reducer = (previousValue, currentValue) => previousValue + currentValue;
const result = zahl.reduce(reducer)


console.log(result);