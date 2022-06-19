document.body.addEventListener('mousemove', mouseEventLetter);

chrome.runtime.onMessage.addListener((msg) => {
  document.body.removeEventListener('mousemove', mouseEventLetter)
});
