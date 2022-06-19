document.body.addEventListener('mousemove', mouseEventColorSpring);
chrome.runtime.onMessage.addListener((msg) => {
  document.body.removeEventListener('mousemove', mouseEventColorSpring);
});
