//letter.js
function mouseEvent(e) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'

  let obj = document.createElement('div');
  let ranXpos = Math.trunc(Math.random() * 10) + parseInt(e.clientX, 10);
  let ranYpos = Math.trunc(Math.random() * 10) + parseInt(e.clientY, 10);
  let ran15 = Math.trunc(Math.random() * 20) + 5;
  let ranAlpha = Math.trunc(Math.random() * alphabet.length);
  obj.style.position = 'fixed';
  obj.style.top = ranYpos + 'px';
  obj.style.left = ranXpos + 'px';
  obj.innerText = alphabet[ranAlpha];
  obj.style.fontSize = ran15 + 'px';
      
  obj.animate([
    {opacity: 1}, 
    {opacity: 0}
  ], 200) 
  
  document.body.appendChild(obj);
  setTimeout(() => obj.remove(), 200);
  return;
}

document.body.addEventListener('mousemove', mouseEvent);

chrome.runtime.onMessage.addListener((msg) => {
document.body.removeEventListener('mousemove', mouseEvent)
});
