//colofulBall.js

function mouseEvent(e) {

  function trigger(e) {
  let obj = document.createElement('div');
  let ballSize = window.innerWidth/100;
  let randomBallSize = Math.trunc(Math.random() * ballSize) + 5;
  let ranXpos = ballSize + parseInt(e.clientX, 10);
  let ranYpos = ballSize + parseInt(e.clientY, 10);
  let ranH = Math.trunc(Math.random() * 360);
  let ranH2 =  Math.trunc(Math.random() * 360); 
  obj.style.position = 'fixed';
  obj.style.left = ranXpos + 'px';
  obj.style.width = randomBallSize + 'px';
  obj.style.height = randomBallSize + 'px';
  obj.style.backgroundColor = `hsl(${ranH}, 100%, 50%)`;
  obj.style.borderRadius = '50%';

  obj.animate([
    {top: (ranYpos + randomBallSize) + 'px',
	    backgroundColor: `hsl(${ranH}, 100%, 50%)`  },
    {top: (ranYpos - 10 )+ 'px'},
    {top: (ranYpos + randomBallSize) + 'px'},
    {top: ((ranYpos + 100 )+ randomBallSize) + 'px'},
    {top: (ranYpos + 80) + 'px',
      backgroundColor: `hsl(${ranH2}, 100%, 50%)` }
  ], {duration: 700,
      timing(timeFraction) {
      return 1 - Math.sin(Math.acos(timeFraction))}
  })
  
  document.body.appendChild(obj);
  setTimeout(() => obj.remove(), 700);
  return;
  }
  let num = parseInt(localStorage.mouseCounter);
  localStorage.mouseCounter = num + 1;
  if (num %  4 === 0 ) {
   trigger(e);
  }
}

document.body.addEventListener('mousemove', mouseEvent);

chrome.runtime.onMessage.addListener((msg) => {
  document.body.removeEventListener('mousemove', mouseEvent)
});
