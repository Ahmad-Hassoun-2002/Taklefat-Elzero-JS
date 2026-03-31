let fileName = "Elzero.php";

console.log(fileName.split(".")[0]);
console.log(fileName.split(".")[1]);

// OR

let fileReg = /\w+/g;

console.log(fileName.match(fileReg)[0]);
console.log(fileName.match(fileReg)[1]);

// Elzero
// php