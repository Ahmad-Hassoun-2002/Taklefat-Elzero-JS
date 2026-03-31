let theName = "Elzero";

console.log(Array(...theName));
console.log(theName.split(""));
console.log([...theName]);
console.log(Array.from(theName));
console.log(Array.prototype.slice.call(theName));

function makeArray(str){
    let arr = [];
    for(let i=0; i<str.length; i++){
        arr.push(str[i])
    }
    return arr
}
console.log(makeArray(theName))
// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']