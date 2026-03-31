function ageInTime(theAge) {
    // Your Code Here
    if((theAge <= 0) || (theAge > 100)){
        console.log("Age Out Of Range");
    }else{
        console.log(`${theAge * 12} Months`);
        console.log(`${theAge * 12 * 4} Weeks`);
        console.log(`${theAge * 365} days`);
        console.log(`${theAge * 365 * 24} Houers`);
        console.log(`${theAge * 365 * 24 * 60} Minuts`);
        console.log(`${theAge * 365 * 24 * 60 * 60} Seconds`);
    }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months