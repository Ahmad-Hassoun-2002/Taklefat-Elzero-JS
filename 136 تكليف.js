function concatenateWithoutLast(words) {
    // Your Code Here
    let a = "";
    for(let i = 0 ; i < words.length ; i++){
        for(let j = 0 ; j < words[i].length - 1 ; j++){
            a = a + words[i][j];
        }
        a = a + " ";
    }
    return a;
}

console.log(concatenateWithoutLast(["Elzeros", "Webd", "Schoold"])); // Elzero Web School

// OR

function concatenateWithoutLast2(words) {
    return words.map(word => word.slice(0, -1)).join(" ");
    // return words.map(word => word.slice(0, word.length - 1)).join(" ");
}

console.log(concatenateWithoutLast2(["Elzeros", "Webd", "Schoold"])); // Elzero Web School