//test.js 
function trigger(e, direction) {
	// object for styling
  let obj = document.createElement('div');
  let pOrM = Math.random() >= 0.5 ? 1 : -1;	

    //;let ranXpos = Math.trunc(Math.random() * ran50) + parseInt(e.clientX, 10);
    obj.style.position = 'fixed';
    obj.style.backgroundColor = 'white'
    obj.style.height = '1px'	
		//backgroundImage = direction === -1 ? `linear-gradient(to bottom right, hsl(0, 100%, 100%), hsl(0, 0%, 0%)` : `linear-gradient(to bottom right, hsl(0, 0%, 0%), hsl(0, 100%, 100%)`;
    //obj.style.borderRadius = '50%';
	/*
	if (direction === -1) {
	obj.animate([
      {top: ranYpos + 'px',
      left: ranXpos + 'px',
      width: ran502 + 'px',
      height: 1 + 'px' 
    }, 
      {top: ranYpos + 'px',
      left: ranXpos + 'px',
      width: 1 + 'px',
      height: 1 + 'px' 
    }
    ], 200)
	} else {
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
}*/
  return obj;
  }

function mouseEvent(e) {
  let xSize = Math.trunc(Math.random() * 50) + 35;
  let squareWid = Math.random() * 0.4 + 0.1;
  let pOrM = Math.random() >= 0.5 ? 1 : -1;
   let num = parseInt(localStorage.mouseCounter);
  localStorage.mouseCounter = num + 1;
  if (num %  13 === 0 ) {
  let  ballPos = {x: e.clientX , y: e.clientY}  
   , ran50 = Math.trunc(Math.random() * 150) * pOrM + 15
   , ranYpos = Math.trunc(Math.random() * ran50) + parseInt(e.clientY, 10)
      , obj1 = trigger(e)
      , obj2 = trigger(e)	  
      , roDeg = e.clientX - localStorage.xMousePos > 0 ? -1 : 1;	          
    obj1.style.top = ranYpos + 'px'
    obj2.style.top = ranYpos + 'px'
	  console.log('roDeg: ', roDeg)
 for (let i = 0; i <= xSize; i++) {     
      //let i2 = i >= 0 ? i - 180 : i;	   
      setTimeout(() => {
        let obj1X , obj2X, width1
	if (roDeg === -1) {      
        obj1X = ran50 + ballPos.x - i 
        , obj2X = ran50 + ballPos.x - i - 2
	, width1 = i + 1  
//	      console.log('obj1x: ', obj1X)
        obj1.style.left = obj1X + 'px';
        obj2.style.left = obj2X + 'px';
	} else {
        obj1X = ran50 + ballPos.x  
        , obj2X = ran50 + ballPos.x + i + 1 
	, width1 = i + 1  
//	      console.log('obj1x: ', obj1X)
        obj1.style.left = obj1X + 'px';
        obj2.style.left = obj2X + 'px';
	}
        obj1.style.width = width1 + 'px';
        obj2.style.width = 1 + 'px';
  
  document.body.appendChild(obj1);
  document.body.appendChild(obj2);
  setTimeout(() =>  {
	  obj1.remove()
	  obj2.remove()
        localStorage.xMousePos = e.clientX;	
  } ,(xSize + 1 + i + 200));
      }, (xSize + 1 + i))
    }
  } 
}

document.body.addEventListener('mousemove', mouseEvent);

chrome.runtime.onMessage.addListener((msg) => {
document.body.removeEventListener('mousemove', mouseEvent)
});
