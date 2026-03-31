function reversing(str) {
    // Write Your Code Here
    console.log(str.split(/\b/));
    return str.split(/\b/).map(word => /\w/.test(word) ? word.split("").reverse().join("") : word).join("");
}
console.log(reversing(",@Hello, E@lzero")); // ,@olleH, E@orezl