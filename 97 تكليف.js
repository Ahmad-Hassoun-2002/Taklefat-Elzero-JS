let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let ipMatch = /\S+/g;
// OR
let ipRe = /\d{4}:\w{3}(:\d{4})+/ig;

console.log(ip.match(ipMatch));
console.log(ip.match(ipRe));