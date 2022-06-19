document.body.addEventListener('mousemove', mouseEventHeart1);

chrome.runtime.onMessage.addListener((msg) => {
  document.body.removeEventListener('mousemove', mouseEventHeart1)
});
