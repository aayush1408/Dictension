chrome.runtime.onMessage.addListener(reciever);
var word = '';
function reciever(request, sender, sendResponse) {
    console.log(request);
    word = request.text;
}