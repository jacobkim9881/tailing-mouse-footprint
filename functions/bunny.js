//bunny.js
localStorage.mouseObjArr = ['obj', 'eye1', 'eye2',
           'ear1', 'ear2', 'ear3', 'ear4',
           'mouth', 'mouth1', 'mouth2', 'mouth3',
           'tie', 'tie1', 'tie2', 'tie3', 'tie4'];

function createObjs() {
let sox = document.createElement('div');
sox.id = 'sox'
let ids = localStorage.mouseObjArr.match(/[^,]\w+/gi);
for (let oneId in ids) {
 let arr =  document.createElement('div')
 arr.id = ids[oneId];
 sox.appendChild(arr);
}
	/*
	let obj = document.createElement('div');
let eye1 = document.createElement('div');
let eye2 = document.createElement('div');
let sox = document.createElement('div');
let ear1 = document.createElement('div');
let ear2 = document.createElement('div');
let ear3 = document.createElement('div');
let ear4 = document.createElement('div');
let mouth = document.createElement('div');
let mouth1 = document.createElement('div');
let mouth2 = document.createElement('div');
let mouth3 = document.createElement('div');
let tie = document.createElement('div');
let tie1 = document.createElement('div');
let tie2 = document.createElement('div');
let tie3 = document.createElement('div');
let tie4 = document.createElement('div');
*/

/*
y = e.clientY;
x = e.clientX;
obj.style.position = 'fixed';
obj.style.left = (x + 100) + 'px';
obj.style.top = (y + 100) + 'px';
obj.style.width = '100px';
obj.style.height = '100px';
obj.style.borderRadius = '50%';
obj.style.backgroundColor = `hsl(0, 100%, 85%)`;
obj.style.border = `2px solid black`
*/

/*
sox.appendChild(ear1);
sox.appendChild(ear2);
sox.appendChild(ear3);
sox.appendChild(ear4);
sox.appendChild(eye1);
sox.appendChild(eye2);
sox.appendChild(mouth);
sox.appendChild(mouth1);
sox.appendChild(mouth2);
sox.appendChild(mouth3);
sox.appendChild(tie);
sox.appendChild(tie1);
sox.appendChild(tie2);
sox.appendChild(tie3);
sox.appendChild(tie4);
*/

/*
appendObj(ear1, stylingEar, 100, sox, 20);
appendObj(ear2, stylingEar, 160, sox, -20);
appendObj(ear3, stylingEar2, 171, sox, -20);
appendObj(ear4, stylingEar2, 111, sox, 20);
appendObj(eye1, stylingEye, 120, sox);
appendObj(eye2, stylingEye, 170, sox);
appendObj(mouth, stylingMouth, 148, sox, 45);
appendObj(mouth1, stylingMouth1, 153, sox);
appendObj(mouth2, stylingMouth2, 148, sox, 270);
appendObj(mouth3, stylingMouth3, 148, sox, 0);
appendObj(tie, stylingtie, 130, sox, 45);
appendObj(tie1, stylingtie, 160, sox, 45);
appendObj(tie4, stylingtie3, 150, sox, 0);
appendObj(tie3, stylingblush, 121, sox, 0);
appendObj(tie2, stylingblush, 171, sox, 0);
*/

//sox.appendChild(obj);
//
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
ele.style.border = `2px solid black`;
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


function appendObj(objec, func, pos, mo, deg) {
objec = document.createElement('div');
func(objec, pos, deg);
mo.appendChild(objec);
}

//sox.style.transform = 'scale(0.3, 0.3)'
/*
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
stylingtie(tie, 130, 45);
stylingtie(tie1, 160, 45);
stylingtie3(tie2, 171, 0);
stylingblush(tie3, 121, 0);
stylingblush(tie4, 150, 0);
*/


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

	  let ids = localStorage.mouseObjArr.match(/[^,]\w+/gi);
  for (let oneId in ids) {
    
  }
  y = 0;
  x = 0;
	  //y = e.clientY;
//x = e.clientX;
obj.style.position = 'fixed';
obj.style.left = (x + 100) + 'px';
obj.style.top = (y + 100) + 'px';
obj.style.width = '100px';
obj.style.height = '100px';
obj.style.borderRadius = '50%';
obj.style.zIndex = '1';
obj.style.backgroundColor = `hsl(0, 100%, 85%)`;
obj.style.border = `2px solid black`
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
stylingtie(tie, 130, 45);
stylingtie(tie1, 160, 45);
stylingtie3(tie2, 150, 0);
stylingblush(tie3, 121, 0);
stylingblush(tie4, 171, 0);
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

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.name === 'bunny') {
    document.getElementById('sox').style.display = 'block'; 
  } else {
    document.getElementById('sox').style.display = 'none';
    document.body.removeEventListener('mousemove', mouseEvent);
  }
});
