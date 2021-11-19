//test.js

function animateBar(obj, cls) {
  let d = cls === 'off' ? 0 : 45;
  let d2 = cls === 'on' ? 0 : 45;
	/*
  if(cls === 'off' && obj.style.transform === 'rotate(0deg)'
  || cls === 'on' && obj.style.transform === 'rotate(45deg)'
  ) {return}	
  */
  obj.className = obj.className === 'off' ? 'on' : 'off';	

  obj.animate([
      {transform: `rotate(${d}deg)`}, 
      {transform: `rotate(${d2}deg)`}, 
    ], 200)
  obj.style.transform = `rotate(${d2}deg)`;
}

function mouseEvent(e) {
// object for styling
/*
	let obj = document.createElement('div');
  
	
  let ran10 = Math.trunc(Math.random() * 10) + 5;
    let ranXpos = Math.trunc(Math.random() * ran10) + parseInt(e.clientX, 10);
    let ranYpos = Math.trunc(Math.random() * 10) + parseInt(e.clientY, 10);
    let ran20 = ranYpos - 30;
    obj.style.position = 'fixed';
    obj.style.backgroundImage = `linear-gradient(to bottom right, hsl(170, 100%, 50%), hsl(170, 100%, 0%)`;
    obj.style.borderRadius = '50%'; 
    obj.class = 'test-balls'	
    obj.animate([
      {top: ranYpos + 'px',
      left: e.clientX + 'px',
      width: 5 + 'px',
      height: 5 + 'px' 
    }, 
      {top: ran20 + 'px',
      left: ranXpos + 'px',
      width: ran10 + 'px',
      height: ran10 + 'px' 
    }
    ], 200)

  document.body.appendChild(obj);
*/
  if (e.clientX % 13 < 5) {return}	
  let num = Math.trunc(e.clientX / 45)	
  let obj = document.getElementById(`objs-test${num}`)

  animateBar(obj, obj.className);
}

function setObjs() {
//  if (document.getElementsByClassName('tail-stamp')) {return};	

  let oClass = {
   class: 'objs-test',
   width: '15px',
   height: '45px',
   backgroundColor : 'white',
   top: (window.innerHeight -100) + 'px'
  }
  let cntWidth = Math.trunc(window.innerWidth / 45);
  for (let i = 0; i < cntWidth; i++) {
    let oneObj = document.createElement('div');
    oneObj.id = oClass.class + i;
    oneObj.className = 'off';	  
    oneObj.style.width = oClass.width;
    oneObj.style.height = oClass.height;
    oneObj.style.backgroundColor = oClass.backgroundColor;
    oneObj.style.top = oClass.top;
    oneObj.style.left = 50 + i * 45 + 'px';
    oneObj.style.position = 'fixed';
    document.body.appendChild(oneObj);	  
  }
   let stamp = document.createElement('div');
   stamp.className = 'tail-stamp';
   document.body.appendChild(stamp);	  
 
}
setObjs();	

document.body.addEventListener('mousemove', mouseEvent);

chrome.runtime.onMessage.addListener((msg) => {
document.body.removeEventListener('mousemove', mouseEvent);
});
