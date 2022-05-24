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

  document.body.appendChild(obj);
//  setTimeout(() => obj.remove(), 9900);
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
  if (num %  7 === 0 ) {
   trigger(e, ranH);

  }
}

 setInterval(() => {
    let allObj = document.getElementsByClassName('flubbers')	 
  if (
 allObj.length > 0 ) {
//	  console.log(allObj)
 for (let i = 0; i < allObj.length; i++){ 
 let obj = allObj[i]	
 , ranYpos = localStorage.fYMousePos 	 
// console.log(obj.style.top)	   
//parseInt(localStorage.mouseLazy) > 100 ? 3 : -1	

//console.log(obj.style.top, obj.className)
if (localStorage.mouseMove === localStorage.fMouseMove) {
if (obj.classList.contains('used')) localStorage.mSwitch = 0
	else localStorage.mSwitch = localStorage.mSwitch * -1	
  obj.style.left = (parseInt(obj.style.left.split('px')[0]) + localStorage.mSwitch * 5) + 'px'

}
setTimeout(() => {
if (obj.classList.contains('used')) return; 
if (localStorage.mouseMove === localStorage.fMouseMove) {
let animTime = 500
let animTop = parseInt(obj.style.top.split('px')[0]) + 300
obj.animate([
      {top: obj.style.top,
       },
      {top: (parseInt(obj.style.top.split('px')[0]) + 300) + 'px',
       }
    ], animTime);
}
//console.log(obj.className, parseInt(obj.style.top.split('px')[0]))
obj.style.top = (parseInt(obj.style.top.split('px')[0]) + 300) + 'px'
obj.classList.add('used')
setTimeout(() => obj.remove(), 490 - 10)
//console.log(obj)
}, 1000)

let move

if (obj.classList.contains('used')) continue 
else move = parseInt(localStorage.mMoveLen)

//console.log(obj.className)
 obj.style.top = (parseInt(obj.style.top.split('px')[0]) + move ) + 'px'
//obj.className = 'usedFlubbers'	 
//	 console.log(localStorage.mouseLazy)
    }	  
  }
//  localStorage.fYMousePos = localStorage.yMousePos  
//  localStorage.fXMousePos = localStorage.xMousePos
//  localStorage.fYMousePos = parseInt(localStorage.fYMousePos) + 1  
},50)

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
