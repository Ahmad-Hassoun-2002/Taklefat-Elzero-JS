let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
let setMyFriends = new Set(myFriends.sort());
console.log(Array(...setMyFriends));
console.log(...setMyFriends);
// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']