// Write Your Function Here
function customCalc(...args) {
    let numbers = [];
    // فلترة وتحويل المدخلات لأرقام فقط
    for (let item of args) {
        let num = +item;
        if (!isNaN(num)) {
            numbers.push(num);
        }
    }
    if (numbers.length === 0) return 0;
    let sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum * numbers[0] * numbers[numbers.length - 1];
}
console.log(customCalc("10", 20, "A", "40", 15));
// 12750 <= (10 + 20 + 40 + 15) * 10 * 15

console.log(customCalc(5, "15", 10, 5, 10));
// 2250 <= (5 + 15 + 10 + 5 + 10) * 5 * 10

console.log(customCalc(30, 5, "C", 10));
// 13500 <= (30 + 5 + 10) * 30 * 10