//test.js
function mouseEvent(e) {

  let xSize = 200;
  let squareWid = 0.1;
  function trigger(e) {
  let obj = document.createElement('div');
  let ballSize = window.innerWidth/100;
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
  setTimeout(() => obj.remove(), xSize * 2 * (600/xSize));
  return obj;
  }
  let num = parseInt(localStorage.mouseCounter);
  localStorage.mouseCounter = num + 1;
  if (num %  11 === 0 ) {  
  let ballRad = 100;
  //Math.trunc(Math.random() * 100)
  let ballPos = {x: e.clientX + ballRad , y: e.clientY};  
    // for loop ball's orbit
    let obj = trigger(e);
   for (let i = -xSize; i <= xSize; i++) {     
     let t = i >= 0 ? 100 + i : 100 + i;
     setTimeout(() => {
      let newX = i / 2 + ballPos.x;
      let newY;       
       newY = Math.pow(i, 2)/(100/squareWid) - Math.pow(-xSize, 2)/(100/squareWid) + ballPos.y;       
       console.log(newY)
       //console.log(Math.cos(i/180 * Math.PI), ballRad, ballPos.x)
    obj.style.left = newX + 'px';
    obj.style.top = newY + 'px';        
    //ballPos.x = newX;
    //ballPos.y = newY;
     }, (xSize + 1 + i) * (600/xSize))
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
