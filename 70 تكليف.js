let form1 = document.querySelector("form");
form1.style = "display: flex; justify-content: center; align-items:center; margin: auto; width: fit-content; flex-wrap: wrap;";
let select = document.querySelector("select");
select.style = "border: 1px solid black; display: block; width: 100%; text-align: center; padding: 30px 20px; margin: 20px auto; border-radius: 5px;";
let number1 = document.querySelector("[type='number']");
number1.style = "border: 1px solid black; display: block; width: 100%; text-align: center; padding: 30px 20px; margin: 20px auto; border-radius: 5px;";
let text = document.querySelector("[type='text']");
text.style = "border: 1px solid black; display: block; width: 100%; text-align: center; padding: 30px 20px; margin: 20px auto; border-radius: 5px;";
let div1 = document.querySelector(".results");
let create1 = document.querySelector("[name='create']");
div1.style = "width: 100%; text-align: center; border-radius: 5px; display: grid; grid-template-columns: repeat(3 , minmax(20% , 25%)); justify-content: space-between; align-items: center; margin: 0; padding: 0;";
create1.style = "display: block; width: 100%; text-align: center; padding: 30px 20px; margin: 20px auto; background-color: #00d1c4; color: white; font-weight: bold; border: none;";

create1.onclick = function(ev){
    div1.innerHTML = "";
    for(let i = 0 ; i < number1.value ; i++){
        if(number1.value !== ""){
            let new1 = document.createElement(document.querySelector("select").value);
            let text1 = document.createTextNode(text.value);
            new1.style = "text-align: center; background-color: orange; color: white; padding: 30px 20px; margin: 20px auto; border-radius: 5px; width: -webkit-fill-available;"
            new1.setAttribute("class","box");
            new1.setAttribute("title","Element");
            new1.setAttribute("id", `id-${i + 1}`);
            new1.appendChild(text1);
            div1.appendChild(new1.cloneNode(true));
        }
    }
    ev.preventDefault();
};

// OR

// let num_element = document.querySelector("input");
// let element_content = document.querySelectorAll("input")[1];
// let but = document.querySelector("[name='create']");
// let parant_elm = document.querySelector(".results");
// let type_select = document.querySelector("select");

// but.onclick = function(ev){
//   parant_elm.innerHTML = "";
//   for(let i=0; i<num_element.value; i++){
//     if(type_select.value == "Div"){
//       let myEle = document.createElement("div");
//       let texxt = document.createTextNode(element_content.value)
//       myEle.setAttribute("class","box");
//       myEle.setAttribute("title","Element");
//       myEle.setAttribute("id", `id-${i + 1}`);
//       myEle.appendChild(texxt)
//       parant_elm.appendChild(myEle.cloneNode(true))
//     }else{
//       let myEle = document.createElement("section");
//       let texxt = document.createTextNode(element_content.value)
//       myEle.setAttribute("class","box");
//       myEle.setAttribute("title","Element");
//       myEle.setAttribute("id", `id-${i + 1}`);
//       myEle.appendChild(texxt)
//       parant_elm.appendChild(myEle.cloneNode(true))
//     }
//   }
//   ev.preventDefault();
// }