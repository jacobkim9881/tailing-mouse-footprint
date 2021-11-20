//test.js

function animateBar(obj, cls) {
  let d = cls === 'off' ? 0 : 45;
  let d2 = cls === 'on' ? 0 : 45;

  obj.className = obj.className === 'off' ? 'on' : 'off';	

  obj.animate([
      {transform: `rotate(${d}deg)`}, 
      {transform: `rotate(${d2}deg)`}, 
    ], 200)
  obj.style.transform = `rotate(${d2}deg)`;
}

function mouseEvent(e) {

  if (e.clientX % 13 < 5) {return}	
  let num = Math.trunc(e.clientX / 45);
  let preNum = localStorage.getItem('tmf-cnt') ? localStorage.getItem('tmf-cnt') : num;	
  let obj = document.getElementById(`objs-test${num}`)
  let cntWidth = Math.trunc(window.innerWidth / 45);
  if (localStorage.getItem('tmf-cnt') === num.toString()) {return};	
  localStorage.setItem('tmf-cnt', num);	
  
  for (let i = 0; i < num; i++){
    let tarObj = document.getElementById(`objs-test${i}`);
    if (tarObj.className === 'on' && num !== 0) {continue};	  
    animateBar(tarObj, tarObj.className);
  }
  for (i = cntWidth - 1; i >= num; i--) {
    let tarObj = document.getElementById(`objs-test${i}`);
    if (tarObj.className === 'off') {continue};	  
    animateBar(tarObj, tarObj.className);
  }
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

function deleteObjs() {
  let cntWidth = Math.trunc(window.innerWidth / 45);
  for (let i = 0; i < cntWidth; i++) {
  document.getElementById(`objs-test${i}`).remove();
  }
}

setObjs();	

document.body.addEventListener('mousemove', mouseEvent);

chrome.runtime.onMessage.addListener((msg) => {
document.body.removeEventListener('mousemove', mouseEvent);
deleteObjs();	
});
