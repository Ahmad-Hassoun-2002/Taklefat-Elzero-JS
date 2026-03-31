let user = document.querySelector(".user");
let email = document.querySelector(".email");
let pass = document.querySelector(".pass");
let select = document.querySelector("select");

let dataObject = {
    user:"",
    email:"",
    password:"",
    selectOption:""
}

user.onblur = function(){
    dataObject.user = user.value;
    addObjectToSession();
}

email.onblur = function(){
    dataObject.email = email.value;
    addObjectToSession();
}

pass.onblur = function(){
    dataObject.password = pass.value;
    addObjectToSession();
}

select.onblur = function(){
    dataObject.selectOption = select.value;
    addObjectToSession();
}

function addObjectToSession(){
    window.sessionStorage.setItem("data",JSON.stringify(dataObject));
}

window.onload = function(){
    if(window.sessionStorage.getItem("data")){
        dataObject = JSON.parse(window.sessionStorage.getItem("data"))
        user.value = dataObject.user;
        email.value = dataObject.email;
        pass.value = dataObject.password;
        select.value = dataObject.selectOption;
    }
}