document.body.addEventListener('mousemove', mouseEventStrawblueberry);
  
chrome.runtime.onMessage.addListener((msg) => {
  document.body.removeEventListener('mousemove', mouseEventStrawblueberry)
});
  
