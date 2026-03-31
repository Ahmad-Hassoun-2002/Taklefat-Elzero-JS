function createStars(num) {
    // Your Code Here
    let result = "";
    let ress = "";
    for (let i = num ; i > 0 ; i--) {
        result += " ".repeat(num - i) + "*".repeat(i * 2 - 1) + "\n";
        ress += " ".repeat(i - 1) + "*".repeat((num - i + 1) * 2 - 1) + "\n";
    }
    return result + ress;
}

console.log(createStars(6));

// Output Needed
// ***********
//  *********
//   *******
//    *****
//     ***
//      *
//      *
//     ***
//    *****
//   *******
//  *********
// ***********
