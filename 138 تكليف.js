function formatName(theName) {
    // Your Code Here
    let nam = theName.split(" ");
    let num = [];
    for(i in nam){
        if(i == 0){
            num.push(nam[i][0]);
        }else{
            num.push(nam[i][0].toLowerCase());
        }
    }
    return num.join(".");
}

console.log(formatName("Osama Elzero")); // O.e
console.log(formatName("Elzero Web School")); // E.w.s

// OR


function formatName2(theName) {
    return theName.split(" ")
        .map((word, index) => (index === 0 ? word[0].toUpperCase() : word[0].toLowerCase()))
        .join(".");
}

console.log(formatName2("Osama Elzero")); // O.e
console.log(formatName2("Elzero Web School")); // E.w.s