// Write Your Function Here
let a = [];
function customMerge(...b){
    for(let i = 0 ; i < b.length ; i++){
        for(let j = 0 ; j < b[i].length ; j++){
            a.push(+b[i][j]);
        }
    }
    return a.sort((a , b) => a - b);
}

console.log(customMerge([10, 20, "30", 1000], [100, "50", 20], [90, 20, "40", 10]));
// [10, 10, 20, 20, 20, 30, 40, 50, 90, 100, 1000]