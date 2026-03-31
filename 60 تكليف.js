let nums = [2, 12, 11, 5, 10, 1, 99];

let result = nums.reduce(function(Acc , cur){
    return cur % 2 == 0 ? Acc * cur : Acc + cur;
} , 1);

console.log(result);

// 500