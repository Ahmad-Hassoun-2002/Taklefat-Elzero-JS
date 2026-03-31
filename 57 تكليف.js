let myString = "EElllzzzzzzzeroo";

let result = myString.split("").filter(function (ele , index){
    while(myString[index] !== myString[index + true]){
        return myString[index];
    }
}).join("");

console.log(result);

// OR

let noRepeat = myString.split("").filter(function(ele,index,array){
    return array.indexOf(ele) === index ; // رح اشرح هون شغلة: اول شي نحنا منعرف انو الانديكس اوف بتبحث من الاول طيب بدنا الانديكس اوف اول حرف والي هوي أي شو بصير عادي الشرط محقق بياخدو طيب التاني الي هوي كمان أي الشرط غير محقق لانو رح يعطيك قيمة الانديكس الأول يعني لاول حرف بيوصلو لهيك ما بيتاخد
}).reduce((fr,sc) => `${fr}${sc}`);
console.log(noRepeat);

// Elzero