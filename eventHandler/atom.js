document.body.addEventListener('mousemove', mouseEventAtom);

chrome.runtime.onMessage.addListener((msg) => {
  document.body.removeEventListener('mousemove', mouseEventAtom);
  displayToggleObj('none');
});
 


