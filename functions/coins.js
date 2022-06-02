//test.js

function animateBar(obj, top, cls) {
  let secnd = 500;	
  obj.animate([
    {
      transform: `rotateY(${0}deg)`,
      top: top + 'px' 	      
    }, 
    {
      transform: `rotateY(${360}deg)`,
      top: (top - 70) + 'px' 	      
    },
    {
      transform: `rotateY(${360}deg)`,
      top: (top - 50) + 'px' 	      
    },        
  ], secnd)
  obj.style.backgroundColor = 'white';
  obj.style.opacity = '1';	
  setTimeout(() => obj.remove(), secnd - 1);	
  //obj.style.transform = `rotate(${d2}deg)`
}

function mouseEvent(e) {
  let num = Math.trunc(e.clientX / 45),
    preNum = localStorage.getItem('tmf-cnt') ? localStorage.getItem('tmf-cnt') : num,	
    obj = document.getElementById(`objs-test${num}`),
    cntWidth = Math.trunc(window.innerWidth / 45);
  if (preNum === num.toString()) {return};	
  localStorage.setItem('tmf-cnt', num);	
  
}

function onLoadEvent(obj, e) {
  let pop = Math.random() < 0.1 ? `0.3`: `0`;	
  obj.animate([
    {
      transform: `rotateY(${0}deg)`,
    }, 
    {
      transform: `rotateY(${360}deg)`,
    },
    {
      transform: `rotateY(${0}deg)`,
    },        
    {
      transform: `rotateY(${360}deg)`,
    },        
  ], {duration:2000});
  obj.animate([
    {
      opacity: pop	      
    }, 
    {
      opacity: `0`	      
    },        
  ], {duration:1000}) 
   
  obj.style.opacity = '0';
}

function setObjs() {
  let oClass = {
      class: 'objs-test',
      width: '30px',
      height: '30px',
      border: '3px solid #f2d404',	  
      backgroundColor : 'repeating-linear-gradient(90deg,#f1a501,#f2d404,#f1a501)',
      where: window.innerHeight * Math.random() + 'px'
    },
    cntWidth = Math.trunc(window.innerWidth / 15);
  for (let i = 0; i < cntWidth * 2; i++) {
    let oneObj = document.createElement('div');
    let oneTop = Math.trunc(window.innerHeight * Math.random());
    let oneLeft = Math.trunc(window.innerWidth * Math.random()); 	  
    oneObj.id = oClass.class + i;
    oneObj.className = 'tmf-objs';	  
    oneObj.style.width = oClass.width;
    oneObj.style.height = oClass.height;
    oneObj.style.backgroundImage = oClass.backgroundColor;
    oneObj.style.top = oneTop + 'px';
    oneObj.style.left = oneLeft + 'px';
    oneObj.style.position = 'fixed';
    oneObj.style.border = oClass.border;
    oneObj.style.borderRadius = '50%';	 
    oneObj.style.zIndex = '999999999';	  
    onLoadEvent(oneObj);	   

    document.body.appendChild(oneObj);	 
	 
    oneObj.onmouseover = function(e) {
      animateBar(oneObj, oneTop);	
    }  
  }
}

function deleteObjs() {
  let objs = document.querySelectorAll('.tmf-objs');
  objs.forEach(ele => ele.remove());	
}
deleteObjs();
setObjs();	

document.body.addEventListener('mousemove', mouseEvent);

chrome.runtime.onMessage.addListener((msg) => {
  document.body.removeEventListener('mousemove', mouseEvent);
  deleteObjs();	
});
