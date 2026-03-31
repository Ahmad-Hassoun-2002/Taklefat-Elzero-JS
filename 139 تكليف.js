let st = "elzero";
console.log(st[0].toUpperCase() + st.slice(1,));
console.log(st[0].toUpperCase() + st.substring(1,));
console.log(st[0].toUpperCase() + st.substr(1,));
console.log(st.replace(/^./, st[0].toUpperCase()));
console.log(`${st[0].toUpperCase()}${st.slice(1)}`);
console.log(st.split('').map((c, i) => i === 0 ? c.toUpperCase() : c).join(''));
console.log(st.slice(0, 1).toUpperCase() + st.slice(1));
console.log(st.replace(st[0], st[0].toUpperCase()));
console.log(st.at(0).toUpperCase() + st.slice(1));
console.log([...st].map((c, i) => i === 0 ? c.toUpperCase() : c).join(''));
// Output Needed
// "Elzero"
// "Elzero"
// "Elzero"
// "Elzero"
// "Elzero"
// "Elzero"
// "Elzero"