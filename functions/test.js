//test.js 
function trigger(e) {
	// object for styling
  let obj = document.createElement('div');
    obj.style.position = 'fixed';
    obj.style.backgroundColor = 'white'
    obj.style.height = '1px'	

  return obj;
  }

function buildObj(e, roDeg, pOrM, xSize, ballPos, edge, func) {
   //if (Math.random() > 0.5) return;
   const obj1 = trigger(e)
   , ranYpos = Math.trunc(Math.random() * 80) * pOrM + parseInt(e.clientY, 10) 
    obj1.style.top = ranYpos + 'px'

return obj1
}

function dimmingStar(obj1, obj2, roDeg, ballPos, i, ran50, edge, e, xSize) {
      setTimeout(() => {
        let obj1X , obj2X, width1
	width1 = i < 50 ? i + 1 : 50 
	, rightAndLeft = i % 2      
        obj1X =  ballPos.x - 4 * rightAndLeft + 2 + ran50 
        , obj2X =  ballPos.x - 4 * rightAndLeft + 2 + ran50
			      console.log('obj1x: ', obj1X)
	      console.log('obj2X: ', obj2X)
        obj1.style.left = obj1X + 'px';
        obj2.style.left = obj2X + 'px';
	      console.log(obj2X < edge)
	      obj1.style.width = 1 + 'px';
        obj2.style.width = 1 + 'px';  	

      }, (xSize + 1 + i * 10)) 
	 document.body.appendChild(obj1);
//  document.body.appendChild(obj2);
	      //console.log('edge: ', edge)
     setTimeout(() =>  {
	 obj1.remove()
	 //obj2.remove()
        localStorage.xMousePos = e.clientX;	
  } ,(1000));
}

function loopObj(obj1, obj2, roDeg, ballPos, ran50, edge, e, xSize) {
	 // console.log('roDeg: ', roDeg)
 for (let i = 0; i <= xSize; i++) {     
      setTimeout(() => {
        let obj1X , obj2X, width1
	width1 = i < 50 ? i + 1 : 50 
	if (roDeg === -1) {      
        obj1X =  ballPos.x - 2 * (i * i)/10 - (ran50 - i) 
        , obj2X =  ballPos.x - 2 * (i * i)/10 - 2- (ran50 - i) 
//	      console.log('obj1x: ', obj1X)
        obj1.style.left = obj1X + 'px';
        obj2.style.left = obj2X + 'px';
        if(obj2X < edge) return
	      //console.log(obj2X < edge)
	} else {
        obj1X =  ballPos.x + 2 * (i * i)/10 + (ran50 - i) 
        , obj2X =  ballPos.x + 2 * (i * i)/10 + 1 + (ran50 - i) 
//	      console.log('obj1x: ', obj1X)
        obj1.style.left = obj1X + 'px';
        obj2.style.left = obj2X + 'px';
        if(obj2X > edge) return
	      //console.log(obj2X > edge)
	}
        obj1.style.width = width1 + 'px';
        obj2.style.width = 1 + 'px';  	

      }, (xSize + 1 + i * 10)) 
	 document.body.appendChild(obj1);
  document.body.appendChild(obj2);
	      //console.log('obj2X: ', obj2X)
	      //console.log('edge: ', edge)
    }
     setTimeout(() =>  {
	 obj1.remove()
	 obj2.remove()
        localStorage.xMousePos = e.clientX;	
  } ,(1000));
}

function mouseEvent(e) {
  let xSize = 100
		//Math.trunc(Math.random() * 50) + 35;
  let squareWid = Math.random() * 0.4 + 0.1;
  let pOrM = Math.random() >= 0.5 ? 1 : -1;
   let num = parseInt(localStorage.mouseCounter);
  localStorage.mouseCounter = num + 1;
  if (num %  3 === 0 ) {
  let  ballPos = {x: e.clientX , y: e.clientY} 
	, diff =  e.clientX - localStorage.xMousePos 
      , roDeg = e.clientX - localStorage.xMousePos > 0 ? -1 : 1	  
	, limit = 200 
     , edge = roDeg === 1 ? ballPos.x + limit : ballPos.x - limit 
//console.log(diff)
	const obj2 = buildObj(e, roDeg, pOrM, xSize, ballPos, edge)
	  , obj1 = buildObj(e, roDeg, pOrM, xSize, ballPos, edge)
		  , ran50 = (Math.trunc(Math.random() * 150) + 15) * pOrM 
    if (Math.abs(diff) > 50) loopObj(obj1, obj2, roDeg, ballPos, ran50, edge, e, xSize) 
//	  else dimminingStar(obj1, obj2, roDeg, ballPos, i, ran50, edge, e, xSize);


	    } 
}

document.body.addEventListener('mousemove', mouseEvent);

chrome.runtime.onMessage.addListener((msg) => {
document.body.removeEventListener('mousemove', mouseEvent)
});
