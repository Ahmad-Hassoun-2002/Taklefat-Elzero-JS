function popup(){
    let cont = document.createElement("div");
    cont.className = "container";
    cont.style.cssText =`text-align: center;
    width: 500px;
    height: 150px;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 400px);
    background-color: blueviolet;
    color: white;
    border-radius: 10px;
    box-shadow: 4px 3px 7px #2f0043;`;
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let textH2 = document.createTextNode("Welcome");
    let textp = document.createTextNode("Welcome To Elzero Web School");
    p.className = h2.className = "text";
    p.style.cssText = h2.style.cssText = `
    position: relative;
    top: 25%;`;
    let squar = document.createElement("span");
    let textSq = document.createTextNode("X");
    squar.style.cssText = `background-color: red;
    width: 40px;
    display: flex;
    height: 40px;
    border: none;
    border-radius: 50%;
    text-align: center;
    position: absolute;
    right: -20px;
    top: -15px;
    outline: white solid 4px;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;`;
    squar.append(textSq);
    h2.append(textH2);
    p.append(textp);
    cont.append(h2);
    cont.append(p);
    cont.append(squar);
    document.body.appendChild(cont);

    squar.onclick = function(){
        cont.remove();
    }
}

setTimeout(popup , 5000);

// OR

/* let popup = document.querySelector(".popup");
let but = document.querySelector("button");

window.onload = function(){
    setTimeout(function(){
    popup.style.display = "block"
    },3000)
}

but.onclick = function(){
    popup.style.display = "none"
} */

// with html code =>
/*
    <div class="popup">
        <h1>Welcome</h1>
        <p>Welcome To Elzero Web School</p>
        <button>x</button>
    </div>
*/

// with css code =>
/* 
    body{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 98vh;
        font-family: Arial, Helvetica, sans-serif;
        flex-direction: column;
    }   
    .popup{
        padding: 5px 100px;
        box-shadow: 0 2px 18px 5px #ddd;
        text-align: center;
        position: relative;
        border-radius: 9px;
        display: none;
        transition: 1s;
    }
    button{
        background-color: red;
        color: #fff;
        font-weight: bold;
        font-size: 17px;
        border: none;
        border-radius: 50%;
        width: 35px;
        height: 35px;
        position: absolute;
        top: -10px;
        right: -10px;
        cursor: pointer;   
    }  
    h1{
        margin: 0;
        font-size: 30px;
        margin-top: 10px;  
    } 
    p{
        font-size: 20px;
    }
*/