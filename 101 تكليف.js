let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /\d{2}\W+\d{2}\W+\d{2,4}/g; // Write Pattern Here
console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"
console.log("#".repeat(9));
// OR
let Rex = /(\d+(.+)?)+/g;
console.log(date1.match(Rex)); // "25/10/1982"
console.log(date2.match(Rex)); // "25 - 10 - 1982"
console.log(date3.match(Rex)); // "25 10 1982"
console.log(date4.match(Rex)); // "25 10 82"