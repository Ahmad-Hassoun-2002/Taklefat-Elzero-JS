let input1 = document.querySelector("[type='number']");
let div1 = document.querySelector(".result");

document.forms[0].oninput = function(){
    let result = input1.value;
    div1.innerHTML = `{${result}} USD Dollar = {${(result*19.11).toFixed(2)}} Egyptian Pound`;
};

// OR

// document.forms[0].oninput = function (){
//     let money_change = document.querySelector("[name='dollar']").value;
//     let egy_EP = money_change * 19.11;
//     let result = document.querySelector(".result");
//     result.innerHTML = `{${money_change}} USD Dollar = {${egy_EP.toFixed(2)}} Egyptian Pound`;
// };