//snowflake.js

function mouseEvent(e) {

  function trigger(e, moveX) {
  let mouseMoveCounter = localStorage.mouseCounter;
  let obj = document.createElement('div');
  let ranXpos = Math.trunc(Math.random() * 15) + parseInt(e.clientX, 10);
  let ranYpos = Math.trunc(Math.random() * 10) + parseInt(e.clientY, 10);
  let ran10 = Math.trunc(Math.random() * 5) + window.innerWidth/100;
  let ranYpos2 = ranYpos + ran10;
  let secLeft = ranXpos + ran10/2; 
  obj.style.position = 'fixed';
  if (moveX === 1) { 
    obj.style.left = - secLeft + 'px';
  } else {
    obj.style.left = ranXpos + 'px';
  }  
  obj.style.width = ran10 + 'px';
  obj.style.height = ran10 + 'px';
  obj.style.backgroundColor = `hsl(0, 100%, 50%)`;
  obj.style.borderRadius = '50%';  
  obj.style.transform = 'skewY(25deg)';

  obj.animate([
    {top: ranYpos2 + 'px',
  transform: 'skewY(25deg)'},
    {top: ranYpos + 'px',
    transform: 'skewY(30deg)'}
  ], 500);
  
  document.body.appendChild(obj);
  setTimeout(() => obj.remove(), 500);
  
  let obj1 = document.createElement('div');
  obj1.style.position = 'fixed';
  obj1.style.left = secLeft + 'px';
  obj1.style.width = ran10 + 'px';
  obj1.style.height = ran10 + 'px';
  obj1.style.backgroundColor = `hsl(0, 100%, 50%)`;
  obj1.style.borderRadius = '50%';  
  obj1.style.transform = 'skewY(25deg)';

  obj1.animate([
    {top: ranYpos2 + 'px',
  transform: 'skewY(-25deg)'},
    {top: ranYpos + 'px',
    transform: 'skewY(-30deg)'}

  ], 500);
  
  document.body.appendChild(obj1);
  setTimeout(() => obj1.remove(), 500);
 
  return;
  }
  let num = parseInt(localStorage.mouseCounter);
  localStorage.mouseCounter = num + 1;
  if (num %  5 === 0 ) {
   trigger(e, 0);
  }
}

document.body.addEventListener('mousemove', mouseEvent);

chrome.runtime.onMessage.addListener((msg) => {
  document.body.removeEventListener('mousemove', mouseEvent)
});
