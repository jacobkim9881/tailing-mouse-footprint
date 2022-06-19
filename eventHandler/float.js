document.body.addEventListener('mousemove', mouseEventFloat);

chrome.runtime.onMessage.addListener((msg) => {
  document.body.removeEventListener('mousemove', mouseEventFloat);
});
