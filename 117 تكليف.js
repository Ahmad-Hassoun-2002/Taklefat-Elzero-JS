// Needed Output

let AjaxJson = new XMLHttpRequest();
AjaxJson.open("GET" , "./116 تكليف.json");
AjaxJson.send();
console.log(AjaxJson);

AjaxJson.onreadystatechange = function () {
    if (this.status === 200 && this.readyState === 4) {
        let myResponse_1 = JSON.parse(this.responseText);
        console.log(myResponse_1);
        console.log("Data Loaded");
    }
};
// "JSON Object Content Here"
// "Data Loaded"