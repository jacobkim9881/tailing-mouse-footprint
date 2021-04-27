//test.js
function ranColor() {
let ran360 = Math.trunc(Math.random() * 361);
let ran100 = Math.trunc(Math.random() * 90) + 10;
let ran100l = Math.trunc(Math.random() * 0) + 50;
return `hsl(${ran360}, ${ran100}%, ${ran100l}%)`; 
}
    
function mouseEvent(e) {
  let obj = document.createElement('div');
    
  let ran10 = Math.trunc(Math.random() * 10) + 5;
    let ranXpos = Math.trunc(Math.random() * ran10) + parseInt(e.clientX, 10);
    let ranYpos = Math.trunc(Math.random() * 10) + parseInt(e.clientY, 10);
    let ran20 = ranYpos - 30;
    let ran180 =  Math.trunc(Math.random() * 30) + 150; 
    obj.style.position = 'fixed';   
    obj.style.backgroundImage = `linear-gradient(${ran180}deg, ${ranColor()}, ${ranColor()}`;
    obj.style.borderRadius = '50%';  
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
  setTimeout(() => obj.remove(), 200);
  return;
}

document.body.addEventListener('mousemove', mouseEvent);

chrome.runtime.onMessage.addListener((msg) => {
document.body.removeEventListener('mousemove', mouseEvent)
});
