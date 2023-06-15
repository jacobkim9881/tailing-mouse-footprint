	  function runObjs(e, xSize, num, startDeg, timeSlower) {
		  const degs = [0, 60, 119, 179, -59, -119, -179]
    let ballPos = {x: e.clientX, y: e.clientY};  
    let obj = trigger(e, xSize, timeSlower)
		  //give class
    , obj2 = trigger(e, xSize, timeSlower)
    //, obj = trigger(e, xSize, timeSlower)
    , obj3 = trigger(e, xSize, timeSlower)
    , obj4 = trigger(e, xSize, timeSlower)
    , obj5 = trigger(e, xSize, timeSlower)
    , obj6 = trigger(e, xSize, timeSlower)
    , obj7 = trigger(e, xSize, timeSlower)
		  , round1 = 24 
		  , halfRound = round1/2
	, degTo24 = ((num + degs[0]) % (17 * round1)) / 17 
	, deg2To24 = ((num + degs[1]) % (17 * round1)) / 17 
	, deg3To24 = ((num + degs[2]) % (17 * round1)) / 17 
	, deg4To24 = ((num + degs[3]) % (17 * round1)) / 17 
	, deg5To24 = ((num + degs[4]) % (17 * round1)) / 17 
	, deg6To24 = ((num + degs[5]) % (17 * round1)) / 17 
	, deg7To24 = ((num + degs[6]) % (17 * round1)) / 17 
	, numIn360 = num % 360
	  , shootDeg = degTo24 < halfRound ? - (degTo24 * 15 % 181) * 2 - 0.01 : (360 - (degTo24 * 15 % 180)) * 2 - 0.01
	  , shootDeg2 = deg2To24 < halfRound ? - (deg2To24 * 15 % 181) * 2 - 0.01 : (360 - (deg2To24 * 15 % 180)) * 2 - 0.01
	  , shootDeg3 = deg3To24 < halfRound ? - (deg3To24 * 15 % 181) * 2 - 0.01 : (360 - (deg3To24 * 15 % 180)) * 2 - 0.01
	  , shootDeg4 = deg4To24 < halfRound ? - (deg4To24 * 15 % 181) * 2 - 0.01 : (360 - (deg4To24 * 15 % 180)) * 2 - 0.01
	  , shootDeg5 = deg5To24 < halfRound ? - (deg5To24 * 15 % 181) * 2 - 0.01 : (360 - (deg5To24 * 15 % 180)) * 2 - 0.01
	  , shootDeg6 = deg6To24 < halfRound ? - (deg6To24 * 15 % 181) * 2 - 0.01 : (360 - (deg6To24 * 15 % 180)) * 2 - 0.01
	  , shootDeg7 = deg7To24 < halfRound ? - (deg7To24 * 15 % 181) * 2 - 0.01 : (360 - (deg7To24 * 15 % 180)) * 2 - 0.01
		  , lengMulti = 0.5 

    for (let i = 1; i <= xSize; i++) {     
    	  let colorChange = Math.trunc((i * 0.05 + numIn360 )% 360) 
      setTimeout(() => {

        let newX = (Math.cos((shootDeg % 360) / 360 * Math.PI) *  i * lengMulti )+ ballPos.x  
        , newX2 = (Math.cos((shootDeg2 % 360) / 360 * Math.PI) *  i * lengMulti )+ ballPos.x  
        , newX3 = (Math.cos((shootDeg3 % 360) / 360 * Math.PI) *  i * lengMulti )+ ballPos.x  
        , newX4 = (Math.cos((shootDeg4 % 360) / 360 * Math.PI) *  i * lengMulti )+ ballPos.x  
        , newX5 = (Math.cos((shootDeg5 % 360) / 360 * Math.PI) *  i * lengMulti )+ ballPos.x  
        , newX6 = (Math.cos((shootDeg6 % 360) / 360 * Math.PI) *  i * lengMulti )+ ballPos.x  
        , newX7 = (Math.cos((shootDeg7 % 360) / 360 * Math.PI) *  i * lengMulti )+ ballPos.x  
               , newY = Math.sin((shootDeg % 360) / 360 * Math.PI) * i * lengMulti + ballPos.y 
               , newY2 = Math.sin((shootDeg2 % 360) / 360 * Math.PI) * i * lengMulti + ballPos.y 
               , newY3 = Math.sin((shootDeg3 % 360) / 360 * Math.PI) * i * lengMulti + ballPos.y 
               , newY4 = Math.sin((shootDeg4 % 360) / 360 * Math.PI) * i * lengMulti + ballPos.y 
               , newY5 = Math.sin((shootDeg5 % 360) / 360 * Math.PI) * i * lengMulti + ballPos.y 
               , newY6 = Math.sin((shootDeg6 % 360) / 360 * Math.PI) * i * lengMulti + ballPos.y 
               , newY7 = Math.sin((shootDeg7 % 360) / 360 * Math.PI) * i * lengMulti + ballPos.y 
        obj.style.backgroundColor = `hsl(${colorChange}, 80%, 55%)` 
        obj2.style.backgroundColor = `hsl(${colorChange}, 80%, 55%)` 
        obj3.style.backgroundColor = `hsl(${colorChange}, 80%, 55%)` 
        obj4.style.backgroundColor = `hsl(${colorChange}, 80%, 55%)` 
        obj5.style.backgroundColor = `hsl(${colorChange}, 80%, 55%)` 
        obj6.style.backgroundColor = `hsl(${colorChange}, 80%, 55%)` 
        obj7.style.backgroundColor = `hsl(${colorChange}, 80%, 55%)` 
        obj.style.left = newX + 'px';
        obj2.style.left = newX2 + 'px';
        obj3.style.left = newX3 + 'px';
        obj4.style.left = newX4 + 'px';
        obj5.style.left = newX5 + 'px';
        obj6.style.left = newX6 + 'px';
        obj7.style.left = newX7 + 'px';
        obj.style.top = newY + 'px';        
        obj2.style.top = newY2 + 'px';        
        obj3.style.top = newY3 + 'px';        
        obj4.style.top = newY4 + 'px';        
        obj5.style.top = newY5 + 'px';        
        obj6.style.top = newY6 + 'px';        
        obj7.style.top = newY7 + 'px';        
	  obj.style.display = 'block'
	  obj2.style.display = 'block'
	  obj3.style.display = 'block'
	  obj4.style.display = 'block'
	  obj5.style.display = 'block'
	  obj6.style.display = 'block'
	  obj7.style.display = 'block'
      }, (1 + i * timeSlower))
    }
  }

function runObj(e, xSize, num, startDeg, timeSlower) {
    //Math.trunc(Math.random() * 100)
		  //console.time('client x, y: ')
    let ballPos = {x: e.clientX, y: e.clientY};  
		  //console.timeLog('client x, y: ')
    // for loop ball's orbit
    let obj = trigger(e, xSize, timeSlower)
		  //console.time('trigger: ')
		  //console.timeLog('trigger: ')
		  , round1 = 24 
		  , halfRound = round1/2
	//, numIn360 = ((num + startDeg) % (17 * round1)) / 17 
	, degTo24 = ((num + startDeg) % (17 * round1)) / 17 
	, numIn360 = num % 360
	  , shootDeg = degTo24 < halfRound ? - (degTo24 * 15 % 181) * 2 - 0.01 : (360 - (degTo24 * 15 % 180)) * 2 - 0.01
	  //, shootDeg = numIn360  < 180 ? - (numIn360 + startDeg % 180) * 2 : (179 - (numIn360+ startDeg % 180)) * 2
		  , lengMulti = 0.5 
	  //console.log('shootDeg : ', shootDeg, ' numIn360 : ', numIn360)

	  // this will hide stayed obj
	  //obj.style.display = 'none'
		  //let degChange
		  //, newX
		  //, newY
    for (let i = 1; i <= xSize; i++) {     
     // let t = i >= 0 ? 100 + i : 100 + i
	    	  //let degChange = Math.trunc((i * 0.2 )% 360) 
	    	  //let degChange = Math.trunc((i * 0.2 )% 360) 
	    	  //, degChange = Math.trunc((i * 0.54 )% 360) 
	  let colorChange = Math.trunc((i * 0.05 + numIn360 )% 360) 
	  //, colorChange = Math.trunc((i * 0.05 + numIn360 )% 360) 
	  //, colorChange2 = Math.trunc((i * num * 0.005 + 180)% 360) 
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
//	      console.time('style: ')
        obj.style.backgroundColor = `hsl(${colorChange}, 80%, 55%)` 
        //obj.style.background = `linear-gradient(${degChange}deg, hsl(${colorChange}, 100%, 50%), hsl(${colorChange2}, 100%, 50%) 100%)` 
        obj.style.left = newX + 'px';
        obj.style.top = newY + 'px';        
	  obj.style.display = 'block'
//	      console.timeEnd('style: ')
        //ballPos.x = newX;
        //ballPos.y = newY;
      }, (1 + i * timeSlower))
    }
  }
  function trigger(e, xSize, timeSlower) {
    let obj = document.createElement('div');
    //let ballSize = window.innerWidth/150;
    //let randomBallSize = (window.innerWidth/60) 
		  //Math.trunc(Math.random() * ballSize) + 5;
    //let ranXpos = parseInt(e.clientX, 10);
    //let ranYpos = parseInt(e.clientY, 10);
    //let ranH = Math.trunc(Math.random() * 360);
	  obj.className = 'round-grad'
    //let ranH2 =  Math.trunc(Math.random() * 360); 
    //obj.style.position = 'fixed';
    //obj.style.left = ranXpos + 'px';
    //obj.style.top = ranYpos + 'px'
    //obj.style.width = oClass.width;
    //obj.style.height = randomBallSize + 'px';
    //obj.style.backgroundColor = `hsl(${ranH}, 100%, 50%)`;
    //obj.style.borderRadius = '50%';
  
    document.body.appendChild(obj);
    setTimeout(() => obj.remove(), xSize * timeSlower );
    return obj;
  }

function mouseEvent(e) {

  let xSize = 500
	, timeSlower = 3 
  let squareWid = Math.random() * 0.4 + 0.1;
  let pOrM = Math.random() >= 0.5 ? 1 : -1;

  let num = parseInt(localStorage.mouseCounter);
  localStorage.mouseCounter = num + 1;
  if (num %  10 === 0 ) {
	  //console.log(num)
	 // for(let i = 1, i <= 6; i++) {
	   console.time('style: ')
runObjs(e, xSize, num, 0, timeSlower)
	      console.timeEnd('style: ')
/*
	      console.time('style: ')
//runObj(e, xSize, num, i * 60)
runObj(e, xSize, num, 0, timeSlower)
runObj(e, xSize, num, 60, timeSlower)
//runObj(e, xSize, num, 119, timeSlower)
//runObj(e, xSize, num, 179, timeSlower)
//runObj(e, xSize, num, - 59, timeSlower)
//runObj(e, xSize, num, - 119, timeSlower)
//runObj(e, xSize, num, - 179, timeSlower)
	      console.timeEnd('style: ')
	  */
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
    let oneObj = document.createElement('div');
    let randomBallSize = (window.innerWidth/60) 
    oneObj.className = 'round-grad';	  
    oneObj.style.width = randomBallSize + 'px';
    oneObj.style.height = randomBallSize + 'px';
    oneObj.style.borderRadius = '50%';
    //    oneObj.style.backgroundColor = oClass.backgroundColor;
    oneObj.style.position = 'fixed';
    document.body.appendChild(oneObj);	  
}
function deleteObjs() {
  let cntWidth = Math.trunc(window.innerWidth / 45);
  for (let i = 0; i < cntWidth; i++) {
    if (!document.getElementById(`objs-test${i}`)) {continue;}
    document.getElementById(`objs-test${i}`).remove();
  }
}
document.body.addEventListener('mousemove', mouseEvent);
//setObjs()
chrome.runtime.onMessage.addListener((msg) => {
  document.body.removeEventListener('mousemove', mouseEvent);
});
