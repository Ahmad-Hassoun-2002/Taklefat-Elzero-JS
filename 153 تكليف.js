let strNumber = "10";

// Method 1
console.log(strNumber * 1); // 10
console.log(strNumber - 0); // 10 <= Same Solution
console.log(Number(strNumber));
console.log(+strNumber);
console.log(parseInt(strNumber));
console.log(parseFloat(strNumber));
console.log(JSON.parse(strNumber));
console.log((new Number(strNumber)).valueOf());
console.log(Math.floor(strNumber));
console.log(Math.ceil(strNumber));
console.log(Math.round(strNumber));
console.log(Math.max(strNumber));
console.log(Math.min(strNumber));
console.log(eval(strNumber));
console.log(strNumber | 0);
console.log(strNumber << 0);
console.log(~~strNumber);
let formatter = new Intl.NumberFormat('en-US');
console.log(+formatter.format(strNumber));
// Output Needed
// 10