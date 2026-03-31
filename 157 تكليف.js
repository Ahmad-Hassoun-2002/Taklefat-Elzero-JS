// Write Your Code Here
smallLetters = "";
for(let i = 97 ; i < 123 ; i++){
    smallLetters += String.fromCharCode(i);
}
let smallLetters2 = Array.from({length: 26}, (_, i) => String.fromCharCode(97 + i)).join('');
let smallLetters3 = [...Array(26)].reduce((acc, _, i) => acc + String.fromCharCode(97 + i), '');
let smallLetters4 = '';
let i = 97;
while (i <= 122) {
    smallLetters4 += String.fromCharCode(i);
    i++;
}

console.log(smallLetters); // abcdefghijklmnopqrstuvwxyz
console.log(smallLetters2); // abcdefghijklmnopqrstuvwxyz
console.log(smallLetters3); // abcdefghijklmnopqrstuvwxyz
console.log(smallLetters4); // abcdefghijklmnopqrstuvwxyz