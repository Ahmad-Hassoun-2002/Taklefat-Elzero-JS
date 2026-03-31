let names = ["Osso", "Aola", "Essa", "Igaa", "Daad", "Roor"];
let result = [];
for(let i = 0 ; i < names.length ; i++){
    if(names[i][0].toLowerCase() === names[i][names[i].length - 1].toLowerCase()){
        result.push(names[i]);
    }
}

// OR

let result1 = names.filter(name => {
    return name[0].toLowerCase() === name[name.length - 1].toLowerCase(); 
});
// Your Code Here

console.log(result); // ['Osso', 'Aola', 'Daad', 'Roor']
console.log(result1); // ['Osso', 'Aola', 'Daad', 'Roor']