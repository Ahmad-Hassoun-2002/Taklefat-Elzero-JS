let nums = [20, 100, 50, 10, 15, -20, 30];
nums.sort((a , b) => a - b);
let number = [];
number.push(nums[nums.length - 1]);
number.push(nums[nums.length - 2]);
console.log(number);

// OR

let topTwo = nums.sort((a, b) => b - a).slice(0, 2);
console.log(topTwo);
// Needed Output
// [100, 50]