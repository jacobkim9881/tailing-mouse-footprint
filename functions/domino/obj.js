//
function setBar(i) {
    let oneObj = document.createElement('div'),
   oClass = {
   class: 'objs-test',
   width: '15px',
   height: '45px',
   border: '1px solid white',	  
   backgroundColor : 'none',
   top: (window.innerHeight -100) + 'px'
    };
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

function setStamp(i) {
    let oneObj = document.createElement('div'),
   cls = {
   id: 'tmf-stamp',
   width: '20px',
   height: '15px',
   backgroundColor : 'hsl(230, 100%, 75%, 0)',
   top: (window.innerHeight - 100) + 'px'
  };
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

function setSlide(i) {
    let oneObj = document.createElement('div'),
   cls = {
   id: 'tmf-slide',
   width: '20px',
   height: '15px',
   backgroundColor : 'hsl(150, 50%, 50%, 1)',
   top: (window.innerHeight - 115) + 'px'
  };
    oneObj.id = cls.id + i;
    oneObj.className = 'off3';	  
    oneObj.style.width = cls.width;
    oneObj.style.height = cls.height;
    oneObj.style.backgroundColor = cls.backgroundColor;
    oneObj.style.top = cls.top;
    oneObj.style.left = (i * 45 + 20) + 'px';
    oneObj.style.position = 'fixed';
    document.body.appendChild(oneObj);	  

}

