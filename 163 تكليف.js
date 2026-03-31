// Message Needed In Output
let messageShown = false;

document.addEventListener('keydown', function (event) {
    if (!messageShown && event.ctrlKey && event.altKey && event.shiftKey) {
        console.log("You Pressed Ctrl + Alt + Shift");
        messageShown = true;
    }
    setTimeout(() => {
        messageShown = false;
    }, 1000);
});
// "You Pressed Ctrl + Alt + Shift"