document.body.addEventListener('mousemove', mouseEventBubble);
chrome.runtime.onMessage.addListener((msg) => {
  document.body.removeEventListener('mousemove', mouseEventBubble)
});
