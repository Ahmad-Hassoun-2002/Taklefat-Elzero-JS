let theNumber = 100020003000;

console.log(+[...new Set(theNumber.toString())].filter((e) => e > 0).join(""));
console.log(+[...new Set(theNumber.toString())].filter((e) => +e).join(""));

// Needed Output
// 123