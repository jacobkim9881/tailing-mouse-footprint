document.body.addEventListener('mousemove', mouseEventDna);

chrome.runtime.onMessage.addListener((msg) => {
  document.body.removeEventListener('mousemove', mouseEventDna)
});
