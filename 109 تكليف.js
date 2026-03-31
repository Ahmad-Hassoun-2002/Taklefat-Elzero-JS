// Needed Output
let timeZ = new Date(0);
timeZ.setFullYear(1980);
timeZ.setHours(0);
timeZ.setSeconds(1);
console.log(timeZ);
// OR
let begin = new Date(0);
begin.setFullYear(begin.getFullYear() + 10);
begin.setHours(0);
begin.setSeconds(1);
console.log(begin);
// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"