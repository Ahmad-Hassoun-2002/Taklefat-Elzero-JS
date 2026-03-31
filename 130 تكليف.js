function swapEveryTwoChars(word) {
    // Your Code Here
    let word2 = word.split("");
    for(let i = 0 ; i < word2.length ; i+=2){
        if(word2[i] === word2[i].toUpperCase()){
            word2[i] = word2[i].toLowerCase();
        }else{
            word2[i] = word2[i].toUpperCase();
        }
    }
    return word2.join("");
}

console.log(swapEveryTwoChars("elZeRo")); // Elzero
console.log(swapEveryTwoChars("heLlO")); // Hello