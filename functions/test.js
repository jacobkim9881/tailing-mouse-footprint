//test.js

function objProtoType(e) {
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
    return obj;	 
}

function pop(e) {	
    let obj = objProtoType(e);
    let ballSize = window.innerWidth/100;
    let randomBallSize = Math.trunc(Math.random() * ballSize) + 5;
    let ranXpos = ballSize + parseInt(e.clientX, 10);
    let ranYpos = ballSize + parseInt(e.clientY, 10);
    let ranH = Math.trunc(Math.random() * 360);
    let ranH2 =  Math.trunc(Math.random() * 360);
    let ran30 =	Math.trunc(Math.random() * 30);
    let ran30two = Math.trunc(Math.random() * 50); 	  
    let withIn30 = (ran) => Math.random() > 0.5 ? ran : -ran;
    obj.animate([
      {top: (e.clientY) + 'px',
       left: (e.clientX) + 'px',
       opacity: 1},
      {top: (e.clientY + withIn30(ran30))+ 'px',
      left: (e.clientX + withIn30(ran30two))+ 'px',
      opacity: 0},
     ], {duration: 400,
         easing: "ease-out"})
  
    document.body.appendChild(obj);
    setTimeout(() => obj.remove(), 400);
}

function clickEvent(e) {

  let ran = Math.trunc(Math.random() * 5) + 10;
  for (let i = 0; i <= ran; i++) {
  pop(e);
  }
}

function mouseEvent(e) {
// object for styling
   function trigger(e) {
    let obj = objProtoType(e);    	  
    let ballSize = window.innerWidth/100;
    let randomBallSize = Math.trunc(Math.random() * ballSize) + 5;
    let ranXpos = ballSize + parseInt(e.clientX, 10);
    let ranYpos = ballSize + parseInt(e.clientY, 10);
    let ranH = Math.trunc(Math.random() * 360);
    let ranH2 =  Math.trunc(Math.random() * 360); 

    obj.animate([
      {top: (ranYpos + randomBallSize) + 'px',
	    backgroundColor: `hsl(${ranH}, 100%, 50%)`  },
      {top: (ranYpos - 10 )+ 'px'},
      {top: (ranYpos + randomBallSize) + 'px'},
      {top: ((ranYpos + 100 )+ randomBallSize) + 'px'},
      {top: (ranYpos + 80) + 'px',
        backgroundColor: `hsl(${ranH2}, 100%, 50%)` }
    ], {duration: 800,
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
document.body.addEventListener('click', clickEvent);

chrome.runtime.onMessage.addListener((msg) => {
document.body.removeEventListener('mousemove', mouseEvent);
document.body.removeEventListener('click', clickEvent);

});
