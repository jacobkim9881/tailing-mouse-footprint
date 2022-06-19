document.body.addEventListener('mousemove', mouseEventPetal);

chrome.runtime.onMessage.addListener((msg) => {
document.body.removeEventListener('mousemove', mouseEventPetal);

});
