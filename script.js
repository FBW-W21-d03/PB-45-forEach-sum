const jahre = [3066, 3189, 4001, 200, 0];
let reducer = (ersteWert, zweiterWert) => ersteWert + zweiterWert
jahre.forEach(
    (jahrgang) =>{
        console.log(jahre.reduce(reducer));
    }
);