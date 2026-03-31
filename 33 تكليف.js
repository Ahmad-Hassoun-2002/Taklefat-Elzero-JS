let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop();
friends.shift();
console.log(friends); // ["Eman", "Osama"]

friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.splice(false,true);
friends.splice(-true,true);
console.log(friends); // ["Eman", "Osama"]