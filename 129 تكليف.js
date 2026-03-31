let nums = [10, 80 , 85, 25, 30, 88, 15];
let goal = 100;

// Your Code Here

console.log(nums.reduce((ele1 , ele2) => {
    if((ele1 > ele2 && ele1 <= goal)){
        return ele1;
    }else if(ele2 > ele1 && ele2 <= goal){
        return ele2
    }
}));

// OR

let closest = nums.reduce((prev, curr) =>
    Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev
);

console.log(`Closest Number Is ${closest}`);
// Closest Number Is 88