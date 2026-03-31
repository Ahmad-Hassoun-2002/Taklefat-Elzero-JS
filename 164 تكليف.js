// Github URL
// ركز في بملف ال html طريقتين فوت و قراهن
let git = new XMLHttpRequest();
git.open("GET" , "https://api.github.com/users/ElzeroWebSchool/repos");
git.send();
git.onreadystatechange = function () {
    if (this.status === 200 && this.readyState === 4) {
        let myResponse_1 = JSON.parse(this.responseText);
        for(let i = 0 ; i < 15 ; i++){
            let tab = document.querySelector("table");
            let tb = document.createElement("tbody");
            let tr = document.createElement("tr");
            let td0 = document.createElement("td");
            let td0N = document.createTextNode(`${myResponse_1[i].name}`);
            td0.appendChild(td0N);
            tr.appendChild(td0);
            tb.appendChild(tr);
            tab.appendChild(tb);
            let td1 = document.createElement("td");
            let td1N = document.createTextNode(`${myResponse_1[i].stargazers_count}`);
            td1.appendChild(td1N);
            tr.appendChild(td1);
            tb.appendChild(tr);
            tab.appendChild(tb);
            let td2 = document.createElement("td");
            let lin = document.createElement("a");
            lin.innerHTML = "Visit";
            lin.href = myResponse_1[i].url;
            td2.appendChild(lin);
            tr.appendChild(td2);
            tb.appendChild(tr);
            tab.appendChild(tb);
        }
    }
};
// "https://api.github.com/users/ElzeroWebSchool/repos"