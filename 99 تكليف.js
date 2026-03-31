let phone = "+(995)-123 (4567)";
let phoneRe = /\S+ \S+/g;
let phoneRe2 = /\+\(\d{3}\)-\d{3} \(\d{4}\)/g;
let phoneRe3 = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/g;

console.log(phone.match(phoneRe));
console.log(phone.match(phoneRe2));
console.log(phone.match(phoneRe3));