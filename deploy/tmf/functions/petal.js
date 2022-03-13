//test.js

function objAnimate(obj, e, randomBallSize, top, left) {
    obj.animate([
      {top: (e.clientY + top + randomBallSize * 1) + 'px',
       left: (e.clientX + left + (randomBallSize*0)) + 'px',
       opacity: 1},
      {top: (e.clientY + top + randomBallSize * 1.3) + 'px',
       left: (e.clientX + left + (randomBallSize*1.5)) + 'px',
       opacity: 0.8},
      {top: (e.clientY + top + randomBallSize * 1) + 'px',
       left: (e.clientX + left + (randomBallSize*2)) + 'px',
       opacity: 0.5},
      {top: (e.clientY + top + randomBallSize * 1.3) + 'px',
       left: (e.clientX + left + (randomBallSize*2.5)) + 'px',
       opacity: 0.3},
      {top: (e.clientY + top + randomBallSize * 1) + 'px',
       left: (e.clientX + left + (randomBallSize*3)) + 'px',
       opacity: 0}

 
    ], {duration: 800,
      timing(timeFraction) {
        return 1 - Math.sin(Math.acos(timeFraction))}
    })

}

function petal(e, top, left, upside = true, randomBallSize) {
    let obj = document.createElement('div');
    let ballSize = window.innerWidth/160;
    obj.style.position = 'fixed';
    obj.style.top = (e.clientY + top) + 'px';	
    obj.style.left = (e.clientX + left) + 'px';
    obj.style.width = ballSize + 'px';
    obj.style.height = ballSize + 'px';
    obj.style.backgroundColor = `hsl(300, 60%, 80%)`;
    obj.style.borderRadius = upside ? '50% 50%' : '50% 50%';
obj.style.zIndex = '-2';
//    let randomBallSize = Math.trunc(Math.random() * ballSize) + 5;
//    randomBallSize = upside ? randomBallSize * -1 : randomBallSize * 1	
   obj.style.position = 'fixed';
   objAnimate(obj, e, randomBallSize, top, left)
/*	
    obj.animate([
      {top: (e.clientY + top + randomBallSize) + 'px'},
	    {top: (e.clientY + top + (randomBallSize*1.3)) + 'px'},
	    {top: (e.clientY + top + (randomBallSize*1)) + 'px'}

    ], {duration: 800,
      timing(timeFraction) {
        return 1 - Math.sin(Math.acos(timeFraction))}
    })
*/    
    return obj;	 
}

function center(e, randomBallSize) {
    let obj = document.createElement('div');
    let ballSize = window.innerWidth/200;
//    let randomBallSize = Math.trunc(Math.random() * ballSize) + 5;
    obj.style.position = 'fixed';
    obj.style.top = (e.clientY) + 'px';	
    obj.style.left = (e.clientX) + 'px';
    obj.style.width = ballSize + 'px';
    obj.style.height = ballSize + 'px';
    obj.style.backgroundColor = `hsl(60, 100%, 50%)`;
    obj.style.borderRadius = '50%';
    obj.style.zIndex = '-1';
    objAnimate(obj, e, randomBallSize, 0, 0)
     return obj;	 
}

function objProtoType(e) {
    let obj = document.createElement('div');
    let ballSize = window.innerWidth/200;
    let randomBallSize = Math.trunc(Math.random() * ballSize) + 5;
   obj.style.position = 'fixed';
    obj.appendChild(petal(e,(ballSize * 0.5),(ballSize * 0.5), true, randomBallSize));	  
   obj.appendChild(petal(e,-(ballSize * 0.6),(ballSize * 0.5), false, randomBallSize));	
   obj.appendChild(petal(e,(ballSize * 0.5),-(ballSize * 0.6), false, randomBallSize));	
   obj.appendChild(petal(e,-(ballSize * 0.6),-(ballSize * 0.6), true, randomBallSize));	

    obj.appendChild(center(e, randomBallSize));

    return obj;	 
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
    obj.style.left = 300 + 'px';
    obj.animate([
      {top: (ranYpos + randomBallSize) + 'px'},
	    {top: (ranYpos + (randomBallSize*1.3)) + 'px'},
	    {top: (ranYpos + (randomBallSize*1)) + 'px'}

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
  if (num %  10 === 0 ) {
    trigger(e);
  }
}

document.body.addEventListener('mousemove', mouseEvent);

chrome.runtime.onMessage.addListener((msg) => {
document.body.removeEventListener('mousemove', mouseEvent);

});
