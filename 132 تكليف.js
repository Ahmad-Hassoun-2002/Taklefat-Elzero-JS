let myMoney = 5301503206;
let myMonewySt = myMoney.toString().split("");
for(let i = myMonewySt.length - 3 ; i > 0 ; i-=3){
    myMonewySt.splice(i , 0 , ",");
}
console.log(myMonewySt.join(""));

// OR 

console.log(myMoney.toLocaleString("en-US")); // هي الحل الاصح
// Needed Output
// 5,301,503,206