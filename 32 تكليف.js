let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.push("Gamal"); // هون مشان رجعا متل ما كانت
console.log(myFriends.slice(num - num , num)); // ["Ahmed", "Elham", "Osama"];

// Method 3
console.log(myFriends.reverse().slice(num * -true).reverse());

// Method 3
myFriends.reverse(); // هون مشان رجعا متل ما كانت
myFriends.reverse().shift();
myFriends.reverse();
console.log(myFriends);