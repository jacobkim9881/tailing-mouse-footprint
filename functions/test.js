//test.js 
function trigger(e) {
	// object for styling
  let obj = document.createElement('div');
    obj.style.position = 'fixed';
    obj.style.backgroundColor = 'white'
    obj.style.height = '1px'	
  return obj;
  }

function buildObj(e, pOrM) {
   //if (Math.random() > 0.5) return;
   const obj1 = trigger(e)
   , ranYpos = Math.trunc(Math.random() * 80) * pOrM + parseInt(e.clientY, 10) 
    obj1.className = 'tmf-star'
    obj1.style.top = ranYpos + 'px'

return obj1
}

function buildObj1(e, pOrM) {
   //if (Math.random() > 0.5) return;
   const obj1 = trigger(e)
   , ranYpos = Math.trunc(Math.random() * 80) * pOrM + parseInt(e.clientY, 10) 
    obj1.className = 'tmf-tail'
    obj1.style.top = ranYpos + 'px'

return obj1
}
function dimmingStar(obj1, ballPos) {
        let obj1X 
	, ran50 = Math.trunc(Math.random() * 50) 
	, rightAndLeft = Math.random() > 0.5 ? 1 : -1     
        obj1X =  ballPos.x + ran50 
//		- 4 * rightAndLeft + 2 + ran50 
			      console.log('obj1x: ', obj1X)
	obj1.animate([
		{
			left: obj1X + 'px'
		},
{
			left: (obj1X + rightAndLeft * 4) + 'px'
		},
	], 10000)
       // obj1.style.left = obj1X + 'px';
	      obj1.style.width = 1 + 'px';

	 document.body.appendChild(obj1);
     setTimeout(() =>  {
	 obj1.remove()
        localStorage.xMousePos = e.clientX;	
  } ,(1000));
}
function loopObj(obj1, obj2, roDeg, ballPos, ran50, edge, e, xSize, diff) {
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
	if(i === xSize) {
	 obj1.remove()
	 obj2.remove()
        localStorage.xMousePos = e.clientX;	

	  console.log('e.clientx when i === xSize: ', e.clientX)
		}
	 document.body.appendChild(obj1);
  document.body.appendChild(obj2);
	      //console.log('obj2X: ', obj2X)
	      //console.log('edge: ', edge)
    }
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
if (diff < 100) {
const obj1 = buildObj(e, pOrM) 
, obj2 = buildObj1(e, pOrM)

dimmingStar(obj1, ballPos)

}

	    } 
}

document.body.addEventListener('mousemove', mouseEvent);

chrome.runtime.onMessage.addListener((msg) => {
document.body.removeEventListener('mousemove', mouseEvent)
});
