//baseFunction.js
//Add mouse events for decorating

function mouseEvent(e) {

  function trigger(e, background) {
  let obj = document.createElement('div');
  let flakeSize = window.innerWidth/100;
  obj.id = 'obj' + sec;
  x = e.clientX;
  y = e.clientY;
  let bottomY = window.innerHeight - 30;
  obj.style.position = 'fixed';
  obj.style.width = flakeSize + 'px';
  obj.style.height = flakeSize + 'px';
  obj.style.borderRadius = '50%';
  obj.style.backgroundImage = `radial-gradient(circle, hsl(0, 0%, 70%), hsl(0, 0%, 90%))`;
  obj.style.left = x + 'px';
  
  if (background) {
    x = Math.trunc(Math.random() * window.innerWidth);
    obj.style.left = x + 'px';
    obj.animate([
      {top: 0 + 'px'},
      {top: bottomY + 'px'}
    ], 16000)

  } else {
    obj.animate([
      {top: y + 'px'},
      {top: bottomY + 'px'}
    ], 8000)
  }

  document.body.appendChild(obj);
  setTimeout(() => obj.remove(), 8000)
  return;
  }
 
  let sec = new Date().getSeconds();
  let id = document.getElementById('obj' + sec);
  let ran2000 = Math.trunc(Math.random() * 2000);

  if (id === null) {
    trigger(e, 0);
    setTimeout(() => trigger(e, 1), ran2000);
  }
}

document.body.addEventListener('mousemove', mouseEvent);

chrome.runtime.onMessage.addListener((msg) => {
  document.body.removeEventListener('mousemove', mouseEvent)
});
