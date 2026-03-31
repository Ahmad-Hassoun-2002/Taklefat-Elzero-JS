function createStars(num) {
    // Your Code Here
    let a = "";
    for(let i = 1 ; i < num * 2 ; i+=2){
        a += "*".repeat(i) + "\n";
    }
    return a;
}

console.log(createStars(8));

// OR

function createStars2(num) {
    let result = '';
    for (let i = 1 ; i <= num ; i++) {
      result += '*'.repeat(2 * i - 1) + '\n';
    }
    return result;
}

console.log(createStars2(8));

// Output Needed
// *
// ***
// *****
// *******
// *********
// ***********
// *************
// ***************