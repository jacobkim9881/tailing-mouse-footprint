//test.js

function animateBar(obj, cls) {	
  let pD = 45,
  aD = 90,		
  d = cls === 'off' ? pD : aD,
  d2 = cls === 'on' ? pD : aD,
  c = cls === 'off' ? 'hsl(0, 100%, 100%, 0)' : 'hsl(0, 100%, 100%, 1)',
  c2 = cls === 'on' ? 'hsl(0, 100%, 100%, 0)' : 'hsl(0, 100%, 100%, 1)';	
  
  obj.animate([
      {
    transform: `rotate(${d}deg)`,
    backgroundColor: c 	      
      }, 
      {
    transform: `rotate(${d2}deg)`,
    backgroundColor: c2 	      
      }, 
    ], 400)
  
 obj.style.backgroundColor = c2;
  obj.style.transform = `rotate(${d2}deg)`;
  obj.className = obj.className === 'off' ? 'on' : 'off';
}

function animateStamp(obj, cls) {
  let pT = (window.innerHeight - 120),
  aT = (window.innerHeight - 100),
  t = cls === 'off1' ? pT : aT,
  t2 = cls === 'on1' ? pT : aT,	
  c = cls === 'off1' ? 'hsl(230, 100%, 75%, 0)' : 'hsl(230, 100%, 75%, 1)',
  c2 = cls === 'on1' ? 'hsl(230, 100%, 75%, 0)' : 'hsl(230, 100%, 75%, 1)',		
  aniArr = [
    {
      top: `${t}px`,
      backgroundColor: c,
      easing: 'ease-in'	    
    },
     {
      top: `${t + (t2-t)* 7/8}px`,
      backgroundColor: c2,
      easing: 'ease-out'	    
    },   {
      top: `${t2}px`,
      backgroundCOlor: c2,
      easing: 'ease-in'	    
    }
  ],
  dur = {duration: 500
  };		

  obj.animate(aniArr, dur);	
  obj.style.backgroundColor = c2;
  obj.style.top = `${t2}px`;
  obj.className = obj.className === 'off1' ? 'on1' : 'off1';	
}

function mouseEvent(e) {
  let num = Math.trunc(e.clientX / 45),
  preNum = localStorage.getItem('tmf-cnt') ? localStorage.getItem('tmf-cnt') : num,	
  obj = document.getElementById(`objs-test${num}`),
  cntWidth = Math.trunc(window.innerWidth / 45);
  if (preNum === num.toString()) {return};	
  localStorage.setItem('tmf-cnt', num);	
  
  for (let i = 0; i < num; i++){
    let tarObj = document.getElementById(`objs-test${i}`)
    , tarObj2 = document.getElementById(`tmf-stamp${i}`);	  
    if (tarObj.className === 'on' && num !== 0) {continue};	  
    if (tarObj2.className === 'on1' && num !== 0) {continue};	  
    animateBar(tarObj, tarObj.className);
    animateStamp(tarObj2, tarObj2.className);	  
  }
  for (i = cntWidth - 1; i >= num; i--) {
    let tarObj = document.getElementById(`objs-test${i}`)
    , tarObj2 = document.getElementById(`tmf-stamp${i}`);	  
    if (tarObj.className === 'off') {continue};	  
    if (tarObj2.className === 'off1') {continue};	  
    animateBar(tarObj, tarObj.className);
    animateStamp(tarObj2, tarObj2.className);	  
  }
}

function setBar(oClass, i) {
    let oneObj = document.createElement('div');
    oneObj.id = oClass.class + i;
    oneObj.className = 'off';	  
    oneObj.style.width = oClass.width;
    oneObj.style.height = oClass.height;
//    oneObj.style.backgroundColor = oClass.backgroundColor;
    oneObj.style.top = oClass.top;
    oneObj.style.left = i * 45 + 'px';
    oneObj.style.position = 'fixed';
    oneObj.style.border = oClass.border;	
    document.body.appendChild(oneObj);	  
}

function setStamp(cls, i) {
    let oneObj = document.createElement('div');
    oneObj.id = cls.id + i;
    oneObj.className = 'off1';	  
    oneObj.style.width = cls.width;
    oneObj.style.height = cls.height;
    oneObj.style.backgroundColor = cls.backgroundColor;
    oneObj.style.top = cls.top;
    oneObj.style.left = i * 45 + 'px';
    oneObj.style.position = 'fixed';
    document.body.appendChild(oneObj);	  

}
function setBrick(i) {
    let oneObj = document.createElement('div'),
   cls = {
   id: 'tmf-brick',
   width: '25px',
   height: '15px',
   backgroundColor : 'hsl(230, 100%, 75%, 1)',
   top: (window.innerHeight - 100) + 'px'
  };
    oneObj.id = cls.id + i;
    oneObj.className = 'off2';	  
    oneObj.style.width = cls.width;
    oneObj.style.height = cls.height;
    oneObj.style.backgroundColor = cls.backgroundColor;
    oneObj.style.top = cls.top;
    oneObj.style.left = (i * 45 + 20) + 'px';
    oneObj.style.position = 'fixed';
    document.body.appendChild(oneObj);	  

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
  stamper = {
   id: 'tmf-stamp',
   width: '20px',
   height: '15px',
   backgroundColor : 'hsl(230, 100%, 75%, 0)',
   top: (window.innerHeight - 100) + 'px'
  },
  cntWidth = Math.trunc(window.innerWidth / 45);
  for (let i = 0; i < cntWidth; i++) {
    setBar(oClass, i);
    setStamp(stamper, i);
    setBrick(i);	  
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
