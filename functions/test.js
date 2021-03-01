//test.js

function getObj() {
 let obj = document.createElement('div');
 obj.id = 'test-obj';  
 obj.style.width = 50 + 'px'; 
 obj.style.height = 50 + 'px'; 
 document.body.appendChild(obj);	
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

document.body.addEventListener('mousemove', mouseEvent);

chrome.runtime.onMessage.addListener((msg) => {
document.body.removeEventListener('mousemove', mouseEvent)
});
