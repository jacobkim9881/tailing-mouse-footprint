//test.js
localStorage.tmfBallOn = '1';
function mouseEvent(e) {

  let xSize = 200;
  let squareWid = Math.random() * 0.4 + 0.1;
  let pOrM = Math.random() >= 0.5 ? 1 : -1;
  let tObj = document.getElementById('objs-test1');

  function trigger(e) {
  let obj = document.createElement('div');
  let ballSize = window.innerWidth/100;
  let randomBallSize = Math.trunc(Math.random() * ballSize);
  let ranXpos = parseInt(e.clientX, 10);
  let ranYpos = parseInt(e.clientY, 10);
  let ranH = Math.trunc(Math.random() * 360);
  let ranH2 =  Math.trunc(Math.random() * 360); 
  obj.id = 'tmf-ball';
  obj.style.position = 'fixed';
  obj.style.left = ranXpos + 'px';
  obj.style.top = ranYpos + 'px'
  obj.style.width = ballSize + 'px';
  obj.style.height = ballSize + 'px';
  obj.style.backgroundColor = `hsl(${ranH}, 100%, 50%)`;
  obj.style.borderRadius = '50%';
  
  document.body.appendChild(obj);
  setTimeout(() => obj.remove(), xSize * 2 * (600/xSize));
  return obj;
  }
  let num = parseInt(localStorage.mouseCounter);
  localStorage.mouseCounter = num + 1;  
  if (num %  23 === 0 && localStorage.tmfBallOn === '1') {  
  let ballRad = 100;
  //Math.trunc(Math.random() * 100)
  let ballPos = {x: e.clientX + ballRad , y: e.clientY};  
    // for loop ball's orbit
    let obj = trigger(e);
   for (let i = -xSize; i <= xSize; i++) {     
     let t = i >= 0 ? 100 + i : 100 + i;
     setTimeout(() => {
      let newX = pOrM === 1 ? i / 2 + ballPos.x : i * pOrM / 2 - xSize + ballPos.x;
      let newY;             
      newY = Math.pow(i, 2)/(100/squareWid) - Math.pow(-xSize, 2)/(100/squareWid) + ballPos.y;       
      
      //console.log(newY)
       //console.log(Math.cos(i/180 * Math.PI), ballRad, ballPos.x)
    obj.style.left = newX + 'px';
    obj.style.top = newY + 'px';        
    if (i === - xSize) {
      localStorage.tmfBallOn = '0';
      obj.id = 'tmf-ball-start'
      let expX = pOrM === 1 ? xSize / 2 + ballPos.x : xSize * pOrM / 2 - xSize + ballPos.x;
      let expY = Math.pow(xSize, 2)/(100/squareWid) - Math.pow(-xSize, 2)/(100/squareWid) + ballPos.y;       
      let holeYPos = expY - 5;
      let holeXPos = pOrM === 1 ? expX - 10 : expX - 20;
      //console.log(pOrM === 1 ? "1" : '-1')
      tObj.animate([
        {top: localStorage.yMousePos + 'px',
         left: localStorage.xMousePos + 'px'
        },
        {top: holeYPos + 'px',
          left: holeXPos + 'px'
         }
      ], (xSize * 2 + 1) * (600/xSize))
    } else if (i === xSize) {
      let holeYPos = newY - 5;
      let holeXPos = pOrM === 1 ? newX - 10 : newX - 20;
      localStorage.xMousePos = newX;
      localStorage.yMousePos = newY;
      localStorage.tmfBallOn = '1';
      tObj.style.left = holeXPos + 'px';
      tObj.style.top = holeYPos + 'px';
      obj.id = 'tmf-ball'
      console.log(newX, newY)
    }    
    //ballPos.x = newX;
    //ballPos.y = newY;
     }, (xSize + 1 + i) * (600/xSize))
   }
  }
}

function setObjs() {
  let oClass = {
   class: 'objs-test',
   width: '50px',
   height: '20px',
   border: '1px solid white',	  
   backgroundColor : 'none',
   top: (window.innerHeight -100) + 'px'
  },
  cntWidth = Math.trunc(window.innerWidth / 45);
  //for (let i = 0; i < cntWidth; i++) {
    let oneObj = document.createElement('div');
    oneObj.id = oClass.class + 1;
    oneObj.className = 'off';	  
    oneObj.style.width = oClass.width;
    oneObj.style.height = oClass.height;
    oneObj.style.backgroundColor = 'black';
    //oneObj.style.top = oClass.top;
    //oneObj.style.left = 50 + i * 45 + 'px';
    oneObj.style.display = 'block';
    oneObj.style.position = 'fixed';
    oneObj.style.borderRadius = '50%'
    //oneObj.style.border = oClass.border;	
    document.body.appendChild(oneObj);	  
  //}

}

function deleteObjs() {  
  /*
  let cntWidth = Math.trunc(window.innerWidth / 45);
  for (let i = 0; i < cntWidth; i++) {
  if (!document.getElementById(`objs-test${i}`)) {continue;}
  document.getElementById(`objs-test${i}`).remove();
  }
  */
}


document.body.addEventListener('mousemove', mouseEvent);
setObjs();
chrome.runtime.onMessage.addListener((msg) => {
  setObjs();
document.body.removeEventListener('mousemove', mouseEvent);
});
