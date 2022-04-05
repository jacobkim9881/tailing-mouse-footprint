//test.js
localStorage.tmfBallOn = '1';
function mouseEvent(e) {

  let xSize = 200;
  let squareWid = Math.random() * 0.3 + 0.2;
  let pOrM = Math.random() >= 0.5 ? 1 : -1;
  let tObj = document.getElementById('objs-test1');
  let t2Obj = document.getElementById('objs-test2');

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
  setTimeout(() => obj.remove(), xSize * 2 * (600/xSize) + 800);
  return obj;
  }
  let num = parseInt(localStorage.mouseCounter);
  localStorage.mouseCounter = num + 1;  
  if (num %  23 === 0 && localStorage.tmfBallOn === '1') {      
  localStorage.tmfBallOn = '0';
  let ballRad = 100;
  //Math.trunc(Math.random() * 100)
  let ballPos = {x: e.clientX + ballRad , y: e.clientY};  
    // for loop ball's orbit
    let obj = trigger(e);

    // bounce
    obj.animate([
      {top: (ballPos.y) + 'px',
      boxShadow: '0px 50px 22px -30px #000000'},
      {top: (ballPos.y - 10 )+ 'px',
      boxShadow: '0px 50px 22px -30px #000000'},
      {top: (ballPos.y) + 'px',
      boxShadow: '0px 50px 22px -30px #000000'},
      {top: (ballPos.y + 200 ) + 'px',
      boxShadow: '0px 9px 5px 1px #000000',}
    ], {duration: 810,
      timing(timeFraction) {
        return 1 - Math.sin(Math.acos(timeFraction))}
    })

    ballPos.y = ballPos.y + 200;

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
      obj.id = 'tmf-ball-start'

      // ball bounce with square graph
      let expX = pOrM === 1 ? xSize / 2 + ballPos.x : xSize * pOrM / 2 - xSize + ballPos.x;
      let expY = Math.pow(xSize, 2)/(100/squareWid) - Math.pow(-xSize, 2)/(100/squareWid) + ballPos.y;       
      let holeYPos = expY - 5 + 1/squareWid;
      let holeXPos = pOrM === 1 ? expX - 10 : expX - 20;
      //console.log(pOrM === 1 ? "1" : '-1')

      let ranPosY1 = Math.trunc(parseInt(e.clientY, 10) + ((Math.random() * 30) + 50) * pOrM);
      let ranPosX1 = Math.trunc(parseInt(e.clientX, 10) + (Math.random() * 30 + 200) * pOrM);
    console.log(ranPosY1, ranPosX1)
      // hole animation
      tObj.animate([
        {top: ranPosY1 + 'px',
         left: ranPosX1 + 'px',
         width: '0px',
         height: '0px'
        },
        {top: (holeYPos + 7) + 'px',
          left: holeXPos + 'px',
          width: '50px',
          height: '13px',
          offset: 0.92
         },         
        {top: (holeYPos ) + 'px',
        left: holeXPos + 'px',
        width: '0px',
        height: '0px',
        offset: 1
       },
      ], (xSize * 2 + 1) * (600/xSize) + 100)
      //1203

      t2Obj.animate([
        {top: ranPosY1 + 'px',
         left: ranPosX1 + 'px',
         width: '0px',
         height: '0px',
        },
        {top: holeYPos + 'px',
          left: holeXPos + 'px',
          width: '50px',
          height: '20px',
          offset: 0.92
         },         
        {top: holeYPos + 'px',
        left: holeXPos + 'px',
        width: '0px',
        height: '0px',
        offset: 1
       },
      ], (xSize * 2 + 1) * (600/xSize) + 100)

    } else if (i === xSize) {
      let holeYPos = newY - 5 + 1/squareWid;
      let holeXPos = pOrM === 1 ? newX - 10 : newX - 20;
      console.log(localStorage.xMousePos, ballPos.x, localStorage.xMousePos - ballPos.x)
      console.log(localStorage.yMousePos, ballPos.y - 200, localStorage.yMousePos - (ballPos.y - 200))
      localStorage.xMousePos = newX;
      localStorage.yMousePos = newY;
      localStorage.tmfBallOn = '1';
      /*
      t2Obj.style.left = holeXPos + 'px';
      t2Obj.style.top = holeYPos + 'px';
      tObj.style.left = holeXPos + 'px';
      tObj.style.top = (holeYPos  + 7) + 'px';
      */
      obj.id = 'tmf-ball'
      console.log(newX, newY)
    }    
    //ballPos.x = newX;
    //ballPos.y = newY;
     }, (xSize + 1 + i) * (600/xSize) + 800)
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
    let borderObj = document.createElement('div');
    borderObj.style.backgroundImage = 'repeating-linear-gradient(to right, rgb(128, 128, 128), rgb(230, 230, 230), rgb(128, 128, 128))';
    borderObj.style.border = '1px solid hsl(0, 0%, 30%)'    
    //borderObj.style.top = oClass.top;
    //borderObj.style.left = 50 + i * 45 + 'px';
    borderObj.style.width = '50px';
    borderObj.style.height = '20px';
    borderObj.style.display = 'block';
    borderObj.style.position = 'fixed';
    borderObj.style.borderRadius = '50%'
    borderObj.id = oClass.class + 2;
    let oneObj = document.createElement('div');
    oneObj.id = oClass.class + 1;
    oneObj.className = 'off';	  
    //oneObj.style.width = oClass.width;
    //oneObj.style.height = oClass.height;
    oneObj.style.backgroundColor = 'black';
    oneObj.style.boxShadow = '0px 0px 0px 1px hsl(0, 0%, 30%)';
    //oneObj.style.transform = 'rotateX(40deg)';
    //oneObj.style.top = oClass.top;
    //oneObj.style.left = 50 + i * 45 + 'px';
    oneObj.style.width = '50px';
    oneObj.style.height = '13px';
    oneObj.style.display = 'block';
    oneObj.style.position = 'fixed';
    oneObj.style.borderRadius = '50%'
    //oneObj.style.border = oClass.border;	
    borderObj.appendChild(oneObj);
    document.body.appendChild(borderObj);	  
  //}

}

function deleteObjs() {  
  let obj = document.getElementById('objs-test1');
  obj.remove();
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
