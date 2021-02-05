//colofulBall.js

function mouseEvent(e) {
//let ranH = num %  360;

  function trigger(e) {
  let obj = document.createElement('div');
  let ballSize = window.innerWidth/100;
  let randomBallSize = Math.trunc(Math.random() * ballSize);
  let ranXpos = randomBallSize + parseInt(e.clientX, 10);
  let ranYpos = randomBallSize + parseInt(e.clientY, 10) + 10;
//  let ranH = Math.trunc(Math.random() * 360);
  obj.style.position = 'fixed';
  obj.style.left = ranXpos + 'px';
  obj.style.width = ballSize + 'px';
  obj.style.height = ballSize + 'px';
  obj.style.backgroundColor = `hsl(${ranH}, 100%, 50%)`;
  obj.style.borderRadius = '50%';

  obj.animate([
    {top: (ranYpos + randomBallSize) + 'px',
	    transform: 'scale(1,1)',
     backgroundColor: `hsl(${ranH}, 100%, 50%)`},
    {top: ranYpos + 'px',
    transform: 'scale(0.8, 0.8)',
    backgroundColor: `hsl(${ranH + 10}, 100%, 50%)`},
    {top: (ranYpos + randomBallSize) + 'px',
    transform: 'scale(1,1)',
    backgroundColor: `hsl(${ranH + 20}, 100%, 50%)`},
    {top: ranYpos + 'px',
    transform: 'scale(0.8, 0.8)',
    backgroundColor: `hsl(${ranH + 30}, 100%, 50%)`},
  ], 500)
  
  document.body.appendChild(obj);
  setTimeout(() => obj.remove(), 400);
  return;
  }
  let num = parseInt(localStorage.mouseCounter);
  localStorage.mouseCounter = num + 1;
  let ranH = num %  360;

  if (num %  2 === 0 ) {
   trigger(e);
  trigger(e);trigger(e);trigger(e);trigger(e);trigger(e);trigger(e);
  }
}

document.body.addEventListener('mousemove', mouseEvent);

chrome.runtime.onMessage.addListener((msg) => {
  document.body.removeEventListener('mousemove', mouseEvent)
});
