document.body.addEventListener('mousemove', mouseEventSpringCooler);
chrome.runtime.onMessage.addListener((msg) => {
document.body.removeEventListener('mousemove', mouseEventSpringCooler);
});
