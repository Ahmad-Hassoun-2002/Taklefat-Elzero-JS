// Needed Output
// Set(3) {10, 20, 2}
// 2

let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);

console.log(setOfNumbers);
let number = setOfNumbers.keys();
number.next();
number.next();
console.log(number.next().value); // 2
console.log(Array(...setOfNumbers)[2]); // 2