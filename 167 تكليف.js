let nums = [10, -20, 300, 50, 100, -50];

let maxNumber = Math.max(...nums);
let maxNumber1 = nums.reduce((ele1 , ele2) => ele1 > ele2? ele1: ele2);
let maxNumber2 = 0;
nums.forEach(ele => {
    if(ele >= 300){
        maxNumber2 += ele;
    }
});
let maxNumber3 = [...nums].sort((a,b) => a-b)[nums.length - 1];

console.log(maxNumber); // 300
console.log(maxNumber1); // 300
console.log(maxNumber2); // 300
console.log(maxNumber3); // 300