let str = "i lovE elzeRO weB schOOL";
let s = "";
str.split(" ").map(ele => {
    s += ele.slice(0,1).toUpperCase() + ele.slice(1,).toLowerCase() + " ";
    return s;
});
let result = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
console.log(s);
console.log(result);
// Output Needed
// "I Love Elzero Web School"