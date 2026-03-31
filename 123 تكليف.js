function addEl(str) {
    // Your Code Here
    if(str === ""){
        return str;
    }else if(str.startsWith("El") || !str.startsWith("El")){
        return "Elzero";
    }
}

console.log(addEl("")); // ""
console.log(addEl("Elzero")); // Elzero
console.log(addEl("zero")); // Elzero

// OR

function addEl2(str) {
    // Your Code Here
    if(str === ""){
        return str;
    }else{
        return "Elzero";
    }
}

console.log(addEl2("")); // ""
console.log(addEl2("Elzero")); // Elzero
console.log(addEl2("zero")); // Elzero
