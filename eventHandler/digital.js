document.body.addEventListener('mousemove', mouseEventDigital);

chrome.runtime.onMessage.addListener((msg) => {
  document.body.removeEventListener('mousemove', mouseEventDigital)
});
