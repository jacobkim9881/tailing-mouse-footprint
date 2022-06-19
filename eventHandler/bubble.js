document.body.addEventListener('mousemove', bubble);
chrome.runtime.onMessage.addListener((msg) => {
  document.body.removeEventListener('mousemove', bubble)
});
