let start = 0;
let swappedName = "elZerO";

let swap = "";
for(let i = start ; i < swappedName.length ; i++){
    if(swappedName[i].toUpperCase() === swappedName[i]){
        swap += swappedName[i].toLowerCase();
    }else if(swappedName[i].toLowerCase() === swappedName[i]){
        swap += swappedName[i].toUpperCase();
    }else{
        continue;
    }
}

console.log(swap);
// OR
let hub = [];

for(let i=start; i<swappedName.length; i++){
    if(swappedName[i] === swappedName[i].toLowerCase()){
        hub.push(swappedName[i].toUpperCase());
    }else{
        hub.push(swappedName[i].toLowerCase());
    }
}
console.log(hub.join(""));

// Output
// "ELzERo"