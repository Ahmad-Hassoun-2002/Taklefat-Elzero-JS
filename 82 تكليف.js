let inputs = document.querySelectorAll("input");
let selectColor = document.querySelector("select");

inputs.forEach(ele => {
    ele.addEventListener("blur" , function(){
        if(ele.value){
            window.sessionStorage.setItem(`${ele.id}` , ele.value);
        }
    });
});

selectColor.addEventListener("change" , function(){
    for(let i = 0 ; i < selectColor.options.length ; i++){
        selectColor.options[i].removeAttribute("selected");
    }
    selectColor.options[selectColor.selectedIndex].setAttribute("selected" , true);
    window.sessionStorage.setItem("color" , selectColor.options[selectColor.selectedIndex].value);
});

window.addEventListener("load" , function(){
    inputs.forEach(ele => {
        ele.value = window.sessionStorage.getItem(`${ele.id}`);
    });
    for(let i = 0 ; i < selectColor.options.length ; i++){
        selectColor.options[i].removeAttribute("selected");
        if(selectColor.options[i].value === window.sessionStorage.getItem("color")){
            selectColor.options[i].setAttribute("selected" , true);
        }
    }
});