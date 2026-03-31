let myArr = ["69", "108", "122", "101", "114", "111"];

// Your Code Here
let result = myArr.map(e => String.fromCharCode(+e)).join("");

console.log(result); // Elzero