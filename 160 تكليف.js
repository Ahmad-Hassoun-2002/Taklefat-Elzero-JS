let myData = ["Osama", "Mohamed", "Elsayed", "Elzero"];

// Write Your Code Here
// Object.freeze(myData);
// Object.defineProperty(myData, 'push', {
//     value: function() {
//         return undefined; 
//     }
// });
// Object.seal(myData);
// myData.push = function() {};
Object.defineProperty(myData, 'push', {
    value: function() {
      // لا نفعل شيء هنا، لن تتم إضافة أي عنصر جديد
        return undefined;
    },
    writable: false, // لا يمكن تعديل الدالة لاحقاً
    configurable: false // لا يمكن حذفها أو تعديلها
});
myData.push("Name");
console.log(myData); // ['Osama', 'Mohamed', 'Elsayed', 'Elzero']
console.log(myData.length); // ['Osama', 'Mohamed', 'Elsayed', 'Elzero']