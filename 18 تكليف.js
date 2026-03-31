let myVar = "100.56789 Views";

console.log(Math.trunc(parseInt(myVar))); // 100
console.log(+(parseFloat(myVar).toFixed(2))); // 100.57