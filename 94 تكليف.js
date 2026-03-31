// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
let chars = ["Z", "Y", "A", "D", "E", 10, 1];
// chars.sort();

let filterChars = chars.filter(ele => typeof ele === "number");
let array1 = [];
for(let j = 0 ; j < filterChars.length ; j++){
    for(let i = 0 ; i < chars.length ; i++){
        if(chars[i] === filterChars[j]){
            array1.unshift(filterChars[j]);
        }else{
            array1.push(chars[i]);
        }
    }
}
array1.length = array1.length / filterChars.length;
array1.copyWithin(0 , filterChars.length , filterChars.length * 2);
console.log(array1);

// OR

let nums = chars.filter(e => typeof e === "number");
let letter = chars.filter(e => typeof e !== "number");
chars = [...nums , ...letter];
console.log(chars.copyWithin(0 , nums.length , nums.length * 2));