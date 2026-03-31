let img1 = document.querySelectorAll("img");

// for(let i = 0 ; i < img1.length ; i++){
//     if (img1[i].getAttribute("alt") !== null){
//         img1[i].setAttribute("alt" , "Old");
//     }else{
//         img1[i].setAttribute("alt" , "Elzero New");
//     }
// }

// OR

for(let i = 0 ; i < img1.length ; i++){
    if (img1[i].alt !== ""){
        img1[i].alt = "Old";
    }else{
        img1[i].alt = "Elzero New";
    }
}