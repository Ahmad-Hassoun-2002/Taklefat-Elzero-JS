let myRequest = new XMLHttpRequest();
myRequest.open("GET" , "./116 تكليف.json");
myRequest.send();

let divP = document.createElement("div");
divP.id = "data";
myRequest.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
        let mainData = JSON.parse(this.responseText);
        console.log(mainData);
        for(let i in mainData){
            mainData[i].category = "All";
            let divi = document.createElement("div");
            let h2 = document.createElement("h2");
            let paragraphO = document.createElement("p");
            let paragraphT = document.createElement("p");
            let paragraphTh = document.createElement("p");
            let h2P = document.createTextNode(mainData[i].title);
            let paragraphOPar = document.createTextNode(mainData[i].body);
            let paragraphTPar = document.createTextNode(mainData[i].category);
            let paragraphThPar = document.createTextNode(mainData[i].author);
            h2.appendChild(h2P);
            paragraphO.appendChild(paragraphOPar);
            paragraphT.appendChild(paragraphTPar);
            paragraphTh.appendChild(paragraphThPar);
            divi.appendChild(h2);
            divi.appendChild(paragraphO);
            divi.appendChild(paragraphT);
            divi.appendChild(paragraphTh);
            divP.appendChild(divi);
        }
    }
}
document.body.appendChild(divP);

// OR

let mainDate = [
    {
      id: 1,
      title: "Title 1",
      body: "Article Number 1 Body",
      category: "Topic",
      author: "Youssef",
    },
    {
      id: 2,
      title: "Title 2",
      body: "Article Number 2 Body",
      category: "Topic",
      author: "Mahmoud",
    },
    {
      id: 3,
      title: "Title 3",
      body: "Article Number 3 Body",
      category: "Topic",
      author: "Osama",
    },
    {
      id: 4,
      title: "Title 4",
      body: "Article Number 4 Body",
      category: "Topic",
      author: "Moustafa",
    },
    {
      id: 5,
      title: "Title 5",
      body: "Article Number 5 Body",
      category: "Topic",
      author: "Ahmed",
    },
  ];
console.log(mainDate);
let mainDiv = document.createElement("div");
mainDate.id = "data1";

for (let i = 0; i < mainDate.length; i++) {
    let h2 = document.createElement("h2");
    h2.innerHTML = mainDate[i].title;
    let pOne = document.createElement("p");
    pOne.innerHTML = mainDate[i].body;
    let pTwo = document.createElement("p");
    pTwo.innerHTML = `author :${mainDate[i].author}`;
    let pThree = document.createElement("p");
    pThree.innerHTML = mainDate[i].category;
    mainDiv.appendChild(h2);
    mainDiv.appendChild(pOne);
    mainDiv.appendChild(pTwo);
    mainDiv.appendChild(pThree);
}

document.body.appendChild(mainDiv);