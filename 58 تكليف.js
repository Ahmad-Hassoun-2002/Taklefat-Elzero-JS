let myArray = ["E", "l", "z", ["e", "r"], "o"];

let result = myArray.reduce(function (FN , LN){
//     console.log(`First L => ${FN}
// Last L => ${LN}
// Index => ${index}
// Array => ${array}`);
    return FN + LN;
}).split(",").join("");

console.log(result);

// OR 

let result1 = myArray.reduce(function (FN , LN){
    return FN + LN;
}).split("").filter(function (ele){
    return ele !== ",";
}).join("");

console.log(result1);

// OR 

let flatten = myArray.reduce(function(x , z){
    // console.log(`${Array.isArray(x)? x.join("") : `${x}${z}`}`);
    return Array.isArray(x)? x.join("") : `${x}${z}`;
}).split(",").reduce((a , c) => `${a}${c}`)

console.log(flatten);

// Elzero

// array.flat()

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]