// Needed Output
let myB = new Date("2002 5 14");
console.log((Date.now() - myB) / 1000 + " Seconds");
console.log((Date.now() - myB) / 1000 / 60 + " Minutes");
console.log(((Date.now() - myB) / 1000 / 60) / 60 + " Hours");
console.log((((Date.now() - myB) / 1000 / 60) / 60) / 24 + " Days");
console.log(((((Date.now() - myB) / 1000 / 60) / 60) / 24) / 30 + " Months");
console.log((((((Date.now() - myB) / 1000 / 60) / 60) / 24) / 30) / 12 + " Years");
// "1247939400 Seconds"
// "20798990 Minutes"
// "346650 Hours"
// "14444 Days"
// "481 Months"
// "40 Years"