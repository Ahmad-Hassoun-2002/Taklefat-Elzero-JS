let divCounter_1 = document.querySelector(".container");

function counterFun_1(){
    divCounter_1.innerHTML -= 1;
    if(divCounter_1.innerHTML === "0"){
        window.open("https://elzero.org","_self");
        clearInterval(counter_1);
    }
}

let counter_1 = setInterval(counterFun_1,1000);