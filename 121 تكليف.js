function getDataFetch() {
    // put the path of json Object file
    fetch("./120 تكليف.json").then((res) => {
        let myData = res.json();
        console.log(myData);
        return myData;
    }).then((ful) => {
            ful.length = 5;
            return ful;
        }).then((finall) => {
        for (let i = 0; i < finall.length; i++) {
            let div = document.createElement("div");
            let h3 = document.createElement("h3");
            let p = document.createElement("p");
            h3.innerHTML = finall[i].title;
            p.innerHTML = finall[i].description;
            div.appendChild(h3);
            div.appendChild(p);
            document.body.appendChild(div);
        }
    });
}

getDataFetch();