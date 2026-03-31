/* 
    Regular expression => تتمة في الشرح
    . => اذا اجت لحالا بدون سلاش بتكون القصد منا انو تجاهل هذا الفراغ او الخانة 
    ex : \d...\d => 9   7 => هيك القصد

    ملاحظة : يمكن استخدام الريغيولار اكسبريشن في البحث ضمن ملف الفيجيوال استوديو
*/
// خاص بالشرح
let dot = /\d.\d/ig;
let dot2 = /\d.+\d\1?\2?/ig;
let dot3 = /\d.*\d\1?/ig; // \1 => تعني تكرار الغروب الاول (يعني التنسيق الاول) مرة واحدة و اذا بدنا نكرر الغروب الثاني منكتب سلاش 2 و هكذا
let dotre = "9 8";
let dotre2 = "9        834";
let dotre3 = "989";
console.log(dotre.match(dot));
console.log(dotre2.match(dot2));
console.log(dotre3.match(dot3));
// (year) خليني اشرح هون شو صار نحنا منطلب من المستخدم انو يقوم بادخال رقم من اربع خانات بمثل السنة و رقم من خانتين بمثل الشهر طيب وقت بقوم المستخدم بادخال الرقم الخاص بالسنة رح يتم تخزينو بالمجموعة التي اسمها 
let year1 = /(?<year>\d{4})-\d{2}|\d{2}-(?<year>\d{4})/;
let stryear = `2323-22`;
console.log(stryear.match(year1));
console.log(stryear.match(year1).groups.year); // و هيك منوصل للمجموعة البدنا ياها


// التكليف
let htt = "https://www.ahmad.com.ur/asdfs/sadfs/asdfas";
let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
console.log(htt.match(re));

// https?:\/\/ => http:// or https://
// (?:[-\w]+\.)? => ?:word.  zero or one
// ([-\w]+)\.\w+ => word.word
// (?:\.\w+)? => ?:.word  zero or one
// \/? => / zero or one
// .* => matches any character,