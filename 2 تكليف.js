//document.write("<h1 style=\"color: blue; font-size: 80px; font-weight: bold; text-align: center; font-family: Arial\">Elzero</h1>");

// OR

// document.write("<h1>Elzero</h1>");
// let a = document.querySelector("h1");
// a.style.color = "blue";
// a.style.fontSize = "80px";
// a.style.fontWeight = "bold";
// a.style.textAlign = "center"; 
// a.style.fontFamily = "Arial"; 

// OR

document.write("<h1>Elzero</h1>");
let a = document.querySelector("h1");
a.style.cssText = `color: blue;
font-size: 80px;
font-weight: bold;
text-align: center;
font-family: Arial`;