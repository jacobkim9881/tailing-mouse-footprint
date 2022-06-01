//colofulBall.js

function objCss(obj, e) {
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
  obj.style.borderRadius = '50%';
obj.style.top= ranYpos + 'px';

}

  function trigger(e, ranH) {
  let obj = document.createElement('div');  	  
//https://codepen.io/rachelnabors/pen/eJyWzm/?editors=0010
  objCss(obj, e)
  obj.style.backgroundColor = `hsl(${ranH}, 100%, 50%)`;
  document.body.appendChild(obj);
  setTimeout(() => obj.remove(), 1900);
  return;
  }

function mouseEvent(e) {
//let ranH = num %  360;

        localStorage.yMousePos = e.clientY;	
        localStorage.xMousePos = e.clientX;	
  let num = parseInt(localStorage.mouseCounter);
  localStorage.mouseCounter = num + 1;
  let ranH = num %  360;
localStorage.mouseMove = parseInt(localStorage.mouseMove) + 50 	 
localStorage.mSwitch = 1	
// localStorage.mouseLazy = 'false'
// localStorage.mouseMove = 0	
  if (num %  13 === 0 ) {
   trigger(e, ranH);

  }
}

function drawHalfRound(obj, x, y, xSize) {
	console.log('child x, y:',x,y)
  let pOrM = Math.random() >= 0.5 ? 1 : -1;
  let squareWid = Math.random() * 0.4 + 0.1;
   for (let i = -xSize; i <= xSize; i++) {    
     let t = i;
     setTimeout(() => {
      let newX = pOrM === 1 ? i / 2 + x : i * pOrM / 2 - xSize + x;
      let newY;             
      newY = Math.pow(i, 2)/(100/squareWid) - Math.pow(-xSize, 2)/(100/squareWid) + y;       

       //console.log(Math.cos(i/180 * Math.PI), ballRad, ballPos.x)
    obj.style.left = (newX + xSize/2) + 'px';
    obj.style.top = newY + 'px';      
    //ballPos.x = newX;
    //ballPos.y = newY;
     }, (xSize + 1 + i) * (600/xSize))
   }
}

function setObjs(x, y, col) {
  for (let i = 0; i < 2; i++) {
  let xSize = Math.trunc(Math.random() * 150) + 50;
    let oneObj = document.createElement('div');
//    oneObj.id = oClass.class + i;
//    oneObj.className = 'off';	  
  let ballSize = window.innerWidth/100;
  let randomBallSize = Math.trunc(Math.random() * ballSize);
  let ranH = Math.trunc(Math.random() * 360);
//  oneObj.className = 'flubbers'	  
  oneObj.style.position = 'fixed';
  //  oneObj.style.top = oClass.top;
  //  oneObj.style.left = 50 + i * 45 + 'px';
  oneObj.style.height = ballSize/1.5 + 'px';
  oneObj.style.width = ballSize/1.5 + 'px';
  oneObj.style.backgroundColor = col
		  //`hsl(${ranH}, 100%, 50%)`;
  oneObj.style.borderRadius = '50%';
  drawHalfRound(oneObj, x, y, xSize)	 
  document.body.appendChild(oneObj);	  
 setTimeout(() => oneObj.remove(), xSize * 2 * (600/xSize));
  }

}

setInterval(() => {
    let allObj = document.getElementsByClassName('flubbers')	
  if ( allObj.length > 0 ) {
  if (
  localStorage.fMouseMove !== localStorage.mouseMove 
 ) {
// obj moves up by mouse move
 for (let i = 0; i < allObj.length; i++){ 
 let obj = allObj[i]	
console.log('mouse move') 
 if (parseInt(obj.style.top.split('px')[0]) < 300) {
if (obj.classList.contains('used')) continue; 
let animTime = 500
obj.animate([
      {top: obj.style.top,
       },
      {top: (parseInt(obj.style.top.split('px')[0]) - 50) + 'px',
       }
    ], animTime);
obj.style.top = (parseInt(obj.style.top.split('px')[0]) - 50) + 'px'
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
	 console.log('parent x, y: ',objX, objY)
if (obj.classList.contains('used')) continue; 
console.log('mouse not move') 
let animTime = 500
obj.animate([
      {top: obj.style.top,
       },
      {top: (objY + 300) + 'px',
       }
    ], animTime);
setTimeout(() => {
	obj.remove()
	setObjs(objX, objY + 300, obj.style.backgroundColor)
}, 490 - 10)
obj.style.top = (objY + 300) + 'px'
obj.classList.add('used')
 }}
  }  
}, 50)

setInterval(() => {
if (localStorage.mouseMove === localStorage.fMouseMove) {
 localStorage.mMoveLen = 0 
} else localStorage.mMoveLen = -1

  localStorage.fMouseMove = localStorage.mouseMove
}, 500)

document.body.addEventListener('mousemove', mouseEvent);

chrome.runtime.onMessage.addListener((msg) => {
  document.body.removeEventListener('mousemove', mouseEvent);
});
