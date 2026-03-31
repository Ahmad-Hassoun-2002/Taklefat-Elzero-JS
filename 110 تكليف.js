// Needed Output
let monthes = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
let dateFull = new Date();
dateFull.setDate(0);
console.log(dateFull.toLocaleString("en-US",([],{month:'long'}))); // ركز هون هي ميثود بتسمحلك تجيب اسم الشهر بدون ما تحطو بمصفوفة و مدري شو ... بدا شوية تركيز اذا ما فهمتا بس ابحث عنا عادي
console.log(dateFull);
console.log(`Previous Month Is ${dateFull.toLocaleString("en-US",([],{month:'long'}))} And Last Day Is ${dateFull.getDate()}`);
console.log(`Previous Month Is ${monthes[dateFull.getMonth()]} And Last Day Is ${dateFull.getDate()}`);
console.log(dateFull.getMonth());
// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"