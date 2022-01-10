const zahlen = [3066, 3189, 4001, 200, 0];
zahlen.sort();
let counter = 0;

zahlen.forEach((zahl)=>{
    
    counter= counter + zahl;
    console.log(counter);
});
      
