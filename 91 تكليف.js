let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};

let mapMyInfo = new Map(Object.entries(myInfo));
console.log(Object.entries(myInfo));
console.log(mapMyInfo);
console.log(mapMyInfo.size);
console.log(mapMyInfo.has("role"));

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true