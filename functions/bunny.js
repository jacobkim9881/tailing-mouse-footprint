//bunny.js
localStorage.mouseObjArr = ['face', 'eye1', 'eye2',
           'ear1', 'ear2', 'ear3', 'ear4',
           'mouth', 'mouth1', 'mouth2', 'mouth3', 'mouth4', 'mouth5', 'mouth6', 'mouth7',
           'tie', 'tie1', 'tie2',
	   'blush', 'blush1', 
	   'emotion', 'emotion1', 'emotion2',
           'emotion3', 'emotion4', 'emotion5', 
	   'emotion6', 'emotion7', 'emotion8'];

function createObjs() {
let grpDivs = document.createElement('div');
grpDivs.id = 'grpDivs'
let ids = localStorage.mouseObjArr.match(/[^,]\w+/gi);
for (let oneId in ids) {
 let arr =  document.createElement('div')
 arr.id = ids[oneId];
 grpDivs.appendChild(arr);
}
document.body.appendChild(grpDivs);
}

function deleteObjs() {
  let ids = localStorage.mouseObjArr.match(/[^,]\w+/gi);
  for (let oneId in ids) {
  let ele = document.getElementById(ids[oneId]);
  }

}

function objProto({element, position, left, top, width, height, borderRadius, zIndex, backgroundColor:{h,s,l}, transform}) {
element.style.position = position;
element.style.left = left + 'px';
element.style.top = top + 'px';
element.style.width = width +  'px';
element.style.height = height + 'px';
element.style.borderRadius = borderRadius;
element.style.zIndex = zIndex;
element.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
element.style.transform = transform;

}

function getId(id) {
  return document.getElementById(id);
}

function stylingFace() {
const config = {
	element: getId('face'),
	position: 'fixed',
	left: 100,
	top: 100,
	width: 100,
	height: 100,
	borderRadius: 30 + 'px',
	zIndex: 1,
	backgroundColor: {h: 0, s: 100, l: 85},
	transform: 'none'	

}
  objProto(config);

}

function stylingEye({id, left}) {
const config = {
	element: getId(id),
	position: 'fixed',
	left: left,
	top: 140,
	width: 15,
	height: 15,
	borderRadius: 50 + 'px',
	zIndex: 1,
	backgroundColor: {h: 0, s: 100, l: 0},
	transform: 'none'	
}
objProto(config);
getId(id).style.border = '2px solid black';

}

function stylingEar({id, left, skewness}) {
const config = {
	element: getId(id),
	position: 'fixed',
	left: left,
	top: 5,
	width: 50,
	height: 100,
	borderRadius: '',
	zIndex: 0,
	backgroundColor: {h: 0, s: 100, l: 85},
	transform: `skew(${skewness}deg)`
}
  objProto(config);
  getId(id).animate([
  {borderRadius: '100% 80% 50% 30%' },
  {borderRadius: '100% 0% 0% 10%' },
  {borderRadius: '100% 80% 50% 30%' }], {duration:1000, iterations: Infinity})

}

function stylingEarHole({id, left, skewness}) {
const config = {
	element: getId(id),
	position: 'fixed',
	left: left,
	top: 35,
	width: 20,
	height: 60,
	borderRadius: '100% 30% 50% 30%',
	zIndex: 1,
	backgroundColor: {h: 305, s: 100, l: 84},
	transform: `skew(${skewness}deg)`
}
objProto(config);
}

function stylingMouth({id, left, rotate}) {
const config = {
	element: getId(id),
	position: 'fixed',
	left: left,
	top: 180,
	width: 10,
	height: 10,
	borderRadius: '',
	zIndex: 2,
	backgroundColor: '',
	transform: `rotate(${rotate}deg)`
}
objProto(config);

getId(id).style.borderTop = `2px solid black`;
getId(id).style.borderLeft = `2px solid black`;

}

function stylingMouth1({id, left}) {
const config = {
	element: getId(id),
	position: 'fixed',
	left: left,
	top: 170,
	width: 10,
	height: 10,
	borderRadius: '',
	zIndex: 1,
	backgroundColor: '',
	transform: ``
}
objProto(config);
getId(id).style.borderLeft = `2px solid black`;

}

function stylingMouth2({id, left, rotate}) {
const config = {
	element: getId(id),
	position: 'fixed',
	left: left,
	top: 160,
	width: 13,
	height: 13,
	borderRadius: '100% 30% 30% 100%',
	zIndex: 1,
	backgroundColor: {h: 0, s: 100, l: 0},
	transform: `rotate(${rotate}deg)`
}
objProto(config);
getId(id).style.borderTop = `2px solid black`;
getId(id).style.borderLeft = `2px solid black`;

}

function stylingMouth3({id, left, rotate}) {
const config = {
	element: getId(id),
	position: 'fixed',
	left: left,
	top: 155,
	width: 20,
	height: 10,
	borderRadius: '',
	zIndex: 1,
	backgroundColor: {h: 0, s: 100, l: 85},
	transform: `rotate(${rotate}deg)`
}
objProto(config);
}

function stylingSmile({id, left, top, width, height, skewness}) {
const config = {
	element: getId(id),
	position: 'fixed',
	left: left,
	top: top,
	width: width,
	height: height,
	borderRadius: '50%',
	zIndex: 1,
	backgroundColor: {h: 0, s: 100, l: 50},
	transform: `skewY(${skewness}deg)`
}
objProto(config);

}

function stylingTie({id, left, rotate}) {
const config = {
	element: getId(id),
	position: 'fixed',
	left: left,
	top: 207,
	width: 20,
	height: 20,
	borderRadius: '30%',
	zIndex: 1,
	backgroundColor: {h: 0, s: 100, l: 0},
	transform: `rotate(${rotate}deg)`
}
objProto(config);
getId(id).style.borderTop = `2px solid black`;
getId(id).style.borderLeft = `2px solid black`;

}

function stylingTie1({id, left, rotate}) {
const config = {
	element: getId(id),
	position: 'fixed',
	left: left,
	top: 210,
	width: 13,
	height: 13,
	borderRadius: '100%',
	zIndex: 1,
	backgroundColor: {h: 0, s: 100, l: 0},
}
objProto(config);

}

function stylingBlush({id, left}) {
const config = {
	element: getId(id),
	position: 'fixed',
	left: left,
	top: 160,
	width: 20,
	height: 10,
	borderRadius: '50%',
	zIndex: 1,
	backgroundColor: {h: 305, s: 100, l: 70},
}
objProto(config);

}

function stylingHeart({id, left, top, size, skewness}) {
const config = {
	element: getId(id),
	position: 'fixed',
	left: left,
	top: top,
	width: size,
	height: size,
	borderRadius: '50%',
	zIndex: 1,
	backgroundColor: {h: 0, s: 100, l: 50},
	transform: `skewY(${skewness}deg)`
}
objProto(config);

}

function addMusicNote({id, left, top}) {
const config = {
	element: getId(id),
	position: 'fixed',
	left: left,
	top: top,
	width: '',
	height: '',
	borderRadius: '',
	zIndex: 1,
	backgroundColor: {h: '', s: '', l: ''},
	transform: ''

}
objProto(config);

getId(id).innerText = '♪';
getId(id).style.fontWeight = 'bold';
getId(id).style.fontSize = (window.screen.width/30) + 'px'

}

function musicNoteAni() {
addMusicNote({id: 'emotion6' , left: 222, top: 100});
getId('emotion6').style.display = 'block';
setTimeout(() => {getId('emotion6').style.top = 20 + 'px';
	getId('emotion6').style.left = 50 + 'px';
        getId('emotion6').innerText = '♩'}, 200);

}

function sleepyEyes() {
getId('eye1').style.borderRadius = '0%';
getId('eye1').style.backgroundColor = 'hsl(0, 0%, 0%, 0)';
getId('eye1').style.border = '3px solid black';	
getId('eye1').style.borderTop = 'none';
getId('eye1').style.borderLeft = 'none';	
getId('eye1').style.borderRight = 'none';
getId('eye1').style.left = 114 + 'px';	
getId('eye2').style.borderRadius = '0%';
getId('eye2').style.backgroundColor = 'hsl(0, 0%, 0%, 0)';
getId('eye2').style.border = '3px solid black';
getId('eye2').style.borderTop = 'none';
getId('eye2').style.borderRight = 'none';	
getId('eye2').style.borderLeft = 'none';
getId('eye2').style.left = 172 + 'px';	

}

function excitingEyes() {
getId('eye1').style.borderRadius = '0%';
getId('eye1').style.backgroundColor = 'hsl(0, 0%, 0%, 0)';
getId('eye1').style.border = '3px solid black';	
getId('eye1').style.borderBottom = 'none';
getId('eye1').style.borderLeft = 'none';	
getId('eye1').style.transform = 'rotate(45deg)';
getId('eye1').style.left = 120 + 'px';
getId('eye2').style.borderRadius = '0%';
getId('eye2').style.backgroundColor = 'hsl(0, 0%, 0%, 0)';
getId('eye2').style.border = '3px solid black';	
getId('eye2').style.borderTop = 'none';
getId('eye2').style.borderRight = 'none';	
getId('eye2').style.transform = 'rotate(45deg)';
getId('eye2').style.left = 175 + 'px';

}

function sighEmoj() {
stylingHeart({id: 'emotion7', left: 130, top: 190, size: 13, skewness: 0});
stylingHeart({id: 'emotion8', left: 120, top: 193, size: 20, skewness: 0});	

getId('emotion7').style.backgroundColor = 'hsl(60, 25%, 75%)';
getId('emotion7').style.borderRadius = '0%';
getId('emotion7').style.zIndex = 1;
getId('emotion7').style.display = 'block';
getId('emotion7').style.transform = 'rotate(45deg)';

getId('emotion8').style.backgroundColor = 'hsl(60, 25%, 75%)';
getId('emotion8').style.borderRadius = '100%';
getId('emotion8').style.zIndex = 1;
getId('emotion8').style.display = 'block';

getId('emotion6').style.display = 'none';

}

function questionEmoj() {
addMusicNote({id: 'emotion6' , left: 222, top: 100});
getId('emotion6').style.display = 'block';
getId('emotion6').innerText = '?';

}

function heartEmoj(num) {
 switch(num) {
  case 1:
  getId('emotion').style.display = 'block';
getId('emotion1').style.display = 'block';
getId('emotion2').style.display = 'none';
getId('emotion3').style.display = 'none';
getId('emotion4').style.display = 'none';
getId('emotion5').style.display = 'none';
  break;
  case 2:
getId('emotion').style.display = 'block';
getId('emotion1').style.display = 'block';
getId('emotion2').style.display = 'block';
getId('emotion3').style.display = 'block';
getId('emotion4').style.display = 'none';
getId('emotion5').style.display = 'none';
break;
  case 3:
getId('emotion').style.display = 'block';
getId('emotion1').style.display = 'block';
getId('emotion2').style.display = 'block';
getId('emotion3').style.display = 'block';
getId('emotion4').style.display = 'block';
getId('emotion5').style.display = 'block';
break;
  default:
getId('emotion').style.display = 'none';
getId('emotion1').style.display = 'none';
getId('emotion2').style.display = 'none';
getId('emotion3').style.display = 'none';
getId('emotion4').style.display = 'none';
getId('emotion5').style.display = 'none';
break;

 }
}

function dragEndEvent(e) {
getId('mouth').style.backgroundColor = 'hsl(0, 100%, 50%)';

}

function dragEvent(e) {
stylingEye({id: 'eye1', left: 114});
stylingEye({id: 'eye2', left: 170});
getId('mouth').style.backgroundColor = 'hsl(0, 0%, 0%, 0)';
questionEmoj();
}

function dblclickEvent(e) {
let none = null;	
heartEmoj(none);

excitingEyes();

getId('mouth').style.backgroundColor = 'hsl(0, 0%, 0%, 0)';

getId('emotion7').style.display = 'none';
getId('emotion8').style.display = 'none';

musicNoteAni();

}

function mousedownEvent(e) {
questionEmoj();

sleepyEyes();

getId('eye1').style.transform = 'rotate(0deg)';
getId('eye2').style.transform = 'rotate(0deg)';

}

function mouseupEvent(e) {
sleepyEyes();

getId('mouth').style.backgroundColor = 'hsl(0, 100%, 50%)';

sighEmoj();
}

function onScrollEvent(e) {
let typeOfEmoj = Math.ceil((window.scrollY% 300)/100);

getId('emotion6').style.display = 'none';

stylingHeart({id: 'emotion', left: 222, top: 150, size: 13, skewness: 25});
stylingHeart({id: 'emotion1', left: 227, top: 150, size: 13, skewness: -25});	
stylingHeart({id: 'emotion2', left: 232, top: 120, size: 20, skewness: 25});	
stylingHeart({id: 'emotion3', left: 239, top: 120, size: 20, skewness: -25});	
stylingHeart({id: 'emotion4', left: 242, top: 85, size: 26, skewness: 25});	
stylingHeart({id: 'emotion5', left: 251, top: 85, size: 26, skewness: -25});	

heartEmoj(typeOfEmoj);
}

function mouseEvent(e) {

  function trigger(e, moveX) {
let none = null;

heartEmoj(none);
getId('emotion7').style.display = 'none';
getId('emotion8').style.display = 'none';

stylingFace();
stylingEar({id: 'ear1', left: 80, skewness: 20});
stylingEar({id: 'ear2', left: 160, skewness: -20});
stylingEarHole({id: 'ear3', left: 171, skewness: -20});
stylingEarHole({id: 'ear4', left: 100, skewness: 20});
stylingEye({id: 'eye1', left: 114});
stylingEye({id: 'eye2', left: 170});
stylingMouth({id: 'mouth', left: 148, rotate: 45});
stylingMouth1({id: 'mouth1', left: 152});
stylingMouth2({id: 'mouth2', left: 147, rotate: 270});
stylingMouth3({id: 'mouth3', left: 145, rotate: 0});
stylingTie({id: 'tie', left: 129, rotate: 45});
stylingTie({id: 'tie1', left: 159, rotate: 45});
stylingTie1({id: 'tie2', left: 148});
stylingBlush({id: 'blush', left: 113});
stylingBlush({id: 'blush1', left: 171});

getId('eye1').style.left = (Math.sin(num/10) * 6 + 114) + 'px';
getId('eye2').style.left = (Math.sin(num/10) * 6 + 172) + 'px';
getId('mouth').style.backgroundColor = 'hsl(0, 0%, 0%, 0)';

  return;
  }
  let num = parseInt(localStorage.mouseCounter);
  localStorage.mouseCounter = num + 1;
   trigger(e, 0);  
  getId('grpDivs').style.transform = 'scale(0.3, 0.3)'
  getId('grpDivs').style.position = 'fixed';
  getId('grpDivs').style.top = e.clientY + 'px';
  getId('grpDivs').style.left = e.clientX + 'px';
}

//createObj
createObjs();

document.body.addEventListener('mousemove', mouseEvent);
document.body.addEventListener('mousedown', mousedownEvent);
document.body.addEventListener('mouseup', mouseupEvent);
document.body.addEventListener('dblclick', dblclickEvent);
document.body.addEventListener('drag', dragEvent);
document.body.addEventListener('dragend', dragEndEvent);

window.addEventListener('scroll', onScrollEvent);
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.name === 'bunny') {
    document.getElementById('grpDivs').style.display = 'block'; 
  } else {
    document.getElementById('grpDivs').style.display = 'none';
    document.body.removeEventListener('mousemove', mouseEvent);
    document.body.removeEventListener('mousedown', mousedownEvent);
    document.body.removeEventListener('mouseup', mouseupEvent);
    document.body.removeEventListener('scroll', onScrollEvent);
    document.body.removeEventListener('dblclick', dblclickEvent);
    document.body.removeEventListener('drag', dragEvent);
    document.body.removeEventListener('dragend', dragEvent);

  }
});
