let myArr = [10, 10, 20, 20, 10, 30, 50, 20, 10];
// 1
console.log(myArr.filter((ele,ind) => ind == myArr.lastIndexOf(ele)).sort());
// 2
console.log(myArr.filter((ele , ind , arr) => arr.indexOf(ele) == ind));
// 3
let a = [];
for(let i = 0 ; i < myArr.length ; i++){
    myArr.sort();
    if(myArr[i] !== myArr[i + 1]){
        a.push(myArr[i]);
    }
}
console.log(a);
// 4
let uniqueArr1 = [...new Set(myArr)];
console.log(uniqueArr1); 
// 5
let uniqueArr3 = [];
myArr.forEach(item => {
    if (!uniqueArr3.includes(item)) {
        uniqueArr3.push(item);
    }
});
console.log(uniqueArr3);
// 6
let uniqueArr4 = myArr.reduce((acc, item) => {
    if (!acc.includes(item)) {
        acc.push(item);
    }
    return acc;
}, []);
console.log(uniqueArr4);
// Output Needed
// [10, 20, 30, 50]