//colofulBall.js

function mouseEvent(e) {

  function trigger(e) {
  let obj = document.createElement('div');
  let ballSize = window.innerWidth/100;
  let randomBallSize = Math.trunc(Math.random() * ballSize);
  let ranXpos = randomBallSize + parseInt(e.clientX, 10);
  let ranYpos = randomBallSize + parseInt(e.clientY, 10);
  let ranH = Math.trunc(Math.random() * 360);
  obj.style.position = 'fixed';
  obj.style.left = ranXpos + 'px';
  obj.style.width = ballSize + 'px';
  obj.style.height = ballSize + 'px';
  obj.style.backgroundColor = `hsl(${ranH}, 100%, 50%)`;
  obj.style.borderRadius = '50%';

  obj.animate([
    {top: (ranYpos + randomBallSize) + 'px'},
    {top: ranYpos + 'px'},
    {top: (ranYpos + randomBallSize) + 'px'},
  ], 200)
  
  document.body.appendChild(obj);
  setTimeout(() => obj.remove(), 200);
  return;
  }
  let num = parseInt(localStorage.mouseCounter);
  localStorage.mouseCounter = num + 1;
  if (num %  3 === 0 ) {
   trigger(e);
  }
}

document.body.addEventListener('mousemove', mouseEvent);

chrome.runtime.onMessage.addListener((msg) => {
  document.body.removeEventListener('mousemove', mouseEvent)
});
