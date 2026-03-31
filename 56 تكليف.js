let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let result = mix.map(function (ele){
    if(isNaN(ele)){
        return ele;
    }else{
        return "";
    }
}).reduce(function (fLet , lLet){
    return fLet + lLet;
});

console.log(result);

// OR

let result2 = mix.map((e) => 
    typeof e === 'string' ? e : "").reduce(function(a,c){
        return `${a}${c}`
    })
    console.log(result2);

// Elzero