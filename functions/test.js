//test.js

function animateBar(obj, cls) {	
  let pD = 45,
  aD = 90,		
  d = cls === 'off' ? pD : aD,
  d2 = cls === 'on' ? pD : aD,
  c = cls === 'off' ? 'hsl(0, 100%, 100%, 0)' : 'hsl(0, 100%, 100%, 1)',
  c2 = cls === 'on' ? 'hsl(0, 100%, 100%, 0)' : 'hsl(0, 100%, 100%, 1)';	
  
  if (cls === 'off') {	
  obj.animate([
      {
    transform: `rotate(${d}deg)`,
    backgroundColor: c 	      
      }, 
      {
    transform: `rotate(${d2}deg)`,
    backgroundColor: c2 	      
      }, 
    ], 200)
  }
   if (cls === 'on') {
  let aniArr = [
   {
    transform: `rotate(${d}deg)`,
    backgroundColor: c 	      
      } 

  ];

  for (let i = 1; i < 9; i++) {
  let aniObj = {
  backgroundColor: c2 	      
  }
   if (i % 2 === 0) {
      aniObj.transform = `rotate(${d + Math.log(i) * 20}deg)`
    } else {
      aniObj.transform = `rotate(${d2}deg)`
    }
    aniArr.push(aniObj);	
  }
  obj.animate(aniArr, 1000);	   
 }
  
 obj.style.backgroundColor = c2;
  obj.style.transform = `rotate(${d2}deg)`;
  obj.className = obj.className === 'off' ? 'on' : 'off';
}

function mouseEvent(e) {
  let num = Math.trunc(e.clientX / 45),
  preNum = localStorage.getItem('tmf-cnt') ? localStorage.getItem('tmf-cnt') : num,	
  obj = document.getElementById(`objs-test${num}`),
  cntWidth = Math.trunc(window.innerWidth / 45);
  if (preNum === num.toString()) {return};	
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
  let oClass = {
   class: 'objs-test',
   width: '15px',
   height: '45px',
   border: '1px solid white',	  
   backgroundColor : 'none',
   top: (window.innerHeight -100) + 'px'
  },
  cntWidth = Math.trunc(window.innerWidth / 45);
  for (let i = 0; i < cntWidth; i++) {
    let oneObj = document.createElement('div');
    oneObj.id = oClass.class + i;
    oneObj.className = 'off';	  
    oneObj.style.width = oClass.width;
    oneObj.style.height = oClass.height;
//    oneObj.style.backgroundColor = oClass.backgroundColor;
    oneObj.style.top = oClass.top;
    oneObj.style.left = 50 + i * 45 + 'px';
    oneObj.style.position = 'fixed';
    oneObj.style.border = oClass.border;	
    document.body.appendChild(oneObj);	  
  }

}

function deleteObjs() {
  let cntWidth = Math.trunc(window.innerWidth / 45);
  for (let i = 0; i < cntWidth; i++) {
  if (!document.getElementById(`objs-test${i}`)) {continue;}
  document.getElementById(`objs-test${i}`).remove();
  }
}

setObjs();	

document.body.addEventListener('mousemove', mouseEvent);

chrome.runtime.onMessage.addListener((msg) => {
document.body.removeEventListener('mousemove', mouseEvent);
deleteObjs();	
});
