// Needed Output
let t0 = performance.now();
for(let i = 1 ; i <= 99999 ; i++){
    console.log(i);
}
let t1 = performance.now();
console.log(`Loop Took ${Math.trunc(t1 - t0)} Milliseconds`)
// "Loop Took 1921 Milliseconds."