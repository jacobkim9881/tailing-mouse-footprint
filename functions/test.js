//test.js

function getObj() {
 let obj = document.createElement('div');
 obj.id = 'test-obj';  
 obj.style.width = 50 + 'px'; 
 obj.style.height = 50 + 'px'; 
 document.body.appendChild(obj);
 let light = document.createElement('div');
 light.id = 'tmf-obj-light';	
 light.style.width = 20 + 'px'; 
 light.style.height = 60 + 'px';
 light.style.display = 'none'	
 document.body.appendChild(light);	
	
 let bord = document.createElement('div');
 bord.id = 'tmf-obj-bord';	
 bord.style.width = 25 + 'px'; 
 bord.style.height = 65 + 'px';
 bord.style.display = 'none'	
 document.body.appendChild(bord);	


// return obj;
}
getObj();

function mouseEvent(e) {
// object for styling
  let obj = document.getElementById('test-obj');
//  let obj = getObj();	
  let ran10 = Math.trunc(Math.random() * 10) + 5;
    let ranXpos = Math.trunc(Math.random() * ran10) + parseInt(e.clientX, 10);
    let ranYpos = Math.trunc(Math.random() * 10) + parseInt(e.clientY, 10);
    let ran20 = ranYpos - 30;

    obj.style.position = 'fixed';
    obj.style.top = (e.clientY -20) + 'px';
    obj.style.left = (e.clientX - 20) + 'px';
    obj.style.borderRadius = '50%';	
    obj.style.border = '1px solid red';	
    obj.style.zIndex = '-1';	
 //   obj.style.backgroundImage = `linear-gradient(to bottom right, hsl(170, 100%, 50%), hsl(170, 100%, 0%)`;
    obj.style.borderRadius = '50%'; 
	    /*
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
*/
  //setTimeout(() => obj.remove(), 200);
  return;
}

function mDownEvent(e) {
// object for styling
  let obj = document.getElementById('test-obj');
  let light = document.getElementById('tmf-obj-light');
  let bord = document.getElementById('tmf-obj-bord');
//  let obj = getObj();	
  let ran10 = Math.trunc(Math.random() * 10) + 5;
    let ranXpos = Math.trunc(Math.random() * ran10) + parseInt(e.clientX, 10);
    let ranYpos = Math.trunc(Math.random() * 10) + parseInt(e.clientY, 10);
    let ran20 = ranYpos - 30;

    obj.style.position = 'fixed';
    obj.style.top = (e.clientY -20) + 'px';
    obj.style.left = (e.clientX - 20) + 'px';
    obj.style.borderRadius = '50%';	
    obj.style.border = '1px solid red';	
    obj.style.zIndex = '-1';	
 //   obj.style.backgroundImage = `linear-gradient(to bottom right, hsl(170, 100%, 50%), hsl(170, 100%, 0%)`;
    obj.style.borderRadius = '50%'; 

    light.style.backgroundImage = `linear-gradient(to bottom, #f5f7f2 , #f5f7f2 , #f5f7f2 , #945b3f)`;

    light.style.display = 'block';
    light.style.position = 'fixed';
    light.style.top = (e.clientY -50) + 'px';
    light.style.left = (e.clientX - 20) + 'px';
    light.style.borderRadius = '50% 50% 30% 30%';	
    light.style.zIndex = '2';	

    bord.style.display = 'block';
    bord.style.position = 'fixed';
    bord.style.top = (e.clientY -50) + 'px';
    bord.style.left = (e.clientX - 23) + 'px';
    bord.style.borderRadius = '50% 50% 30% 30%';	
    bord.style.zIndex = '-1';	
    bord.style.backgroundImage = `linear-gradient(to bottom, #922202, #922202, #2b4e8b)`;


	    /*
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
*/
  //setTimeout(() => obj.remove(), 200);
 return;
}

function mUpEvent(e) {
  let light = document.getElementById('tmf-obj-light');
  light.style.display = 'none';
  let bord = document.getElementById('tmf-obj-bord');
  bord.style.display = 'none';
}

function mDragEvent(e) {
  let light = document.getElementById('tmf-obj-light');
  light.style.top = (e.clientY -50) + 'px';
  light.style.left = (e.clientX - 20) + 'px';
  let bord = document.getElementById('tmf-obj-bord');
  bord.style.top = (e.clientY -50) + 'px';
  bord.style.left = (e.clientX - 20) + 'px';
}

document.body.addEventListener('mousemove', mouseEvent);
document.body.addEventListener('mousedown', mDownEvent);
document.body.addEventListener('mouseup', mUpEvent);
document.body.addEventListener('mousemove', mDragEvent);

chrome.runtime.onMessage.addListener((msg) => {
document.body.removeEventListener('mousemove', mouseEvent)
});

chrome.runtime.onMessage.addListener((msg) => {
document.body.removeEventListener('mousedown', mDownEvent)
});

chrome.runtime.onMessage.addListener((msg) => {
document.body.removeEventListener('mouseup', mUpEvent)
});

chrome.runtime.onMessage.addListener((msg) => {
document.body.removeEventListener('mousemove', mDragEvent)
});

