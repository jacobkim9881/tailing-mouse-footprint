//bunny.js
localStorage.mouseObjArr = ['face', 'eye1', 'eye2',
  'ear1', 'ear2', 'ear3', 'ear4',
  'mouth', 'mouth1', 'mouth2', 'mouth3', 'mouth4', 'mouth5', 'mouth6', 'mouth7',
  'line1', 'line2', 'line3', 'line4', 'line5', 'line6', 'line7',
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
    width: 140,
    height: 100,
    borderRadius: 30 + 'px',
    zIndex: 1,
    backgroundColor: {h: 281, s: 29, l: 50},
    transform: 'none'	

  }
  objProto(config);

}

function stylingEye({id, left}) {
  const config = {
    element: getId(id),
    position: 'fixed',
    left: left,
    top: 125,
    width: 20,
    height: 20,
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
    top: 60,
    width: 50,
    height: 100,
    borderRadius: '100% 100% 50% 50%',
    zIndex: 0,
    backgroundColor: {h: 281, s: 29, l: 50},
    transform: `rotate(${skewness}deg)`
  }
  objProto(config);
  
  getId(id).animate([
    {borderRadius: '100% 100% 30% 50%' },
    {borderRadius: '100% 0% 0% 10%' },
    {borderRadius: '100% 100% 30% 50%' }], {duration:1000, iterations: Infinity})

}

function stylingEarHole({id, left, skewness}) {
  const config = {
    element: getId(id),
    position: 'fixed',
    left: left,
    top: 75,
    width: 30,
    height: 20,
    borderRadius: '100% 100% 50% 50%',
    zIndex: 1,
    backgroundColor: {h: 312, s: 77, l: 77},
    transform: `skew(${skewness}deg)`
  }
  objProto(config);
 
}

function stylingMouth({id, left, right, leftM}) {
  const config = {
    element: getId(id),
    position: 'fixed',
    left: left,
    top: 160,
    width: 25,
    height: 20,
    borderRadius: '40%',
    zIndex: 2,
    backgroundColor: {h: 281, s: 29, l: 50},
    transform: `rotate(${0}deg)`
  }
  objProto(config);

  getId(id).style.borderRight = `${right}px solid black`;
  getId(id).style.borderBottom = `5px solid black`;
  getId(id).style.borderLeft = `${leftM}px solid black`;

}

function stylingMouth1({id, left}) {
  const config = {
    element: getId(id),
    position: 'fixed',
    left: left,
    top: 150,
    width: 60,
    height: 45,
    borderRadius: '30%',
    zIndex: 1,
    backgroundColor: {h: 0, s: 100, l: 100},
    transform: ``
  }
  objProto(config);

}

function stylingMouth2({id, left, rotate}) {
  const config = {
    element: getId(id),
    position: 'fixed',
    left: left,
    top: 148,
    width: 17,
    height: 17,
    borderRadius: '100% 30% 30% 100%',
    zIndex: 2,
    backgroundColor: {h: 0, s: 100, l: 0},
    transform: `rotate(${rotate}deg)`
  }
  objProto(config);
  getId(id).style.borderTop = `2px solid black`;
  getId(id).style.borderLeft = `2px solid black`;

}

function stylingMouth3({id, left}) {
  const config = {
    element: getId(id),
    position: 'fixed',
    left: left,
    top: 170,
    width: 30,
    height: 20,
    borderRadius: '50%',
    zIndex: 1,
    backgroundColor: {h: 0, s: 100, l: 50},
    transform: ``
  }
  objProto(config);
}

function stylingLine({id, top, left, width, height}) {
  const config = {
    element: getId(id),
    position: 'fixed',
    left: left,
    top: top,
    width: width,
    height: height,
    borderRadius: '30%',
    zIndex: 1,
    backgroundColor: {h: 0, s: 100, l: 0},
    transform: `rotate(${0}deg)`
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

function stylingBlush({id, left}) {
  const config = {
    element: getId(id),
    position: 'fixed',
    left: left,
    top: 150,
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

function smileEyes() {
  getId('eye1').style.borderRadius = '50%';
  getId('eye1').style.backgroundColor = 'hsl(0, 0%, 0%, 0)';
  getId('eye1').style.border = '5px solid black';	
  getId('eye1').style.borderBottom = 'none';
  getId('eye1').style.borderLeft = 'none';	
  getId('eye1').style.borderRight = 'none';
  getId('eye1').style.left = 130 + 'px';	
  getId('eye1').style.top = 135 + 'px';	
  getId('eye2').style.borderRadius = '50%';
  getId('eye2').style.backgroundColor = 'hsl(0, 0%, 0%, 0)';
  getId('eye2').style.border = '5px solid black';
  getId('eye2').style.borderBottom = 'none';
  getId('eye2').style.borderRight = 'none';	
  getId('eye2').style.borderLeft = 'none';
  getId('eye2').style.left = 190 + 'px';	
  getId('eye2').style.top = 135 + 'px';	
  
}

function excitingEyes() {
  getId('eye1').style.borderRadius = '0%';
  getId('eye1').style.backgroundColor = 'hsl(0, 0%, 0%, 0)';
  getId('eye1').style.border = '3px solid black';	
  getId('eye1').style.borderBottom = 'none';
  getId('eye1').style.borderLeft = 'none';	
  getId('eye1').style.transform = 'rotate(45deg)';
  getId('eye1').style.left = 130 + 'px';
  getId('eye2').style.borderRadius = '0%';
  getId('eye2').style.backgroundColor = 'hsl(0, 0%, 0%, 0)';
  getId('eye2').style.border = '3px solid black';	
  getId('eye2').style.borderTop = 'none';
  getId('eye2').style.borderRight = 'none';	
  getId('eye2').style.transform = 'rotate(45deg)';
  getId('eye2').style.left = 190 + 'px';

}

function meowEmoj() {
  addMusicNote({id: 'emotion6' , left: 240, top: 100});
  getId('emotion6').style.display = 'block';
  getId('emotion6').innerText = 'Meow';

}

function mouseDisplay(display= 'block') {
  getId('mouth').style.display = display;
  getId('mouth1').style.display = display;
  
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
  meowEmoj();
}

function dblclickEvent(e) {
  let none = null;	
  heartEmoj(none);

  excitingEyes();

  getId('mouth4').innerText = '3';
  getId('mouth4').style.fontSize = '40px';

  mouseDisplay('none')
  getId('mouth4').style.backgroundColor = '';
  getId('mouth4').style.top = '150px'

  getId('emotion7').style.display = 'none';
  getId('emotion8').style.display = 'none';

  stylingHeart({id: 'emotion4', left: 242, top: 70, size: 40, skewness: 25});	
  stylingHeart({id: 'emotion5', left: 255, top: 70, size: 40, skewness: -25});	
  
  getId('emotion4').style.display = 'block';
  getId('emotion5').style.display = 'block';

}

function mousedownEvent(e) {
  
  smileEyes();

  getId('eye1').style.transform = 'rotate(0deg)';
  getId('eye2').style.transform = 'rotate(0deg)';

  stylingMouth3({id: 'mouth4', left: 155});
  getId('mouth4').innerText = '';
  mouseDisplay()  
}

function mouseupEvent(e) {
  smileEyes();

  meowEmoj();
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
    getId('emotion6').style.display = 'none';
    getId('emotion7').style.display = 'none';
    getId('emotion8').style.display = 'none';

    stylingFace();
    stylingEar({id: 'ear1', left: 105, skewness: 0});
    stylingEar({id: 'ear2', left: 178, skewness: 0});
    stylingEarHole({id: 'ear3', left: 115, skewness: 0});
    stylingEarHole({id: 'ear4', left: 190, skewness: 0});
    stylingEye({id: 'eye1', left: 130});
    stylingEye({id: 'eye2', left: 190});
    stylingMouth({id: 'mouth', left: 145, right: 5, leftM: 0});
    stylingMouth({id: 'mouth1', left: 167, right: 0, leftM: 5});
    //stylingMouth1({id: 'mouth2', left: 140});
    stylingMouth2({id: 'mouth3', left: 160, rotate: 0});
    
    /*
    stylingTie({id: 'tie', left: 129, rotate: 45});
    stylingTie({id: 'tie1', left: 159, rotate: 45});
    stylingTie1({id: 'tie2', left: 148});
    */
    stylingLine({id:'line1', top: 100, left: 160, width:20, height: 25});
    stylingLine({id:'line2', top: 100, left: 135, width:20, height: 15});
    stylingLine({id:'line3', top: 100, left: 185, width:20, height: 15});
    stylingLine({id:'line4', top: 160, left: 100, width:30, height: 15});
    stylingLine({id:'line5', top: 180, left: 107, width:20, height: 15});
    stylingLine({id:'line6', top: 160, left: 210, width:30, height: 15});
    stylingLine({id:'line7', top: 180, left: 210, width:20, height: 15});

    //stylingBlush({id: 'blush', left: 120});
    //stylingBlush({id: 'blush1', left: 200});

    getId('eye1').style.left = (Math.sin(num/10) * 6 + 130) + 'px';
    getId('eye2').style.left = (Math.sin(num/10) * 6 + 190) + 'px';
    getId('mouth4').style.backgroundColor = 'hsl(0, 0%, 0%, 0)';
    mouseDisplay();
    getId('mouth4').innerText = ''
    
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
