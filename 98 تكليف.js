let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let specialNamesRe = /\bos\d*o\b/ig;
// OR
let specialNamesRe2 = /os\d*o/ig;

console.log(specialNames.match(specialNamesRe));
console.log(specialNames.match(specialNamesRe2));
// Output
// ['Os10O', 'OsO', 'Os100O']