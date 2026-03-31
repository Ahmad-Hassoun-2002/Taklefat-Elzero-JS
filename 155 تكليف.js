let arr = [1, 1, 1, 2, 3, 4, 3];
let uniqueElements = [...new Set(arr)];
let uniqueElements1 = arr.filter((ele,ind) => {
    arr.sort();
    return arr.indexOf(ele) == ind;
});
let uniqueElements2 = arr.reduce((ele , ele2) => {
    arr.sort();
    if(!ele.includes(ele2)){
        ele.push(ele2);
    }
    return ele;
},[]);
let uniqueElements3 = [];
arr.forEach((ele,ind) => {
    arr.sort();
    if(!uniqueElements3.includes(ele)){
        uniqueElements3.push(ele)
    }
});
let uniqueElements4 =  [...new Map(arr.map(item => [item, item])).values()];
let uniqueElements5 = Array.from(new Set(arr));

console.log(uniqueElements); // [1, 2, 3, 4]
console.log(uniqueElements1); // [1, 2, 3, 4]
console.log(uniqueElements2); // [1, 2, 3, 4]
console.log(uniqueElements3); // [1, 2, 3, 4]
console.log(uniqueElements4); // [1, 2, 3, 4]
console.log(uniqueElements5); // [1, 2, 3, 4]