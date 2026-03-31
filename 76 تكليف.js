// let sul = window.prompt("Print Number From – To" , "5-20");
// console.log(sul);

// let a = sul.split("-");

// let m = Math.max(...a);
// let l = Math.min(...a);

// for(l ; l <= m ; l++){
//     document.write(`<div>${l}</div>`);
// }

// OR

let propmtMes = window.prompt("write Number from-to");

let range = propmtMes.split("-").sort((a , b) => a - b); // هيك بيترتب تصاعدي

let rangeless = propmtMes.split("-").sort((a , b) => b - a); // هيك بيترتب تنازلي

console.log(range);

console.log(rangeless);

for(let i = parseInt(range[0]); i <= parseInt(range[range.length - 1]); i++){
    document.write(`<div>${i}</div>`);
}