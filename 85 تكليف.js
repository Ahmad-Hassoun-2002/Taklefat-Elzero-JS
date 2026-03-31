let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring

arr3.shift();
arr3.unshift(arr1[0]);
arr3.sort();
arr3.reverse();

// Write Your Destructuring Assignment Here

[a , b , c] = arr3;

console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed

// OR

let arr11 = ["Ahmed", "Sameh", "Sayed"];
let arr22 = ["Mohamed", "Gamal", "Amir"];
let arr33 = ["Haytham", "Shady", "Mahmoud"];

let [[, a_3 , ], [, , b_3], [c_3, ,]] = [arr33, arr33, arr11];

console.log(`My Best Friends: ${a_3}, ${b_3}, ${c_3}`);