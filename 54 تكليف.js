function checker(zName) {
    return function (status) {
        return function (salary) {
            return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
        };
    };
}

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// function carry(f){
//     return function (zName) {
//         return function (status) {
//             return function (salary) {
//                 return f(zName , status , salary);
//             };
//         };
//     };
// } // تقنية مهمة اعمل عنا بحث اسما currying

// let checker1 = carry(checker);

// console.log(checker1("Osama" , "Available" , 4000)); // Osama, My Salary Is 4000
// console.log(checker1("Ahmed" , "Not Available", )); // Iam Not Avaialble


let checkerArrow = (zName) => (status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

console.log(checkerArrow("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checkerArrow("Ahmed")("Not Available")()); // Iam Not Avaialble