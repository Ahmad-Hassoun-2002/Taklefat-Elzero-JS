// حل ثاني

let options = document.querySelectorAll(".options");
let font_lis = document.querySelectorAll(".font li");
let color_lis = document.querySelectorAll(".color li");
let size = document.querySelector(".font-size");
let test_div = document.querySelector(".test_div");

let fonts = {
  Sans:"font-family: 'Open Sans', sans-serif",
  Cairo:"font-family: 'Cairo', sans-serif",
  Roboto:"font-family: 'Roboto', sans-serif"
}

// font family

font_lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    font_lis.forEach((li)=>{
      li.classList.remove("active")
    })
    e.target.classList.add("active");
    window.localStorage.setItem("font_family",e.target.dataset.font)

    test_div.style.fontFamily = window.localStorage.getItem("font_family");
  });
});

if(window.localStorage.getItem("font_family")){
  test_div.style.fontFamily = window.localStorage.getItem("font_family");
  font_lis.forEach((li)=>{
    li.classList.remove("active")
  })
  // document.querySelector(`[data-font = ${window.localStorage.getItem("font_family")}]`).classList.add("active");
}

// Color
if(window.localStorage.getItem("color")){
  test_div.style.backgroundColor = window.localStorage.getItem("color");
  color_lis.forEach((li)=>{
    li.classList.remove("active")
  })
  document.querySelector(`[data-color = ${window.localStorage.getItem("color")}]`).classList.add("active");
}
color_lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    color_lis.forEach((li)=>{
      li.classList.remove("active")
    })
    e.target.classList.add("active");
    window.localStorage.setItem("color",e.target.dataset.color)
    test_div.style.backgroundColor = window.localStorage.getItem("color");
  });
});

// Font Size
size.onblur = function(){
  window.localStorage.setItem("size",`${size.value}px`)
  test_div.style.fontSize = window.localStorage.getItem("size");
}

if(window.localStorage.getItem("size")){
  test_div.style.fontSize = window.localStorage.getItem("size");
}