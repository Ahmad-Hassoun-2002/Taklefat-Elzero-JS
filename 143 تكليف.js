let str1 = "AElzero";
let str2 = "ZAcademy";

console.log([str1.slice(1) , str2.slice(1)].join(" ")); // Elzero Academy
console.log(`${str1.slice(1)}${str2.slice(0, 1).replace(/./, ' ')}${str2.slice(1)}`); // Elzero Academy