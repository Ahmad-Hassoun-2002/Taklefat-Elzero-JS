let body2 = document.querySelector("body");

let myChild = body2.children;

for(let i = 0 ; i < myChild.length ; i++){
    myChild[i].addEventListener("click" , function(){
        console.log(`"this is ${myChild[i].nodeName}"`);
        console.log(`"this is ${myChild[i].localName.toUpperCase()}"`); // OR
    })
};

// OR

// document.body.onclick = function(e){
//     console.log(`This is ${e.target.nodeName}`);
// };