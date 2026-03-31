// أولاً: ننتظر تحميل الصفحة للتأكد من أن العناصر جاهزة
window.addEventListener('DOMContentLoaded', () => {
    // الحصول على العناصر
    const form = document.querySelector('.form');
    const textarea = form.querySelector('textarea');
    const button = form.querySelector('button');
    // ربط حدث الضغط على الزر
    button.addEventListener('click', () => {
        const text = textarea.value;
        // إنشاء ملف Blob من النص
        const blob = new Blob([text], { type: 'text/plain' });
        // إنشاء رابط لتحميل الملف
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = '168 text.txt'; // اسم الملف
        // تنفيذ التنزيل
        link.click();
        // تحرير الذاكرة
        URL.revokeObjectURL(link.href);
    });
}); 
/* 
    شرح الجزء الجديد بالكود:
    const blob = new Blob([text], { type: 'text/plain' });
    ----------------------------------------------------------
    الـ Blob دي كأنك بتكوّن "ملف" في الذاكرة.
    هنا كوّنا Blob يحتوي على النص.
    text/plain يعني إنه ملف نصي عادي (زي ملفات .txt).
    ----------------------------------------------------------
    const link = document.createElement('a');
    عملنا عنصر <a> (رابط) في الذاكرة (ما أضفناهوش للصفحة)
    ----------------------------------------------------------
    link.href = URL.createObjectURL(blob);
    حوّلنا الـ blob إلى رابط مؤقت يمكن للمتصفح تحميله.
    ----------------------------------------------------------
    link.download = 'text.txt';
    سمّينا الملف اللي هينزل بـ text.txt. المستخدم هينزله بالاسم ده.
    ----------------------------------------------------------
    link.click();
    خدعة جميلة! بنعمل كأننا ضغطنا على الرابط، فالمتصفح يبدأ تحميل الملف مباشرةً.
    ----------------------------------------------------------
    URL.revokeObjectURL(link.href);
    بعد ما خلصنا، بنقول للمتصفح: "امسح الرابط المؤقت عشان ما يستهلكش من الذاكرة".
*/