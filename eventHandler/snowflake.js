document.body.addEventListener('mousemove', mouseEventSnowflake);

chrome.runtime.onMessage.addListener((msg) => {
  document.body.removeEventListener('mousemove', mouseEventSnowflake)
});
