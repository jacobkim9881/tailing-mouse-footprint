//digital.js

function triggerDigital(e) {
  let obj = document.createElement('div');
  let ran50 = Math.trunc(Math.random() * 25) + 5;
  let ranXpos = Math.trunc(Math.random() * 10) + parseInt(e.clientX, 10);
  let ranYpos = Math.trunc(Math.random() * -10 - 10) + parseInt(e.clientY, 10)
  let ran200 = Math.random() > 0.5 ? Math.random() * - 200 : Math.random() * 200 
  let ran360 = Math.trunc(Math.random() * 360)
  let rOrL = localStorage.xMousePos > e.clientX ? 1 : -1
  let ran2002 = Math.trunc(Math.random() * 400) * rOrL
  obj.style.position = 'fixed';
  obj.style.backgroundColor = `hsl(${ran360}, 100%, 50%)`;  	
  obj.animate([
    {top: (e.clientY + ran200) + 'px',
      left: (e.clientX + ran2002) + 'px',
      width: ran50 + 'px',
      height: ran50 + 'px',
      opacity: 0.7	    
    }, 
    {top: ranYpos + 'px',
      left: ranXpos + 'px',
      width: 5 + 'px',
      height: 5 + 'px', 
      opacity: 0	    
    } 
    
  ], 200)

  localStorage.xMousePos = e.clientX;	
  document.body.appendChild(obj);
  setTimeout(() => obj.remove(), 200);
  return;

}

function mouseEventDigital(e) {
  let num = parseInt(localStorage.mouseCounter);
  localStorage.mouseCounter = num + 1;
  if (num %  3 === 0 ) {
    triggerDigital(e);
  }
}

