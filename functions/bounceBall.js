//bounce_ball.js

  function trigger(num, ranH, ranXpos, ranYpos, e) {
  let obj = document.createElement('div');
  let ballSize = window.innerWidth/100;
  let jumpHeight = window.innerWidth/40;	  
  let randomBallSize = Math.trunc(Math.random() * ballSize);
  obj.style.position = 'fixed';
  obj.style.left = ranXpos + 'px';
  obj.style.width = ballSize + 'px';
  obj.style.height = ballSize + 'px';
  obj.style.backgroundImage = `linear-gradient(120deg, hsl(${ranH}, 100%, 50%), hsl(${ranH}, 100%, 40%))`;
;
  obj.style.borderRadius = '50%';
obj.style.top= ranYpos + 'px';


  obj.animate([
    {top: (ranYpos + jumpHeight) + 'px',
	    transform: 'scale(1,1)',
	    width: (ballSize * 1.1) + 'px',
	    borderRadius: '50% 50% 50% 50%',
	    boxShadow: `0px ${0}px 5px -${ballSize * 0.1}px hsl(0, 0%, 50%)`, 
     backgroundImage: `linear-gradient(120deg, hsl(${ranH}, 100%, 50%), hsl(${ranH}, 100%, 40%))`},
    {top: ranYpos + 'px',
    transform: 'scale(0.95, 1.05)',
	    width: (ballSize * 0.95) + 'px',
	    borderRadius: '50% 50% 50% 50%',
	    boxShadow: `0px ${jumpHeight}px 5px -${ballSize * 0.3}px hsl(0, 0%, 50%)`, 

    backgroundImage: `linear-gradient(120deg, hsl(${ranH}, 100%, 50%), hsl(${ranH}, 100%, 40%))`},
    {top: (ranYpos + jumpHeight) + 'px',
    transform: 'scale(1,1)',
	    width: (ballSize * 1.05) + 'px',
 borderRadius: '70% 70% 50% 50%',
	    boxShadow: `0px ${0}px 5px -${ballSize * 0.1}px hsl(0, 0%, 50%)`, 

    backgroundImage: `linear-gradient(120deg, hsl(${ranH}, 100%, 50%), hsl(${ranH}, 100%, 40%))`},
    {top: (ranYpos ) + 'px',
    transform: 'scale(0.95, 1.05)',
    width: (ballSize * 1) + 'px',
 borderRadius: '50% 50% 50% 50%',
	    boxShadow: `0px ${jumpHeight}px 5px -${ballSize * 0.3}px hsl(0, 0%, 50%)`, 

    backgroundImage: `linear-gradient(120deg, hsl(${ranH}, 100%, 50%), hsl(${ranH}, 100%, 40%))`},
    {top: (ranYpos + jumpHeight) + 'px',
    transform: 'scale(1,1)',
	    width: (ballSize * 1.05) + 'px',
 borderRadius: '70% 70% 50% 50%',
	    boxShadow: `0px ${0}px 5px -${ballSize * 0.1}px hsl(0, 0%, 50%)`, 

    backgroundImage: `linear-gradient(120deg, hsl(${ranH}, 100%, 50%), hsl(${ranH}, 100%, 40%))`}

  ], {duration: 1200, iterations: Infinity})
  
  document.body.appendChild(obj);
  setTimeout(() => obj.remove(), 2000);
  return;
  }

function mouseEvent(e) {
  let num = parseInt(localStorage.mouseCounter);
  localStorage.mouseCounter = num + 1;
  let ranH = num %  360;
  let ranXpos = parseInt(e.clientX, 10);
  let ranYpos = parseInt(e.clientY, 10);  	  

  if (num %  (Math.trunc(window.innerHeight/50)) === 0 ) {
   trigger(num, ranH, ranXpos, ranYpos, e);

  }
}

function clickEvent(e) {
  let num = parseInt(localStorage.mouseCounter);
  localStorage.mouseCounter = num + 1;
  let ranH = num %  360;
  let ranXpos = parseInt(e.clientX, 10);
  let ranYpos = parseInt(e.clientY, 10);  	  

  if (num %  3 === 0 ) {
   trigger(num, ranH, ranXpos, ranYpos, e);

  }
}

document.body.addEventListener('mousemove', mouseEvent);
document.body.addEventListener('click', clickEvent);

chrome.runtime.onMessage.addListener((msg) => {
  document.body.removeEventListener('mousemove', mouseEvent)
  document.body.removeEventListener('click', clickEvent)

});
