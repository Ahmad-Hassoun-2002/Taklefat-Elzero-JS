let st = "Elzero";
console.log(st.slice(-1));
console.log(st.substring(st.length - 1));
console.log(st.substr(-1));
console.log(st.split("").map((ele , ind) => (ind === st.length -1)? ele : "").join(""));
console.log(st.split("").filter((_ , ind) => ind === st.length -1).join(""));
console.log([...st].reduce((_ , le) => le));
console.log(st.at(st.length - 1));
console.log(st.charAt(st.length - 1));
console.log(st[st.length - 1]);
// Needed Output
// "o"
// "o"
// "o"
// "o"
// "o"
// "o"
// "o"