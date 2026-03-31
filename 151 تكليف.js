for (let i = 1; i < 100; i += 5) {
    // Your Code Here
    if((i - 1) % 10 === 0){
        console.log(i);
    }
}

console.log("#".repeat(10));

// OR

let counter = 0;
for (let i = 1; i < 100; i += 5) {
    if (counter % 2 === 0) {
        console.log(i);
    }
    counter++;
}
// Output Needed
// 1
// 11
// 21
// 31
// 41
// 51
// 61
// 71
// 81
// 91