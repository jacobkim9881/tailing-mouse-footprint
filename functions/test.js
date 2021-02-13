//test.js

function petal(e, top, left, upside = true) {
    let obj = document.createElement('div');
    let ballSize = window.innerWidth/80;
    obj.style.position = 'fixed';
    obj.style.top = (e.clientY + top) + 'px';	
    obj.style.left = (e.clientX + left) + 'px';
    obj.style.width = ballSize + 'px';
    obj.style.height = ballSize + 'px';
    obj.style.backgroundColor = `hsl(300, 60%, 80%)`;
    obj.style.borderRadius = upside ? '10% 80%' : '80% 10%';
obj.style.zIndex = '-2';
    return obj;	 
}

function center(e) {
    let obj = document.createElement('div');
    let ballSize = window.innerWidth/100;
    obj.style.position = 'fixed';
    obj.style.top = (e.clientY) + 'px';	
    obj.style.left = (e.clientX) + 'px';
    obj.style.width = ballSize + 'px';
    obj.style.height = ballSize + 'px';
    obj.style.backgroundColor = `hsl(60, 100%, 50%)`;
    obj.style.borderRadius = '50%';
    obj.style.zIndex = '-1';
    return obj;	 
}

function objProtoType(e) {
    let obj = document.createElement('div');
    let ballSize = window.innerWidth/100;
    obj.style.position = 'fixed';
    obj.appendChild(petal(e,(ballSize * 0.5),(ballSize * 0.5)));	  
   obj.appendChild(petal(e,-(ballSize * 0.5),(ballSize * 0.5), false));	
   obj.appendChild(petal(e,(ballSize * 0.5),-(ballSize * 0.5), false));	
   obj.appendChild(petal(e,-(ballSize * 0.5),-(ballSize * 0.5)));	

    obj.appendChild(center(e));

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
    obj.style.left = ranXpos + 'px';

    obj.animate([
      {top: (ranYpos + randomBallSize) + 'px'},
	    {top: (ranYpos + randomBallSize) + 'px'}

    ], {duration: 800,
      timing(timeFraction) {
        return 1 - Math.sin(Math.acos(timeFraction))}
    })
  
    document.body.appendChild(obj);
//    setTimeout(() => obj.remove(), 700);
    return;
  }
  let num = parseInt(localStorage.mouseCounter);
  localStorage.mouseCounter = num + 1;
  if (num %  4 === 0 ) {
    trigger(e);
  }
}

document.body.addEventListener('mousemove', mouseEvent);

chrome.runtime.onMessage.addListener((msg) => {
document.body.removeEventListener('mousemove', mouseEvent);

});
