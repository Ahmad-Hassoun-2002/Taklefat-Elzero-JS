let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
// 1
let fullArray = [...numsOne , ...numsTwo];
console.log(fullArray);
// 2
let fullArray1 = Array.from([...numsOne , ...numsTwo]);
console.log(fullArray1);
// 3
let full = numsOne.join() + "," + numsTwo.join();
let fullfull = full.split(",");
let fullArray2 = [];
for(let i = 0 ; i < fullfull.length ; i++){
    fullArray2.push(+fullfull[i]);
}
console.log(fullArray2);
// 4
let fullArray3 = numsOne.concat(numsTwo);
console.log(fullArray3);
// 5
let fullArray4 = numsOne.push(...numsTwo);
console.log(numsOne); // لاحظ هون شو طبعنا

numsOne = [1 , 2 , 3];
// 6
let fullArray5 = [];
fullArray5.push(...numsOne,...numsTwo);
console.log(fullArray5);
// Needed Output
// [1, 2, 3, 4, 5, 6]