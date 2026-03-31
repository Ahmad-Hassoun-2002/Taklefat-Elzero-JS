/* let TA = document.querySelector(".classes-to-add");
let TR = document.querySelector(".classes-to-remove");
let current = document.querySelector(".element");
let div = document.querySelector(".classes-list div");

TA.onblur = function(){
    let s = TA.value.split(" ");
    if(TA.value !== ""){
      for(let i = 0 ; i < s.length ; i++){
        current.classList.add(`${s[i]}`);
      }
    }
      if(current.classList.length == 0){
        div.innerHTML = "No Classes To Show";
      }else{
        div.innerHTML = "";
      }
      let b = current.classList;
      for(let i = 0 ; i < b.length ; i++){
        let text = document.createTextNode(b[i].toLowerCase());
        let span1 = document.createElement("span");
        span1.className = `span${i}`;
      span1.appendChild(text);
      div.appendChild(span1);
    }
      TA.value = "";
}

TR.onblur = function(){
    let sp = document.querySelectorAll("span");
    if(TR.value !== ""){
        let s = TR.value.split(" ");
        let b = current.classList;
        for(let i = 0 ; i < s.length ; i++){
            for(let j = 0 ; j < b.length ; j++){
                if(s[i].toLowerCase() === b[j]){
                    current.classList.remove(`${s[i].toLowerCase()}`);
                    sp[j].remove();
                }
            }
        }
    }
    TR.value = "";
}
 */
// OR

let add_input = document.querySelector(".classes-to-add");
let remove_input = document.querySelector(".classes-to-remove");
let current_div = document.querySelector(".current");
let final_div = document.querySelector(".classes-list").lastElementChild;

let empty_classes_array = [];

function add_remove(){
  empty_classes_array = [];
  if(add_input.value != ""){
    current_div.classList.add(
      ...add_input.value.toLowerCase().split(" ")
    )
  }
  if(remove_input.value != ""){
    current_div.classList.remove(
      ...remove_input.value.toLowerCase().split(" ")
    )
  }
  empty_classes_array.push(...current_div.classList);
  empty_classes_array.sort();
  
  if(current_div.classList.length == 0){
    final_div.innerHTML = "No Classes To Show";
  }else{
    final_div.innerHTML = "";
  }
  if(add_input.value || remove_input.value){
    for(let i=0; i<empty_classes_array.length; i++){
      let span = document.createElement("span");
      span.innerHTML = empty_classes_array[i];
      final_div.append(span);
    }
  }
  add_input.value = "";
  remove_input.value = "";
}

add_input.onblur = add_remove;
remove_input.onblur = add_remove; 