function dashBetweenOdd(num) {
    // Write Your Code Here
    let a = num.toString().split("");
    let ab = [];
    for(let i = 0 ; i < a.length ; i++){
        ab.push(a[i]);
        if(i < a.length - 1){
            if((a[i] % 2 != 0)&&(a[i + 1] % 2 != 0)){
                ab.push("-");
            }
        }
    }
    return ab.join("");
}

console.log(dashBetweenOdd(150653127)); // 1-5065-3-127
console.log(dashBetweenOdd(5314557922)); // 5-3-145-5-7-922

// OR

function dashBetweenOdd2(num) {
    // تحويل الرقم إلى سلسلة نصية
    let numStr = num.toString();
    let result = "";
    for (let i = 0; i < numStr.length; i++) {
        result += numStr[i];
    // التحقق من أن الرقم الحالي والذي يليه فرديان
        if (i < numStr.length - 1 && numStr[i] % 2 !== 0 && numStr[i + 1] % 2 !== 0) {
            result += "-";
        }
    }
    return result;
}

console.log(dashBetweenOdd2(150653127)); // 1-5065-3-127
console.log(dashBetweenOdd2(5314557922)); // 5-3-145-5-7-922