function mouseEvent(e) {

  let xSize = 186;
  let squareWid = Math.random() * 0.4 + 0.1;
  let pOrM = Math.random() >= 0.5 ? 1 : -1;

  function trigger(e) {
    let obj = document.createElement('div');
    let ranXpos = parseInt(e.clientX, 10);
    let ranYpos = parseInt(e.clientY, 10);
    obj.style.display = 'none';	  
    obj.style.position = 'fixed';
    obj.style.left = ranXpos + 'px';
    obj.style.top = ranYpos + 'px'
    obj.style.width = (window.innerWidth/60) + 'px';
    obj.style.height = (window.innerWidth/60) + 'px';
    //obj.style.height = (window.innerHeight*1/400) + 'px';
    obj.style.backgroundColor = `hsl(${(localStorage.mouseCounter * 10) % 360}, 100%, 50%)`;
    //obj.style.borderRadius = '50%';
  
    document.body.appendChild(obj);
    setTimeout(() => obj.remove(), xSize * 1 * (300/xSize));
    return obj;
  }
  let num = parseInt(localStorage.mouseCounter);
  localStorage.mouseCounter = num + 1;
  if (num % 2 === 0 ) {  
    let ballRad = 100;
    let barLen = window.innerWidth/60;  
    //Math.trunc(Math.random() * 100)
    let ballPos = {x: e.clientX , y: e.clientY};  
    // for loop ball's orbit
    let obj = trigger(e);
    let roDeg = e.clientX - localStorage.xMousePos > 0 ? 1 : -1;	     
    //let roDeg = e.clientX - localStorage.xMousePos > 0 ? -1 : 1;	     

    for (let i = - xSize; i <= 0; i++) {     
      let t = i >= 0 ? 100 + i : 100 + i;
      let i2 = i >= 0 ? i : i + 180;	   
      //let i2 = i >= 0 ? i - 180 : i;	   
      setTimeout(() => {

		     //(Math.cos(i/180 * Math.PI)*ballRad) + ballPos.x; 
		     //pOrM === 1 ? i / 2 + ballPos.x : i * pOrM / 2 - xSize + ballPos.x;
        let newY
          , newX = ballPos.x - (i/xSize) * roDeg * (barLen) * 0.2;
        newY = ballPos.y + (Math.sin(i/xSize * Math.PI) * barLen);
	     
		     //Math.pow(i, 2)/(100/squareWid) - Math.pow(-xSize, 2)/(100/squareWid) + ballPos.y;       

        //console.log(Math.cos(i/180 * Math.PI), ballRad, ballPos.x)
        obj.style.display = 'block';
        obj.style.left = newX + 'px';
        obj.style.top = newY + 'px';        
        //obj.style.transform = `rotate(${i2 * roDeg}deg)`;	   
        //console.log(localStorage.xMousePos, e.clientX)	     
        localStorage.xMousePos = e.clientX;	
        if (num %  11 === 0 ) {  
          //ballPos.x = newX;
          //ballPos.y = newY;
        }
      }, (xSize + 1 + i) * (300/xSize))
    }
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
document.body.addEventListener('mousemove', mouseEvent);
chrome.runtime.onMessage.addListener((msg) => {
  document.body.removeEventListener('mousemove', mouseEvent);
});
