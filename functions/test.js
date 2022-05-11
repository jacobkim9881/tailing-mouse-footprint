//colofulBall.js
  function trigger(e, ranH) {
  let obj = document.createElement('div');  	  
  let ballSize = window.innerWidth/100;
  let randomBallSize = Math.trunc(Math.random() * ballSize);
  let ranXpos = parseInt(e.clientX, 10);
  let ranYpos = parseInt(e.clientY, 10);
  let yHeight = parseInt(window.innerHeight);	  
  let awayFromCursor = - 30 * (yHeight - ranYpos) /yHeight;
//  let ranH = Math.trunc(Math.random() * 360);
  obj.className = 'flubbers'	  
  obj.style.position = 'fixed';
  obj.style.left = ranXpos + 'px';
  obj.style.width = ballSize + 'px';
  obj.style.height = ballSize + 'px';
  obj.style.backgroundColor = `hsl(${ranH}, 100%, 50%)`;
  obj.style.borderRadius = '50%';
obj.style.top= ranYpos + 'px';
//https://codepen.io/rachelnabors/pen/eJyWzm/?editors=0010
  let newKeyframe = new KeyframeEffect(obj, [
    {top: (ranYpos * 0.96 + awayFromCursor) + 'px',
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
 
  let flubAni = new Animation(newKeyframe, document.timeline); 

  document.body.appendChild(obj);
  setTimeout(() => obj.remove(), 4900);
  return;
  }

function mouseEvent(e) {
//let ranH = num %  360;

        localStorage.yMousePos = e.clientY;	
        localStorage.xMousePos = e.clientX;	
  let num = parseInt(localStorage.mouseCounter);
  localStorage.mouseCounter = num + 1;
  let ranH = num %  360;
 localStorage.mouseLazy  
  if (num %  7 === 0 ) {
   trigger(e, ranH);

  }
}

 setInterval(() => {
    let allObj = document.getElementsByClassName('flubbers')
  if ( localStorage.fYMousePos = localStorage.yMousePos
&& allObj.length > 0 ) {
//OA	  console.log(allObj)
 for (let i = 0; i < allObj.length; i++){
 let obj = allObj[i]	
 , ranYpos = localStorage.fYMousePos 	 
      obj.animate([
    {top: (ranYpos ) + 'px',
    transform: 'scale(0.95, 0.95)',
 borderRadius: '50% 50% 50% 50%',
},
    {top: (ranYpos * 1.2 )+ 'px',
    transform: 'scale(0.95, 0.95)',
	    borderRadius: '50% 50% 50% 50%',
},
    {top: (ranYpos * 1.4) + 'px',
    transform: 'scale(1,1)',
 borderRadius: '60% 60% 50% 50%',
},


  ], 5000)	    
    }	  
  }
  localStorage.fYMousePos = localStorage.yMousePos  
  localStorage.fXMousePos = localStorage.xMousePos 

  localStorage.fYMousePos = localStorage.fYMousePos + 1  
},50)

document.body.addEventListener('mousemove', mouseEvent);

chrome.runtime.onMessage.addListener((msg) => {
  document.body.removeEventListener('mousemove', mouseEvent);
});
