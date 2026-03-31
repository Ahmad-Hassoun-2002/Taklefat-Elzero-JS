let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while(true){
    if(typeof friends[index] === 'string'){
        if(friends[index][0] !== 'A'){
            console.log(`"${counter + true} => ${friends[index]}`);
            counter++;
        }
        index++;
    }else{
        index++;
    }
}

// Output
// "1 => Sayed"
// "2 => Mahmoud"