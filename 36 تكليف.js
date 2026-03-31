let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

if(haystack.includes(needle)){
    console.log("Found");
}

if(haystack.indexOf(needle) !== -1){
    console.log("Found");
}

if(needle == haystack[1]){
    console.log("Found");
}

// the right way

let a = "";

for(let i = 0 ; i < haystack.length ; i++){
    if(haystack[i] === needle){
        a = "Found";
        break;
    }else{
        a = "Not Found";
    }
}

console.log(a);