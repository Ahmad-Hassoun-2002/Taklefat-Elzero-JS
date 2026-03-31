function getLastDigit(num) {
    // Your Code Here
    return parseInt(num.toString().slice(-1));
}

console.log(getLastDigit(1)); // 1
console.log(getLastDigit(18)); // 8
console.log(getLastDigit(305)); // 5
console.log(getLastDigit(1569)); // 9
console.log(typeof getLastDigit(1569)); // Number

// OR

function getLastDigit2(num) {
    return Math.abs(num) % 10;
}

console.log(getLastDigit2(1)); // 1
console.log(getLastDigit2(18)); // 8
console.log(getLastDigit2(305)); // 5
console.log(getLastDigit2(1569)); // 9
console.log(typeof getLastDigit2(1569)); // Number