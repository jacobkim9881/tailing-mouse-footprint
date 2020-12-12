//bunny.js
localStorage.mouseObjArr = ['obj', 'eye1', 'eye2',
           'ear1', 'ear2', 'ear3', 'ear4',
           'mouth', 'mouth1', 'mouth2', 'mouth3',
           'tie', 'tie1', 'tie2', 'tie3', 'tie4', 
	   'emotion', 'emotion1', 'emotion2',
           'emotion3', 'emotion4', 'emotion5', 'emotion6'];

function createObjs() {
let sox = document.createElement('div');
sox.id = 'sox'
let ids = localStorage.mouseObjArr.match(/[^,]\w+/gi);
for (let oneId in ids) {
 let arr =  document.createElement('div')
 arr.id = ids[oneId];
 sox.appendChild(arr);
}
document.body.appendChild(sox);
}

function deleteObjs() {
  let ids = localStorage.mouseObjArr.match(/[^,]\w+/gi);
  for (let oneId in ids) {
  let ele = document.getElementById(ids[oneId]);
  }

}

function stylingEye(ele, pos) {
ele.style.position = 'fixed';
ele.style.left = (x + pos) + 'px';
ele.style.top = (y + 140) + 'px';
ele.style.width = '10px';
ele.style.height = '10px';
ele.style.borderRadius = '50%';
ele.style.backgroundColor = `hsl(0, 100%, 0%)`;
ele.style.border = `2px solid black`;
ele.style.zIndex = '1';
/*
ele.animate([
  {left: (x + pos) + 'px'},
  {left: (x + pos + 5) + 'px'},
  {left: (x + pos) + 'px'}
], {duration: 1000, iterations: Infinity})
*/
}

function stylingEar(ele, pos, howMuch) {
ele.style.position = 'fixed';
ele.style.left = (x + pos) + 'px';
ele.style.top = (y + 20) + 'px';
ele.style.width = '35px';
ele.style.height = '100px';
ele.style.borderRadius = '100% 30% 50% 30%';
ele.style.backgroundColor = `hsl(0, 100%, 85%)`;
//ele.style.border = `2px solid black`;
ele.style.zIndex = '0';
ele.style.transform = `skew(${howMuch}deg)`

if (howMuch) {
ele.animate([
  {borderRadius: '100% 30% 50% 30%' },
  {borderRadius: '100% 0% 0% 10%' },
  {borderRadius: '100% 30% 50% 30%' }], {duration:1000, iterations: Infinity})
}
}


function stylingEar2(ele, pos, howMuch) {
ele.style.position = 'fixed';
ele.style.left = (x + pos) + 'px';
ele.style.top = (y + 55) + 'px';
ele.style.borderRadius = '100% 30% 50% 30%';
ele.style.width = '20px';
ele.style.height = '40px';

ele.style.backgroundColor = 'hsl(305, 100%, 84%)'
ele.style.zIndex = '1';
ele.style.transform = `skew(${howMuch}deg)`
}

function stylingMouth(ele, pos, howMuch) {
ele.style.position = 'fixed';
ele.style.left = (x + pos) + 'px';
ele.style.top = (y + 180) + 'px';
ele.style.width = '10px';
ele.style.height = '10px';
ele.style.backgroundColor = 'hsl(0, 100%, 50%, 0)',
ele.style.borderTop = `2px solid black`;
ele.style.borderLeft = `2px solid black`;
ele.style.zIndex = '1';
ele.style.transform = `rotate(${howMuch}deg)`
}

function stylingMouth1(ele, pos, howMuch) {
ele.style.position = 'fixed';
ele.style.left = (x + pos) + 'px';
ele.style.top = (y + 170) + 'px';
ele.style.width = '10px';
ele.style.height = '10px';
ele.style.borderLeft = `2px solid black`;
ele.style.zIndex = '1';
ele.style.transform = `rotate(${howMuch}deg)`
}

function stylingMouth2(ele, pos, howMuch) {
ele.style.position = 'fixed';
ele.style.left = (x + pos) + 'px';
ele.style.top = (y + 160) + 'px';
ele.style.width = '10px';
ele.style.height = '10px';
ele.style.borderRadius = '100% 30% 30% 100%';
ele.style.borderTop = `2px solid black`;
ele.style.borderLeft = `2px solid black`;

ele.style.backgroundColor = 'hsl(0, 100%, 0%)'
ele.style.zIndex = '1';
ele.style.transform = `rotate(${howMuch}deg)`
}

function stylingMouth3(ele, pos, howMuch) {
ele.style.position = 'fixed';
ele.style.left = (x + pos) + 'px';
ele.style.top = (y + 155) + 'px';
ele.style.width = '15px';
ele.style.height = '10px';

ele.style.backgroundColor = 'hsl(0, 100%, 85%)'
ele.style.zIndex = '1';
ele.style.transform = `rotate(${howMuch}deg)`
}

function stylingtie(ele, pos, howMuch) {
ele.style.position = 'fixed';
ele.style.left = (x + pos) + 'px';
ele.style.top = (y + 207) + 'px';
ele.style.width = '20px';
ele.style.height = '20px';
ele.style.borderTop = `2px solid black`;
ele.style.borderLeft = `2px solid black`;
ele.style.borderRadius = `30%`

ele.style.backgroundColor = 'hsl(0, 100%, 0%)'
ele.style.zIndex = '1';
ele.style.transform = `rotate(${howMuch}deg)`
}
function stylingblush(ele, pos, howMuch) {
ele.style.position = 'fixed';
ele.style.left = (x + pos) + 'px';
ele.style.top = (y + 160) + 'px';
ele.style.borderRadius = '50%'
ele.style.width = '20px';
ele.style.height = '10px';

ele.style.backgroundColor = 'hsl(305, 100%, 70%)'
ele.style.zIndex = '1';
ele.style.transform = `rotate(${howMuch}deg)`
}

function stylingtie3(ele, pos, howMuch) {
ele.style.position = 'fixed';
ele.style.left = (x + pos) + 'px';
ele.style.top = (y + 210) + 'px';
ele.style.width = '13px';
ele.style.height = '13px';
ele.style.borderRadius = `100%`

ele.style.backgroundColor = 'hsl(0, 100%, 0%)'
ele.style.zIndex = '1';
ele.style.transform = `rotate(${howMuch}deg)`
}

function addHearts(ele, pos, howMuch, ypos, size) {
ele.style.position = 'fixed';
ele.style.left = (pos) + 'px';
ele.style.top = (ypos) + 'px';
ele.style.width = (size) + 'px';
ele.style.height = (size) + 'px';
ele.style.borderRadius = `100%`
ele.style.backgroundColor = `hsl(0, 100%, 50%)`;
ele.style.borderRadius = '50%';
ele.style.transform = `skewY(${howMuch}deg)`; 
}

function addMusicNote(ele, pos, ypos) {
ele.style.position = 'fixed';
ele.style.left = (pos) + 'px';
ele.style.top = (ypos) + 'px';

//let letter = document.createElement('p');
ele.innerText = '♪';
ele.style.fontWeight = 'bold';
ele.style.fontSize = (window.screen.width/30) + 'px'
//ele.appendChild(letter);	
}

function appendObj(objec, func, pos, mo, deg) {
objec = document.createElement('div');
func(objec, pos, deg);
mo.appendChild(objec);
}

function dblclickEvent(e) {
let emotion = document.getElementById('emotion');
let emotion1 = document.getElementById('emotion1');
let emotion2 = document.getElementById('emotion2');
let emotion3 = document.getElementById('emotion3');
let emotion4 = document.getElementById('emotion4');
let emotion5 = document.getElementById('emotion5');
let emotion6 = document.getElementById('emotion6');
emotion.style.display = 'none';
emotion1.style.display = 'none';
emotion2.style.display = 'none';
emotion3.style.display = 'none';
emotion4.style.display = 'none';
emotion5.style.display = 'none';

addMusicNote(emotion6, 222, 100);
emotion6.style.display = 'block';
setTimeout(() => {emotion6.style.top = 20 + 'px';
	emotion6.style.left = 50 + 'px';
        emotion6.innerText = '♩'}, 200);

}

function mousedownEvent(e) {
let eye1 = document.getElementById('eye1');
let eye2 = document.getElementById('eye2');
eye1.style.borderRadius = '0%';
eye1.style.backgroundColor = 'hsl(0, 0%, 0%, 0)';
eye1.style.borderBottom = 'none';
eye1.style.borderLeft = 'none';	
eye1.style.transform = 'rotate(45deg)';
eye1.style.left = 120 + 'px';	
eye2.style.borderRadius = '0%';
eye2.style.backgroundColor = 'hsl(0, 0%, 0%, 0)';
eye2.style.borderTop = 'none';
eye2.style.borderRight = 'none';	
eye2.style.transform = 'rotate(45deg)';
eye2.style.left = 175 + 'px';	
}

function mouseupEvent(e) {
let eye1 = document.getElementById('eye1');
let eye2 = document.getElementById('eye2');
let mouth = document.getElementById('mouth');
eye1.style.borderRadius = '0%';
eye1.style.backgroundColor = 'hsl(0, 0%, 0%, 0)';
eye1.style.borderBottom = 'none';
eye1.style.borderLeft = 'none';	
eye1.style.transform = 'rotate(45deg)';
eye1.style.left = 120 + 'px';	
eye2.style.borderRadius = '0%';
eye2.style.backgroundColor = 'hsl(0, 0%, 0%, 0)';
eye2.style.borderTop = 'none';
eye2.style.borderRight = 'none';	
eye2.style.transform = 'rotate(45deg)';
eye2.style.left = 175 + 'px';	
mouth.style.backgroundColor = 'hsl(0, 100%, 50%)';

}

function onScrollEvent(e) {
let scroll = window.scrollY;

let emotion = document.getElementById('emotion');
let emotion1 = document.getElementById('emotion1');
let emotion2 = document.getElementById('emotion2');
let emotion3 = document.getElementById('emotion3');
let emotion4 = document.getElementById('emotion4');
let emotion5 = document.getElementById('emotion5');
let emotion6 = document.getElementById('emotion6');

emotion6.style.display = 'none';

addHearts(emotion, 222, 25, 150, 13);
addHearts(emotion1, 227, -25, 150, 13);
addHearts(emotion2, 232, 25, 120, 20);
addHearts(emotion3, 239, -25, 120, 20);
addHearts(emotion4, 242, 25, 85, 26);
addHearts(emotion5, 251, -25, 85, 26);

if (scroll %  300 < 100) {
emotion.style.display = 'block';
emotion1.style.display = 'block';
emotion2.style.display = 'none';
emotion3.style.display = 'none';
emotion4.style.display = 'none';
emotion5.style.display = 'none';

} else if (scroll % 300 < 200) {
emotion.style.display = 'block';
emotion1.style.display = 'block';
emotion2.style.display = 'block';
emotion3.style.display = 'block';
emotion4.style.display = 'none';
emotion5.style.display = 'none';
} else if (scroll % 300 < 300) {
emotion.style.display = 'block';
emotion1.style.display = 'block';
emotion2.style.display = 'block';
emotion3.style.display = 'block';
emotion4.style.display = 'block';
emotion5.style.display = 'block';
}
}

function mouseEvent(e) {
  let sox = document.getElementById('sox');

  function trigger(e, moveX) {
   let obj = document.getElementById('obj');
let eye1 = document.getElementById('eye1');
let eye2 = document.getElementById('eye2');
let ear1 = document.getElementById('ear1');
let ear2 = document.getElementById('ear2');
let ear3 = document.getElementById('ear3');
let ear4 = document.getElementById('ear4');
let mouth = document.getElementById('mouth');
let mouth1 = document.getElementById('mouth1');
let mouth2 = document.getElementById('mouth2');
let mouth3 = document.getElementById('mouth3');
let tie = document.getElementById('tie');
let tie1 = document.getElementById('tie1');
let tie2 = document.getElementById('tie2');
let tie3 = document.getElementById('tie3');
let tie4 = document.getElementById('tie4');

let emotion = document.getElementById('emotion');
let emotion1 = document.getElementById('emotion1');
let emotion2 = document.getElementById('emotion2');
let emotion3 = document.getElementById('emotion3');
let emotion4 = document.getElementById('emotion4');
let emotion5 = document.getElementById('emotion5');
let emotion6 = document.getElementById('emotion6');
emotion.style.display = 'none';
emotion1.style.display = 'none';
emotion2.style.display = 'none';
emotion3.style.display = 'none';
emotion4.style.display = 'none';
emotion5.style.display = 'none';
emotion6.style.display = 'none';

  y = 0;
  x = 0;
	  //y = e.clientY;
//x = e.clientX;
obj.style.position = 'fixed';
obj.style.left = (x + 100) + 'px';
obj.style.top = (y + 100) + 'px';
obj.style.width = '100px';
obj.style.height = '100px';
obj.style.borderRadius = '30%';
obj.style.zIndex = '1';
obj.style.backgroundColor = `hsl(0, 100%, 85%)`;
//obj.style.border = `2px solid black`
stylingEar(ear1, 100, 20);
stylingEar(ear2, 160, -20);
stylingEar2(ear3, 171, -20);
stylingEar2(ear4, 111, 20);
stylingEye(eye1, 120);
stylingEye(eye2, 170);
stylingMouth(mouth, 148, 45);
stylingMouth1(mouth1, 153);
stylingMouth2(mouth2, 148, 270);
stylingMouth3(mouth3, 148, 0);
stylingtie(tie, 129, 45);
stylingtie(tie1, 159, 45);
stylingtie3(tie2, 149, 0);
stylingblush(tie3, 121, 0);
stylingblush(tie4, 171, 0);

	  /*
	  addHearts(emotion, 222, 25, 150, 13);
addHearts(emotion1, 227, -25, 150, 13);
addHearts(emotion2, 232, 25, 120, 20);
addHearts(emotion3, 239, -25, 120, 20);
addHearts(emotion4, 242, 25, 85, 26);
addHearts(emotion5, 251, -25, 85, 26);
*/

eye1.style.left = (Math.sin(num/10) * 6 + 120) + 'px';
eye2.style.left = (Math.sin(num/10) * 6 + 170) + 'px';
  return;
  }
  let num = parseInt(localStorage.mouseCounter);
  localStorage.mouseCounter = num + 1;
   trigger(e, 0);  
  sox.style.transform = 'scale(0.3, 0.3)'
  sox.style.position = 'fixed';
  sox.style.top = e.clientY + 'px';
  sox.style.left = e.clientX + 'px';
}

//createObj
createObjs();

document.body.addEventListener('mousemove', mouseEvent);
document.body.addEventListener('mousedown', mousedownEvent);
document.body.addEventListener('mouseup', mouseupEvent);
document.body.addEventListener('dblclick', dblclickEvent);
window.addEventListener('scroll', onScrollEvent);
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.name === 'bunny') {
    document.getElementById('sox').style.display = 'block'; 
  } else {
    document.getElementById('sox').style.display = 'none';
    document.body.removeEventListener('mousemove', mouseEvent);
    document.body.removeEventListener('mousedown', mousedownEvent);
    document.body.removeEventListener('mouseup', mouseupEvent);
    document.body.removeEventListener('scroll', onScrollEvent);
    document.body.removeEventListener('dblclick', dblclickEvent);

  }
});
