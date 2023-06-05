	  function runObj(e, xSize, num, startDeg, timeSlower) {
    //Math.trunc(Math.random() * 100)
    let ballPos = {x: e.clientX, y: e.clientY};  
    // for loop ball's orbit
    let obj = trigger(e, xSize, timeSlower)
		  , round1 = 24 
		  , halfRound = round1/2
	//, numIn360 = ((num + startDeg) % (17 * round1)) / 17 
	, degTo24 = ((num + startDeg) % (17 * round1)) / 17 
	, numIn360 = num % 360
	  , shootDeg = degTo24 < halfRound ? - (degTo24 * 15 % 181) * 2 - 0.01 : (360 - (degTo24 * 15 % 180)) * 2 - 0.01
	  //, shootDeg = numIn360  < 180 ? - (numIn360 + startDeg % 180) * 2 : (179 - (numIn360+ startDeg % 180)) * 2
		  , lengMulti = 1.5 
	  //console.log('shootDeg : ', shootDeg, ' numIn360 : ', numIn360)
		  
	  // this will hide stayed obj
	  //obj.style.display = 'none'
		  //let degChange
		  //, newX
		  //, newY
    for (let i = 1; i <= xSize; i++) {     
     // let t = i >= 0 ? 100 + i : 100 + i
	    	  let degChange = Math.trunc((i * 0.2 )% 360) 
	    	  //let degChange = Math.trunc((i * 0.2 )% 360) 
	    	  //, degChange = Math.trunc((i * 0.54 )% 360) 
	  , colorChange = Math.trunc((i * 0.05 + numIn360 )% 360) 
	  , colorChange2 = Math.trunc((i * num * 0.005 + 180)% 360) 
	  //, colorChange = Math.trunc((i * num * 0.01 )% 360) 
	  //, colorChange2 = Math.trunc((i * num * 0.01 + 180)% 360) 
      setTimeout(() => {

        let newX = (Math.cos((shootDeg % 360) / 360 * Math.PI) *  i * lengMulti )+ ballPos.x  
        //let newX = (Math.cos(i2/xSize * Math.PI) * roundLength)+ ballPos.x  
		      //Math.pow(i, 2)/(100/squareWid) - Math.pow(-xSize, 2)/(100/squareWid) + ballPos.x;       

		      //pOrM === 1 ? i / 2 + ballPos.x : i * pOrM / 2 - xSize + ballPos.x;
        let newY = Math.sin((shootDeg % 360) / 360 * Math.PI) * i * lengMulti + ballPos.y 
        //newY = Math.sin(i2/xSize * Math.PI) * roundLength + ballPos.y 

		      //Math.pow(i, 2)/(100/squareWid) - Math.pow(-xSize, 2)/(100/squareWid) + ballPos.y;      
//	      console.log(roundLength)
	//console.log(newX, newY)
//	      console.log(num)
        //console.log(Math.cos(i/180 * Math.PI), ballRad, ballPos.x)
        obj.style.backgroundColor = `hsl(${colorChange}, 80%, 50%)` 
        //obj.style.background = `linear-gradient(${degChange}deg, hsl(${colorChange}, 100%, 50%), hsl(${colorChange2}, 100%, 50%) 100%)` 
        obj.style.left = newX + 'px';
        obj.style.top = newY + 'px';        
	  obj.style.display = 'block'
        //ballPos.x = newX;
        //ballPos.y = newY;
      }, (1 + i * timeSlower))
    }
  }
  function trigger(e, xSize, timeSlower) {
    let obj = document.createElement('div');
    let ballSize = window.innerWidth/150;
    let randomBallSize = (window.innerWidth/60) 
		  //Math.trunc(Math.random() * ballSize) + 5;
    let ranXpos = parseInt(e.clientX, 10);
    let ranYpos = parseInt(e.clientY, 10);
    let ranH = Math.trunc(Math.random() * 360);
    let ranH2 =  Math.trunc(Math.random() * 360); 
    obj.style.position = 'fixed';
    //obj.style.left = ranXpos + 'px';
    //obj.style.top = ranYpos + 'px'
    obj.style.width = randomBallSize + 'px';
    obj.style.height = randomBallSize + 'px';
    //obj.style.backgroundColor = `hsl(${ranH}, 100%, 50%)`;
    obj.style.borderRadius = '50%';
  
    document.body.appendChild(obj);
    setTimeout(() => obj.remove(), xSize * timeSlower );
    return obj;
  }

function mouseEvent(e) {

  let xSize = 500
	, timeSlower = 4
  let squareWid = Math.random() * 0.4 + 0.1;
  let pOrM = Math.random() >= 0.5 ? 1 : -1;

  let num = parseInt(localStorage.mouseCounter);
  localStorage.mouseCounter = num + 1;
  if (num %  17 === 0 ) {
	  //console.log(num)
	 // for(let i = 1, i <= 6; i++) {
//runObj(e, xSize, num, i * 60)
runObj(e, xSize, num, 0, timeSlower)
runObj(e, xSize, num, 60, timeSlower)
runObj(e, xSize, num, 119, timeSlower)
runObj(e, xSize, num, 179, timeSlower)
runObj(e, xSize, num, - 59, timeSlower)
runObj(e, xSize, num, - 119, timeSlower)
runObj(e, xSize, num, - 179, timeSlower)
	 // }
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
