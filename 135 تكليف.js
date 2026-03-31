function repeatWithRules(word) {
    // Your Code Here
    let arr = word.split("");
    let a = [];
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = 0 ; (j <= i)&&(j <= arr.length) ; j++){
            a.push(arr[i]);
        }
    }
    return a.join("");
}

console.log(repeatWithRules("Elzero")); // Ellzzzeeeerrrrroooooo
console.log(repeatWithRules("Hello")); // Heelllllllooooo

// OR

function repeatWithRules2(word) {
    let result = "";
    for (let i = 0; i < word.length; i++) {
        result += word[i].repeat(i + 1); // Repeat the character (i + 1) times
    }
    return result;
}

console.log(repeatWithRules2("Elzero")); // Ellzzzeeeerrrrroooooo
console.log(repeatWithRules2("Hello")); // Heelllllllooooo