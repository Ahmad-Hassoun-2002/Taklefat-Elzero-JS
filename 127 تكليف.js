function checkBiggestNum(word) {
    // Your Line Of Code Here
    console.log(Math.max(...word.split('').map(k => +k)));
    return Math.max(...word.split('').map(Number));
}

console.log(checkBiggestNum("1500654")); // 6
console.log(checkBiggestNum("8509507")); // 9