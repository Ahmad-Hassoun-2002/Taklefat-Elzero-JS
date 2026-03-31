function getDataPromise() {
    return new Promise((resolve, reject) => {
        let myRequest = new XMLHttpRequest();
        myRequest.onload = () => {
        if (myRequest.status === 200 && myRequest.readyState === 4) {
            resolve(JSON.parse(myRequest.responseText));
        } else {
            reject(Error("No Data Found"));
        }
    };
    // put the path of json Object file
    myRequest.open("GET", "./120 تكليف.json");
    myRequest.send();
    });
}
getDataPromise().then((res) => {
    res.length = 5;
    return res;
}).then((resolve) => {
    for (let i = 0; i < resolve.length; i++) {
        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        let p = document.createElement("p");
        h3.innerHTML = resolve[i].title;
        p.innerHTML = resolve[i].description;
        div.appendChild(h3);
        div.appendChild(p);
        document.body.appendChild(div);
}}).catch((reason) => console.log(reason));