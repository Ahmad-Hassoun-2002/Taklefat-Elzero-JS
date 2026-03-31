const myData = {
    user: "Elzero",
    age: 41,
    country: "Egypt",
};

// Your Code Here

let cloned = new Object(myData);
let cloned1 = [];
Object.assign(cloned1,myData);
let cloned2 = {...myData};
let cloned3 = JSON.parse(JSON.stringify(myData));
let cloned4 =  structuredClone(myData);

console.log(cloned); // {user: 'Elzero', age: 41, country: 'Egypt'}
console.log(cloned1); // {user: 'Elzero', age: 41, country: 'Egypt'}
console.log(cloned2); // {user: 'Elzero', age: 41, country: 'Egypt'}
console.log(cloned3); // {user: 'Elzero', age: 41, country: 'Egypt'}
console.log(cloned4); // {user: 'Elzero', age: 41, country: 'Egypt'}