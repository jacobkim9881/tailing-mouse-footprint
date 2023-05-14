function mouseEvent(e) {

  let xSize = 1000;
  let squareWid = Math.random() * 0.4 + 0.1;
  let pOrM = Math.random() >= 0.5 ? 1 : -1;

  function trigger(e) {
    let obj = document.createElement('div');
    let ballSize = window.innerWidth/150;
    let randomBallSize = Math.trunc(Math.random() * ballSize) + 5;
    let ranXpos = parseInt(e.clientX, 10);
    let ranYpos = parseInt(e.clientY, 10);
    let ranH = Math.trunc(Math.random() * 360);
    let ranH2 =  Math.trunc(Math.random() * 360); 
    obj.style.position = 'fixed';
    obj.style.left = ranXpos + 'px';
    obj.style.top = ranYpos + 'px'
    obj.style.width = randomBallSize + 'px';
    obj.style.height = randomBallSize + 'px';
    obj.style.backgroundColor = `hsl(${ranH}, 100%, 50%)`;
    obj.style.borderRadius = '50%';
  
    document.body.appendChild(obj);
    setTimeout(() => obj.remove(), xSize * 2 );
    return obj;
  }
  let num = parseInt(localStorage.mouseCounter);
  localStorage.mouseCounter = num + 1;
  if (num %  7 === 0 ) {  
    let ballRad = 100;
    //Math.trunc(Math.random() * 100)
    let ballPos = {x: e.clientX + ballRad , y: e.clientY};  
    // for loop ball's orbit
    let obj = trigger(e)
	  , roundLength = 1
	    , limit = xSize/2
	  , former2
	  , shootDeg = num % 360 < 180 ? - (num % 180) * 2 : (179 - (num % 180)) * 2
	  console.log(shootDeg)
	  // this will hide stayed obj
	  //obj.style.display = 'none'
    for (let i = 1; i <= xSize; i++) {     
     // let t = i >= 0 ? 100 + i : 100 + i
	    let i2 = i * 2
	    
      setTimeout(() => {

        let newX = (Math.cos((shootDeg % 360) / 360 * Math.PI) * roundLength * i)+ ballPos.x  
        //let newX = (Math.cos(i2/xSize * Math.PI) * roundLength)+ ballPos.x  
		      //Math.pow(i, 2)/(100/squareWid) - Math.pow(-xSize, 2)/(100/squareWid) + ballPos.x;       

		      //pOrM === 1 ? i / 2 + ballPos.x : i * pOrM / 2 - xSize + ballPos.x;
        let newY;             
        newY = Math.sin((shootDeg % 360) / 360 * Math.PI) * roundLength * i + ballPos.y 
        //newY = Math.sin(i2/xSize * Math.PI) * roundLength + ballPos.y 

		      //Math.pow(i, 2)/(100/squareWid) - Math.pow(-xSize, 2)/(100/squareWid) + ballPos.y;      
//	      console.log(roundLength)
	console.log(newX, newY)
        //console.log(Math.cos(i/180 * Math.PI), ballRad, ballPos.x)
        obj.style.left = newX + 'px';
        obj.style.top = newY + 'px';        
	  obj.style.display = 'block'
        //ballPos.x = newX;
        //ballPos.y = newY;
      }, (xSize + 1 + i))
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
