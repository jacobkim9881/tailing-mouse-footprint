//colofulBall.js

function mouseEvent(e) {

  function trigger(e) {
  let obj = document.createElement('div');  	  
  let ballSize = window.innerWidth/100;
  let randomBallSize = Math.trunc(Math.random() * ballSize);
  let ranXpos = parseInt(e.clientX, 10);
  let ranYpos = parseInt(e.clientY, 10);
//  let ranH = Math.trunc(Math.random() * 360);
  obj.className = 'flubbers'	  
  obj.style.position = 'fixed';
  obj.style.left = ranXpos + 'px';
  obj.style.width = ballSize + 'px';
  obj.style.height = ballSize + 'px';
  obj.style.backgroundColor = `hsl(${ranH}, 100%, 50%)`;
  obj.style.borderRadius = '50%';
obj.style.top= ranYpos + 'px';


  obj.animate([
    {top: (ranYpos * 0.96) + 'px',
	    transform: 'scale(1,1)',
	    width: (ballSize * 1.1) + 'px',
	    borderRadius: '70% 70% 50% 50%',
	    opacity: '1',
     backgroundColor: `hsl(${ranH}, 100%, 50%)`},
    {top: (ranYpos * 0.8 )+ 'px',
    transform: 'scale(0.95, 0.95)',
	    width: (ballSize * 0.95) + 'px',
	    borderRadius: '50% 50% 50% 50%',
	    opacity: '1',

    backgroundColor: `hsl(${ranH + 10}, 100%, 50%)`},
    {top: (ranYpos * 0.6) + 'px',
    transform: 'scale(1,1)',
	    width: (ballSize * 1.05) + 'px',
 borderRadius: '60% 60% 50% 50%',
	    opacity: '0.8',

    backgroundColor: `hsl(${ranH + 20}, 100%, 50%)`},
    {top: (ranYpos * 0.3) + 'px',
    transform: 'scale(0.95, 0.95)',
    width: (ballSize * 1) + 'px',
 borderRadius: '50% 50% 50% 50%',
	    opacity: '0.3',

    backgroundColor: `hsl(${ranH + 30}, 100%, 50%)`},
  ], 5000)
  
  document.body.appendChild(obj);
  setTimeout(() => obj.remove(), 4900);
  return;
  }

  let num = parseInt(localStorage.mouseCounter);
  localStorage.mouseCounter = num + 1;
  let ranH = num %  360;

  if (num %  14 === 0 ) {
   trigger(e);

  }
}

function clickEvent() {
let objs = document.getElementsByClassName('flubbers');
console.log(objs[0].backgroundColor)
}

document.body.addEventListener('mousemove', mouseEvent);
document.body.addEventListener('click', clickEvent);

chrome.runtime.onMessage.addListener((msg) => {
  document.body.removeEventListener('mousemove', mouseEvent);
  document.body.removeEventListener('click', clickEvent);
});
