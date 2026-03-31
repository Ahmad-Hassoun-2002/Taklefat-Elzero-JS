let a = document.querySelector("div");
let b = a.innerHTML.split(" ")[1];

console.log(b);

// OR

let b1 = a.lastChild;

console.log(b1.nodeValue.trim());