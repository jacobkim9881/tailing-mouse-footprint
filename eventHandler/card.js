document.body.addEventListener('mousemove', mouseEventCard);

chrome.runtime.onMessage.addListener((msg) => {
document.body.removeEventListener('mousemove', mouseEventCard)
document.getElementById('card-obj-playing').remove();

});
