let divOne = document.querySelector(".one");
let divTwo = document.querySelector(".two");
let oneText = divOne.textContent;
let twoText = divTwo.textContent;
let oneTitle = divOne.title;
let twoTitle = divTwo.title;

divOne.title = twoTitle;
divTwo.title = oneTitle;

divOne.textContent = twoText;
divTwo.textContent = `${oneText} ${("ab").length}`;