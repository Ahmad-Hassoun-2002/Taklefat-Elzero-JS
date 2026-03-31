// Add Variables Here

var NumberOne = 10;
var NumberTwo = 20;

// Ouput
console.log(NumberOne + "" + NumberTwo); // Normal Concatenate => 1020
console.log(typeof(NumberOne + "" + NumberTwo)); // Normal Concatenate => String
console.log(`${NumberOne}${NumberTwo}`); // Template Literals Way => 1020
console.log(typeof(`${NumberOne}${NumberTwo}`)); // Template Literals Way => String

console.log(NumberOne + "\n" + NumberTwo);
/*
    Normal Concatenate
    20
    10
*/

console.log(`${NumberOne}\n${NumberTwo}`);
/*
    Template Literals Way
    20
    10
*/