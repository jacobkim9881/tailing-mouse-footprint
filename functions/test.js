//test.js 
function trigger(e, direction) {
	// object for styling
  let obj = document.createElement('div');
  let pOrM = Math.random() >= 0.5 ? 1 : -1;	
  let ran50 = Math.trunc(Math.random() * 150) * pOrM + 15;
  let ran502 = Math.trunc(Math.random() * 50) + 35;
	console.log('direction: ', direction)	
    let ranXpos = Math.trunc(Math.random() * ran50) + parseInt(e.clientX, 10);
    let ranYpos = Math.trunc(Math.random() * ran50) + parseInt(e.clientY, 10);
    let ran20 = ranYpos - 30;
	obj.style.transform = direction === -1 ? 'rotateY(3.142rad)' : 'rotateY(0deg)';
    obj.style.position = 'fixed';
    obj.style.backgroundImage = `linear-gradient(to bottom right, hsl(170, 100%, 50%), hsl(170, 100%, 0%)`;

		//'white'
		//backgroundImage = `linear-gradient(to bottom right, hsl(170, 100%, 50%), hsl(170, 100%, 0%)`;
    //obj.style.borderRadius = '50%';  
    obj.animate([
      {top: ranYpos + 'px',
      left: ranXpos + 'px',
      width: 1 + 'px',
      height: 1 + 'px' 
    }, 
      {top: ranYpos + 'px',
      left: ranXpos + 'px',
      width: ran502 + 'px',
      height: 1 + 'px' 
    }
    ], 200)

  document.body.appendChild(obj);
  setTimeout(() => {
	  obj.remove()
localStorage.xMousePos = e.clientX
  } , 200);
  return;
  }

function mouseEvent(e) {
   let num = parseInt(localStorage.mouseCounter);
  localStorage.mouseCounter = num + 1;
  if (num %  5 === 0 ) {
  let roDeg = e.clientX - localStorage.xMousePos > 0 ? -1 : 1;	  
   trigger(e, roDeg);
  } 
}

document.body.addEventListener('mousemove', mouseEvent);

chrome.runtime.onMessage.addListener((msg) => {
document.body.removeEventListener('mousemove', mouseEvent)
});
