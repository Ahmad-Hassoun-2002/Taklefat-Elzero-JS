let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

let j = Number(false);
for(let i = Number(false) ; i < friends.length ; i++){
    if(friends[i][+false] !== letter.toUpperCase()){
        console.log(`"${++j} => ${friends[i]}`);
    }
}

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"