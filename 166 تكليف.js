let rangeEnd = 10;

let myRange = [];
for(let i = rangeEnd ; i > 0 ; i--){
    myRange.unshift(i);
}
let myRange2 = Array.from({ length: rangeEnd }, (_, i) => i + 1);
let myRange3 = [...Array(rangeEnd).keys()].map(i => i + 1);

// Output Needed
console.log(myRange); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(myRange2); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(myRange3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]