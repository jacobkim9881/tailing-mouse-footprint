function mouseEventColorSpring(e) {

  let xSize = 186;
  let squareWid = Math.random() * 0.4 + 0.1;
  let pOrM = Math.random() >= 0.5 ? 1 : -1;

  function trigger(e) {
    let obj = document.createElement('div');
    let ranXpos = parseInt(e.clientX, 10);
    let ranYpos = parseInt(e.clientY, 10);
    obj.style.position = 'fixed';
    obj.style.width = (window.innerWidth/60) + 'px';
    obj.style.height = (window.innerHeight*1/300) + 'px';
    obj.style.backgroundColor = `hsl(${(localStorage.mouseCounter * 10) % 360}, 100%, 50%)`;
    //obj.style.borderRadius = '50%';
  
    document.body.appendChild(obj);
    setTimeout(() => obj.remove(), xSize * 2 * (300/xSize));
    return obj;
  }
  let num = parseInt(localStorage.mouseCounter);
  localStorage.mouseCounter = num + 1;
  if (num % 3 === 0 ) {  
    let barLen = window.innerWidth/40  
    , ballPos = {x: e.clientX , y: e.clientY}  
    , obj = trigger(e)
    , roDeg = e.clientX - localStorage.xMousePos > 0 ? -1 : 1;	     

    for (let i = - xSize; i <= xSize; i++) {     
      let i2 = i >= 0 ? i - 180 : i;	   
      setTimeout(() => {
        let newX = ballPos.x - (i2/xSize) * roDeg * (barLen) * 0.2
        , newY = ballPos.y - 10 + (Math.sin(i2/xSize * Math.PI) * barLen);
        obj.style.left = newX + 'px';
        obj.style.top = newY + 'px';        
        obj.style.transform = `rotate(${i2 * roDeg}deg)`;	   
        localStorage.xMousePos = e.clientX;	
      }, (xSize + 1 + i) * (300/xSize))
    }
  }
}

