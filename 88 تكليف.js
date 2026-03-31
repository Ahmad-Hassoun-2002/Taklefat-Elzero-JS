let chosen = 1;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here


let [one, two, three] = myFriends;

chosen === 1 ? printDetails(one) : chosen === 2 ? printDetails(two) : chosen === 3 ? printDetails(three) : "Not Found";

function printDetails({ title: n, age: a_6, available: v, skills: [, skillTwo] } = myFriends[chosen - 1]){
    console.log(n);
    console.log(a_6);
    console.log(`${v ? "" : "Not"} Available`);
    console.log(skillTwo);
}

// If chosen === 1

/* "Osama"
39
"Available"
"CSS" */

// If chosen === 2

/* "Ahmed"
25
"Not Available"
"Django" */

// If chosen === 3

/* "Sayed"
33
"Available"
"Laravel" */