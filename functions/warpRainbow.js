//warpWhite.js 
function trigger(e) {
	// object for styling
  let obj = document.createElement('div');
    obj.style.position = 'fixed';
    obj.style.borderStyle = 'outset'
  return obj;
  }

function buildObj(e, ranYpos, ranH) {
//function buildObj(e, pOrM) {
   //if (Math.random() > 0.5) return;
   const obj1 = trigger(e)
	, ran3 = 1 
//   , ranYpos = Math.trunc(Math.random() * 80) * pOrM + parseInt(e.clientY, 10) 
    obj1.className = 'tmf-star'
    obj1.style.top = (ranYpos - ran3/2) + 'px'
    obj1.style.height = ran3 + 'px'	
    obj1.style.width = ran3 + 'px';  	
    obj1.style.backgroundColor = `hsl(${ranH}, 100%, 50%)`;
return obj1
}

//function buildObj1(e, pOrM) {
function buildObj1(e, ranYpos, ranH) {
   //if (Math.random() > 0.5) return;
   const obj1 = trigger(e)
//   , ranYpos = Math.trunc(Math.random() * 80) * pOrM + parseInt(e.clientY, 10) 
    obj1.className = 'tmf-tail'
    obj1.style.top = ranYpos + 'px'
    obj1.style.height = '10px'	
    obj1.style.backgroundColor = `hsl(${ranH}, 100%, 50%)`;

return obj1
}
function dimmingStar(obj1, obj2, ballPos, e, ran50, plusOrMinus, xSize, limit) {
	//let star size different
        let obj1X 
	, rightAndLeft = Math.random() > 0.5 ? 1 : -1     
        obj1X =  ballPos.x + ran50 
//		- 4 * rightAndLeft + 2 + ran50 
	//		      console.log('obj1x: ', obj1X)
        obj1.style.left = obj1X + 'px';
	      //obj1.style.width = 1 + 'px';

	 document.body.appendChild(obj1);

  animateDimming(1, 4, false, obj1X, plusOrMinus, obj1)

	setTimeout(() =>  {
		//console.log(e.clientX, localStorage.xMousePos, (localStorage.xMousePos2) ) 
		//const diff = e.clientX - parseInt(localStorage.xMousePos) 
		//const diff = parseInt(localStorage.xMousePos2) - parseInt(localStorage.xMousePos) 
		const diff = e.clientX - parseInt(localStorage.xMousePos2) 
	 , differenceAbs = Math.abs(diff) 
	, getLeftOrRight = parseInt(localStorage.leftOrRight)
	//console.log('load LOR: ', getLeftOrRight)
//		console.log('diff: ', diff, 'x: ', e.clientX, 'storage x: ', localStorage.xMousePos)
		if (differenceAbs < 100) {
//console.log('objs: ', obj1, obj2)
  animateDimming(4, 11, true, obj1X, plusOrMinus, obj1)
     setTimeout(() =>  {
//	     console.log('remove')
	 obj1.remove()
	 obj2.remove()
//console.log('objs: ', obj1, obj2)
        if (e) localStorage.xMousePos = e.clientX;	
  } ,(1000));
} else {
//console.log('event count:')

	//console.log('load LOR: ', getLeftOrRight)
//console.log('objs: ', obj1, obj2)
loopObj(obj1, obj2, getLeftOrRight, ballPos, ran50, xSize, limit) 
}
  } ,(1000))

}

function limitFinish(limit, edge, obj1, obj2, clientX) {
if(limit > edge) {
		obj1.remove()
	 obj2.remove()
        localStorage.xMousePos = clientX;	
	//	console.log('limit: ', limit, 'edge: ', edge, 'diff: ', edge)
	//	console.log('return')
		return
	} else {
		//loop till i = 29
//		console.log('count: ', i)
//		console.log('limit: ', limit, 'edge: ', edge, 'diff: ', edge - limit)
	}
}

function animateDimming(i, limit, isRemove, x, plusOrMinus, obj) {
//	console.log('i: ', i)
if (i === limit) {
if (isRemove) obj.remove()
	return; 	
}
setTimeout(() => {
if (obj) { obj.style.left = (i * 0.5 * plusOrMinus + x) + 'px'
 document.body.appendChild(obj);
	i++
return animateDimming(i, limit, x, plusOrMinus, obj)	
}
}, 125)
return
}

function setDirection(direction) {
localStorage.currentDirection = direction

setTimeout(() => {
localStorage.currentDirection = ''
}, 3000)	

return	
}

function loopObj(obj1, obj2, roDeg, ballPos, ran50, xSize, edge) {
	//console.log('roDeg: ', roDeg)
	setDirection(roDeg)
 for (let i = 0; i <= xSize; i++) {   
	 if (i === 0) {
        obj1.style.left = (ballPos.x - ran50) + 'px';
	 }
      setTimeout(() => {
        let obj1X , obj2X, width1, limit
	width1 = i < 50 ? i * 2  + 1 : 100 
	  //console.log('roDeg: ', typeof roDeg)
	if (roDeg === -1) {      //  ->  //
	 //console.log('right')
	limit = width1 + 2 * (i * i)/10  
        obj1X =  ballPos.x - 2 * (i * i)/10 - (ran50 - i) 
        , obj2X =  ballPos.x - 2 * (i * i)/10 - 2- (ran50 - i) 
			//Math.abs(obj1X) - Math.abs(obj2X)	
//	      console.log('obj1x: ', obj1X)
        obj1.style.left = obj1X + 'px';
        obj2.style.left = obj2X + 'px';
//		console.log('width: ', width1)
        limitFinish(limit, edge, obj1, obj2, ballPos.x)
	} else {  // <- //
	limit = width1 + 2 * (i * i)/10 
        obj1X =  ballPos.x + 2 * (i * i)/10 + (ran50 - i) + width1
        , obj2X =  ballPos.x + 2 * (i * i)/10 + 1 + (ran50 - i) 
//	      console.log('obj1x: ', obj1X)
        obj1.style.left = obj1X + 'px';
        obj2.style.left = obj2X + 'px';
        //if(limit > edge) return
        limitFinish(limit, edge, obj1, obj2, ballPos.x)
	}
        obj2.style.width = width1 + 'px';
        //obj1.style.width = width1 + 'px';
        //obj2.style.width = 2 + 'px';  	
//console.log('obj1x left: ', obj1.style.left)
//console.log('obj2x left: ', obj2.style.left)
      }, (xSize + i * 10)) 
      setTimeout(() => {
	if(i === xSize) {
	 obj1.remove()
	 obj2.remove()
        localStorage.xMousePos = ballPos.x;	

	 // console.log('e.clientx when i === xSize: ', e.clientX)
		}
      }, (xSize * 2  * 10)) 
	 document.body.appendChild(obj1);
  document.body.appendChild(obj2);
	      //console.log('obj2X: ', obj2X)
	      //console.log('edge: ', edge)
    }
}

function mouseEvent(e) {
//	console.log('EVENT')
	localStorage.xMousePos2 = e.clientX;	
  let xSize = 50
		//Math.trunc(Math.random() * 50) + 35;
  //let squareWid = Math.random() * 0.4 + 0.1;
  let pOrM = Math.random() >= 0.5 ? 1 : -1;
   let num = parseInt(localStorage.mouseCounter);
  localStorage.mouseCounter = num + 1;
  if (num % 5 === 0 ) {
  let ballPos = {x: e.clientX , y: e.clientY} 
	, diff =  e.clientX - localStorage.xMousePos
	 , differenceAbs = Math.abs(diff) 
      , roDeg = e.clientX - localStorage.xMousePos > 0 ? -1 : 1	  
	, plusOrMinus = Math.random() >= 0.5 ? 1 : -1
	, ran50 = Math.trunc(Math.random() * 250) * plusOrMinus 
	, limit = 200 	
     //, edge = roDeg === 1 ? ballPos.x + limit : ballPos.x - limit 
   , ranYpos = Math.trunc(Math.random() * 30) * pOrM + parseInt(e.clientY, 10) 
//	  console.log('ranYpos: ', ranYpos)
//	  console.log('diff: ', diff)
    let ranH = Math.trunc(Math.random() * 360);
	  const obj1 = buildObj(e, ranYpos, ranH) 
, obj2 = buildObj1(e, ranYpos, ranH)

localStorage.leftOrRight = roDeg

//loopObj(obj1, obj2, roDeg, ballPos, ran50, e, xSize, diff, limit) 
if ( localStorage.currentDirection && localStorage.currentDirection !== '' && parseInt(localStorage.currentDirection) !== roDeg) return; 
if (differenceAbs < 100) {
//console.log('objs: ', obj1, obj2)
//dimmingStar(obj1, ballPos, e, ran50, plusOrMinus)
dimmingStar(obj1, obj2, ballPos, e, ran50, plusOrMinus, xSize, limit) 
} else {
//console.log('event count:')
//console.log('objs: ', obj1, obj2)
loopObj(obj1, obj2, roDeg, ballPos, ran50, xSize, limit) 
}
	    } 
}

document.body.addEventListener('mousemove', mouseEvent);

chrome.runtime.onMessage.addListener((msg) => {
document.body.removeEventListener('mousemove', mouseEvent)
});
