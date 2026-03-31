function checkStatus(a, b, c) {
    // Your Code Here
    let Name = "UK" , age , aWork = true;
    (typeof a === 'string')? Name = a : (typeof b == 'string')? Name = b : Name = c;
    (typeof a === 'number')? age = a : (typeof b == 'number')? age = b : age = c;
    (typeof a === 'boolean')? aWork = a : (typeof b == 'boolean')? aWork = b : aWork = c;
    if(aWork == true){
        console.log(`Hello ${Name}, Your Age Is ${age}, You Are Available For Hire`);
    }else{
        console.log(`Hello ${Name}, Your Age Is ${age}, You Are Not Available For Hire`);
    }
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"