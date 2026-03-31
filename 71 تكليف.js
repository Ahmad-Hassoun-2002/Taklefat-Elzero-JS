let elzero = document.querySelectorAll(".open");
window.onload = function(){
    for(let i = 0 ; i < elzero.length ; i++){
        if(elzero[i].innerHTML === "Elzero"){
            elzero[i].click();
        }
    }
}