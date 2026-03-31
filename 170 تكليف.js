function createStars(num) {
    // Your Code Here
    let res = "";
    for(let i = 1 ; i <= num ; i++){
        res += "*".repeat(i * 2 - 1) + "\n";
    }for(let j = num - 1 ; j > 0 ; j--){
        res += "*".repeat(j * 2 - 1) + "\n";
    }
    return res;
}

console.log(createStars(3));

// Output Needed
// *
// ***
// *****
// ***
// *

console.log(createStars(7));

// OR

function createStars2(num) {
    let result = "";
    // Loop واحد يغطي الجزءين
    for (let i = 1; i <= 2 * num - 1; i++) {
        let level = i <= num ? i : 2 * num - i;
        let stars = "*".repeat(2 * level - 1);
        result += stars + (i < 2 * num - 1 ? "\n" : "");
    }
    return result;
}

console.log(createStars2(3));
console.log(createStars2(7));

// Output Needed
// *
// ***
// *****
// *******
// *********
// ***********
// *************
// ***********
// *********
// *******
// *****
// ***
// *