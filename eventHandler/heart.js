document.body.addEventListener('mousemove', mouseEventHeart);

chrome.runtime.onMessage.addListener((msg) => {
  document.body.removeEventListener('mousemove', mouseEventHeart)
});
