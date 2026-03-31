let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = finalArr.concat(arrTwo[arrTwo.length - true] , arrOne.reverse() , arrTwo.reverse().slice(1 , arrTwo.length));
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// OR

arrOne = ["C", "D", "X"];
arrTwo = ["A", "B", "Z"];
finalArr = [];
finalArr = (arrOne.concat(arrTwo)).sort().reverse();
console.log(finalArr);