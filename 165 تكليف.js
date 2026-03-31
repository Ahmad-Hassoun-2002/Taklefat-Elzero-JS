let last = 30;

let a = [];
for(let i = last ; i > 0 ; i--){
    if(i % 2 == 1){
        a.push(i);
    }
}
let sum = 0
for(let i = 0 ; i < a.length ; i+=2){
    console.log(a[i]);
    sum += a[i];
}

console.log(sum);

// OR

console.log("#".repeat(10));
let sum2 = 0;
for (let i = last - 1; i >= 1; i -= 4) {
    console.log(i);
    sum2 += i;
}
console.log(sum2);
// First Request Output Needed
// 29
// 25
// 21
// 17
// 13
// 9
// 5
// 1

// Second Request Output Needed
// 120