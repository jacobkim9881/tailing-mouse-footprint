//particleMagnet.js

function objCss(obj, e) {
  let ballSize = window.innerWidth/100;
  let randomBallSize = Math.trunc(Math.random() * ballSize);
  let ranXpos = parseInt(e.clientX, 10) + 20;
  let ranYpos = parseInt(e.clientY, 10);
  let yHeight = parseInt(window.innerHeight);	  
  let awayFromCursor = - 30 * (yHeight - ranYpos) /yHeight;
  let num = parseInt(localStorage.mouseCounter);
  obj.id = `tmf${num % 360}`	
  obj.className = 'tmf-obj'	  
  obj.style.position = 'fixed';
  obj.style.left = ranXpos + 'px';
  obj.style.width = ballSize + 'px';
  obj.style.height = ballSize + 'px';
  obj.style.borderRadius = '50%';
  obj.style.top= ranYpos + 'px';

}

function trigger(e, ranH) {
  let obj = document.createElement('div');  	  
  objCss(obj, e)
  obj.style.backgroundColor = `hsl(${ranH}, 100%, 50%)`;
  document.body.appendChild(obj);
  setTimeout(() => obj.remove(), 1900);
  return;
}

function mouseEvent(e) {
  localStorage.yMousePos = e.clientY;	
  localStorage.xMousePos = e.clientX;	
  let num = parseInt(localStorage.mouseCounter);
  localStorage.mouseCounter = num + 1;
  let ranH = num %  360;
  localStorage.mouseMove = parseInt(localStorage.mouseMove) + 50 
  localStorage.mSwitch = 1	
  if (num %  13 === 0 ) {
    trigger(e, ranH);

  }
}

function drawHalfRound(obj, x, y, xSize) {
//animation for breaking objs
  let pOrM = Math.random() >= 0.5 ? 1 : -1;
  let squareWid = Math.random() * 0.4 + 0.1;
  for (let i = -xSize; i <= xSize; i++) {    
    let t = i
      , time2 = (xSize + 1 + i) * 2    
//    ranH = (ranH - (xSize + i)) % 360	  
    setTimeout(() => {
      let newX = pOrM === 1 ? i / 2 + x : i * pOrM / 2 - xSize + x
      , newY
      newY = Math.pow(i, 2)/(100/squareWid) - Math.pow(-xSize, 2)/(100/squareWid) + y;       
      obj.style.left = (newX + xSize/2 + 20/2) + 'px';
      obj.style.top = newY + 'px';     
//      obj.style.backgroundColor = `hsl(${ranH}, 100%, 50%)`; 	    
    }, time2)
  }
}

function setObjs(x, y, col) {
  for (let i = 0; i < 4; i++) {
    let xSize = Math.trunc(Math.random() * 150) + 50;
    let oneObj = document.createElement('div');
    let ballSize = (Math.random() * window.innerWidth/100)/2 + window.innerWidth/150;
    let randomBallSize = Math.trunc(Math.random() * ballSize);
//    let num = parseInt(localStorage.mouseCounter);
//    let ranH = num % 360	     	  
//  , ranH2= num + 300 % 360
    let time1 = xSize * 2 * 2	  
    oneObj.style.position = 'fixed';
    oneObj.style.height = ballSize/1.5 + 'px';
    oneObj.style.width = ballSize/1.5 + 'px';
    oneObj.style.backgroundColor = `hsl(${col}, 100%, 50%)`;
    oneObj.style.borderRadius = '50%';
    drawHalfRound(oneObj, x, y, xSize)	 
    document.body.appendChild(oneObj);	  
    setTimeout(() => oneObj.remove(), time1);
  }

}

setInterval(() => {
  let allObj = document.getElementsByClassName('tmf-obj')	
  if ( allObj.length > 0 ) {

    if (
      localStorage.fMouseMove !== localStorage.mouseMove 
    ) {
      // obj moves up by mouse move
      for (let i = 0; i < allObj.length; i++){ 
        let obj = allObj[i]	
        if (parseInt(localStorage.moved) > 2000) {	 
          if (obj.classList.contains('used')) continue; 
          let ballSize = window.innerWidth/100;
          let ballSize1 = window.innerWidth/(90 * 1.5);
          let animTime = 500
          obj.animate([
            {top: obj.style.top,
            },
  	    {top: (parseInt(obj.style.top.split('px')[0]) - 25) + 'px',
            },
            {top: (parseInt(obj.style.top.split('px')[0]) - 50) + 'px',
            }
          ], {
	    duration: animTime,
            easing: 'cubic-bezier(0.7, 0, 1, 0)'	
          });
          obj.animate([
            {
	      width: ballSize + 'px',
	      height: ballSize + 'px' ,
	      offset: '0.6'		            
            },
  	    {
  	      width: (ballSize * 1.2) + 'px',
	      height: (ballSize * 0.80) + 'px',
	      offset: '0.65'		            
	    },
            {
	      width: (ballSize * 0.80) + 'px', 	    
	      height: (ballSize * 1.2) + 'px',
	      offset: '0.70'		       
            },
            {
	      width: (ballSize * 1.05) + 'px',
	      height: (ballSize * 0.95) + 'px',
	      offset: '0.75'		       
            },
  	    {
  	      width: (ballSize * 1.05) + 'px',
	      height: (ballSize * 0.95) + 'px',
	      offset: '0.80'		            
	    },
            {
	      width: (ballSize * 0.97) + 'px', 	    
	      height: (ballSize * 1.02) + 'px',
	      offset: '0.85'		       
            },
            {
	      width: (ballSize * 1.02) + 'px',
	      height: (ballSize * 0.97) + 'px',
	      offset: '0.90'		       
            },
	    {
  	      width: (ballSize * 1.01) + 'px',
	      height: (ballSize * 0.98) + 'px',
	      offset: '0.92'		            
	    },
            {
	      width: (ballSize * 0.98) + 'px', 	    
	      height: (ballSize * 1.01) + 'px',
	      offset: '0.94'		       
            },
            {
	      width: (ballSize * 1.005) + 'px',
	      height: (ballSize * 0.985) + 'px',
	      offset: '0.96'		       
            },
  	    {
	      width: ballSize + 'px',
	      height: ballSize + 'px'        	    
            }
          ], {
	    duration: animTime + 280
	  });
          obj.style.top = (parseInt(obj.style.top.split('px')[0]) - 50) + 'px'
	  obj.style.width = ballSize + 'px'
          obj.style.height = ballSize + 'px'

          obj.classList.add('used')
        } else {	 
          obj.style.top = (parseInt(obj.style.top.split('px')[0]) + -1 ) + 'px'
        }
      }} else {
      //obj falling 
      for (let i = 0; i < allObj.length; i++){ 
        let obj = allObj[i]
        let objY = parseInt(obj.style.top.split('px')[0])	 
          , objX = parseInt(obj.style.left.split('px')[0])	
    //  let num = parseInt(localStorage.mouseCounter);	      
    	      let col = allObj[i].id.match(/\d+/)[0]
let ranH = col % 360
	      , ranH2= col + 300 % 360
 	allObj[i].id = ''
        if (obj.classList.contains('used')) continue; 
        let animTime = 500
        obj.animate([
          {top: obj.style.top,
		  backgroundColor: `hsl(${ranH}, 100%, 50%)`
          },
          {top: (objY + 300) + 'px',
		  backgroundColor: `hsl(${ranH2}, 100%, 50%)`
          }
        ], animTime);
        setTimeout(() => {
          obj.remove()
          setObjs(objX, objY + 300, ranH2)
        }, 490 - 10)
        obj.style.top = (objY + 300) + 'px'
        obj.classList.add('used')
      }}
  }  
}, 50)

setInterval(() => {
//if mouse not moved
  if (localStorage.mouseMove === localStorage.fMouseMove) {
    localStorage.moved = 0	
    localStorage.mMoveLen = 0 
  } else {
    // if mouse still move	
    localStorage.moved = parseInt(localStorage.moved) + 500
    localStorage.mMoveLen = -1
  }

  localStorage.fMouseMove = localStorage.mouseMove
}, 500);
// This semicolon shoul not be deleted!
(function ifMouseMoveIsNaNThenSet0 () {
  if (isNaN(parseInt(localStorage.mouseMove))) localStorage.mouseMove = 0
  return	
})()

document.body.addEventListener('mousemove', mouseEvent);

chrome.runtime.onMessage.addListener((msg) => {
  document.body.removeEventListener('mousemove', mouseEvent);
});
