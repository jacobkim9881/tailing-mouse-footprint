//stop.js

function mouseEvent(e) {
  return;
}

document.body.addEventListener('mousemove', mouseEvent);

chrome.runtime.onMessage.addListener((msg) => {
  document.body.removeEventListener('mousemove', mouseEvent)
});
