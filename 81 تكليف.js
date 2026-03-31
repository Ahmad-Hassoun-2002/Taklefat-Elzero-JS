let div = document.querySelector(".test");
let select_font = document.getElementById("font");
let select_color = document.getElementById("color");
let select_font_size = document.getElementById("size");

let fonts = {
    "Open Sans":"font-family: 'Open Sans', sans-serif",
    Cairo:"font-family: 'Cairo', sans-serif",
    Roboto:"font-family: 'Roboto', sans-serif",
};

if(localStorage.getItem("font_family")){
    let arrayOfFontOptions = [];
    for(let i = 0 ; i < select_font.options.length ; i++){
        select_font.options[i].removeAttribute('selected');
        arrayOfFontOptions.push(select_font.options[i]);
        if(select_font.options[i].value == window.localStorage.getItem("font_family")) select_font.options[i].setAttribute("selected" , true);
    }
    div.style.cssText = `${fonts[`${select_font.options[select_font.selectedIndex].value}`]}; background-color: ${select_color.options[select_color.selectedIndex].value}; font-size: ${select_font_size.options[select_font_size.selectedIndex].value}px;`;
}
if(localStorage.getItem("bg-color")){
    let arrayOfColorOptions = [];
    for(let i = 0 ; i < select_color.options.length ; i++){
        select_color.options[i].removeAttribute('selected');
        arrayOfColorOptions.push(select_font.options[i]);
        if(select_color.options[i].value == window.localStorage.getItem("bg-color")) select_color.options[i].setAttribute("selected" , true);
    }
    div.style.cssText = `${fonts[`${select_font.options[select_font.selectedIndex].value}`]}; background-color: ${select_color.options[select_color.selectedIndex].value}; font-size: ${select_font_size.options[select_font_size.selectedIndex].value}px;`;
}

if(localStorage.getItem("font-size")){
    let arrayOfSizeOptions = [];
    for(let i = 0 ; i < select_font_size.options.length ; i++){
        select_font_size.options[i].removeAttribute('selected');
        arrayOfSizeOptions.push(select_font_size.options[i]);
        if(select_font_size.options[i].value == parseInt(window.localStorage.getItem("font-size"))) select_font_size.options[i].setAttribute("selected" , true);
    }
    div.style.cssText = `${fonts[`${select_font.options[select_font.selectedIndex].value}`]}; background-color: ${select_color.options[select_color.selectedIndex].value}; font-size: ${select_font_size.options[select_font_size.selectedIndex].value}px;`;
}

select_font.addEventListener('change' , (opt) => {
    if(opt.target.selected == undefined){
        for(let i = 0 ; i < select_font.options.length ; i++){
            select_font.options[i].removeAttribute('selected'); 
        }
        select_font.options[select_font.selectedIndex].setAttribute('selected' , true);
    }
    if(select_font.options[select_font.selectedIndex].value){
        div.style.cssText = `${fonts[`${select_font.options[select_font.selectedIndex].value}`]}; background-color: ${select_color.options[select_color.selectedIndex].value}; font-size: ${select_font_size.options[select_font_size.selectedIndex].value}px;`;
        window.localStorage.setItem("font_family" , `${select_font.options[select_font.selectedIndex].value}`);
    }
});

select_color.addEventListener('change' , (opt) =>{
    if(opt.target.selected == undefined){
        for(let i = 0 ; i < select_color.options.length ; i++){
            select_color.options[i].removeAttribute('selected'); 
        }
        select_color.options[select_color.selectedIndex].setAttribute('selected' , true);
    }
    if(select_color.options[select_color.selectedIndex].value){
        div.style.cssText = `background-color: ${select_color.options[select_color.selectedIndex].value}; ${fonts[`${select_font.options[select_font.selectedIndex].value}`]}; font-size: ${select_font_size.options[select_font_size.selectedIndex].value}px;`;
        window.localStorage.setItem("bg-color" , `${select_color.options[select_color.selectedIndex].value}`);
        if(div.style.backgroundColor == "white" || div.style.backgroundColor == "pink"){
            div.style.color = "black";
        }
    }
});

select_font_size.addEventListener('change' , (opt) =>{
    if(opt.target.selected == undefined){
        for(let i = 0 ; i < select_font_size.options.length ; i++){
            select_font_size.options[i].removeAttribute('selected'); 
        }
        select_font_size.options[select_font_size.selectedIndex].setAttribute('selected' , true);
    }
    if(select_font_size.options[select_font_size.selectedIndex].value){
        div.style.cssText = `font-size: ${select_font_size.options[select_font_size.selectedIndex].value}px; background-color: ${select_color.options[select_color.selectedIndex].value}; ${fonts[`${select_font.options[select_font.selectedIndex].value}`]};`;
        window.localStorage.setItem("font-size" , `${select_font_size.options[select_font_size.selectedIndex].value}px`);
    }
});