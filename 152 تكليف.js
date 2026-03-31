let myArray = [100, 200, 300, 400];

// Method 1
let clonedArray = [...myArray];
let clonedArray1 = new Array(...myArray);
let clonedArray2 = myArray.copyWithin(0);
let clonedArray3 = myArray.filter(_ => true);
let clonedArray4 = myArray.map(ele => ele);
let clonedArray5 = myArray.reduce((acc , ele) => {acc.push(ele); return acc;}, []);
let clonedArray6 = [];
myArray.forEach(ele => clonedArray6.push(ele));
function af(){
    return Array.from(...arguments);
}
let clonedArray7 = af(myArray);
let clonedArray8 = Array.from(myArray);
let clonedArray9 = myArray.slice();
let clonedArray10 = [].concat(myArray);
let clonedArray11 = JSON.parse(JSON.stringify(myArray));

console.log(clonedArray); // [100, 200, 300, 400]
console.log(clonedArray1); // [100, 200, 300, 400]
console.log(clonedArray2); // [100, 200, 300, 400]
console.log(clonedArray3); // [100, 200, 300, 400]
console.log(clonedArray4); // [100, 200, 300, 400]
console.log(clonedArray5); // [100, 200, 300, 400]
console.log(clonedArray6); // [100, 200, 300, 400]
console.log(clonedArray7); // [100, 200, 300, 400]
console.log(clonedArray8); // [100, 200, 300, 400]
console.log(clonedArray9); // [100, 200, 300, 400]
console.log(clonedArray10); // [100, 200, 300, 400]
console.log(clonedArray11); // [100, 200, 300, 400]