function sayHello(theName, theGender) {
    // Your Code Here
    if(theGender === "Male"){
        console.log(`Hello Mr ${theName}`);
    }else if(theGender === "Female"){
        console.log(`Hello Miss ${theName}`);
    }else{
        console.log(`Hello ${theName}`);
    }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

// OR

function sayHello2(theName, theGender){
    if(theGender === undefined){
        console.log(`Hello ${theName}`);
    }else{
        let result = theGender === "Male"? "Mr" : "Miss";
        console.log(`Hello ${result} ${theName}`);
    }
}

sayHello2("Youssef" , "Male"); // Hello Mr Youssef
sayHello2("Seham" , "Female"); // Hello Miss Seham
sayHello2("Youssef"); // Hello Youssef