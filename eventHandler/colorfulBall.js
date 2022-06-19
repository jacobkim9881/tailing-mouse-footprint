document.body.addEventListener('mousemove', mouseEventColorfulBall);

chrome.runtime.onMessage.addListener((msg) => {
  document.body.removeEventListener('mousemove', mouseEventColorfulBall)
});
