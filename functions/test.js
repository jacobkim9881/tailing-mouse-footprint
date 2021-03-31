//test.js

function getObj() {
 let obj = document.createElement('div');
 obj.id = 'test-obj';  
 obj.style.width = 60 + 'px'; 
 obj.style.height = 50 + 'px'; 
 document.body.appendChild(obj);	

 let obj1 = document.createElement('div');
 obj1.id = 'test-obj1';  
 obj1.style.width = 50 + 'px'; 
 obj1.style.height = 60 + 'px'; 
 document.body.appendChild(obj1);	

 let obj2 = document.createElement('div');
 obj2.id = 'test-obj2';  
// obj2.style.width = 70 + 'px'; 
// obj2.style.height = 50 + 'px'; 
 obj2.style.width = 60 + 'px'; 
 obj2.style.height = 60 + 'px'; 
 document.body.appendChild(obj2);	

 let nuc1 = document.createElement('div');
 nuc1.id = 'test-nuc1';  
 nuc1.style.width = 10 + 'px'; 
 nuc1.style.height = 10 + 'px'; 
 document.body.appendChild(nuc1);	

 let nuc2 = document.createElement('div');
 nuc2.id = 'test-nuc2';  
 nuc2.style.width = 10 + 'px'; 
 nuc2.style.height = 10 + 'px'; 
 document.body.appendChild(nuc2);	

 let nuc3 = document.createElement('div');
 nuc3.id = 'test-nuc3';  
 nuc3.style.width = 10 + 'px'; 
 nuc3.style.height = 10 + 'px'; 
 document.body.appendChild(nuc3);	

 let nuc4 = document.createElement('div');
 nuc4.id = 'test-nuc4';  
 nuc4.style.width = 10 + 'px'; 
 nuc4.style.height = 10 + 'px'; 
 document.body.appendChild(nuc4);	



 let sub = document.createElement('div');
 sub.id = 'test-sub';  
 sub.style.width = 10 + 'px'; 
 sub.style.height = 10 + 'px'; 
 document.body.appendChild(sub);	

 let sub1 = document.createElement('div');
 sub1.id = 'test-sub1';  
 sub1.style.width = 10 + 'px'; 
 sub1.style.height = 10 + 'px'; 
 document.body.appendChild(sub1);	

 let sub2 = document.createElement('div');
 sub2.id = 'test-sub2';  
 sub2.style.width = 10 + 'px'; 
 sub2.style.height = 10 + 'px'; 
 document.body.appendChild(sub2);	
// sub.style.display = 'none';
// sub1.style.display = 'none';
// sub2.style.display = 'none';

	// return obj;
}
getObj();

function mouseEvent(e) {
// object for styling
  let obj = document.getElementById('test-obj');
  let obj1 = document.getElementById('test-obj1');
  let obj2 = document.getElementById('test-obj2');

  let nuc1 = document.getElementById('test-nuc1');
  let nuc2 = document.getElementById('test-nuc2');
  let nuc3 = document.getElementById('test-nuc3');
  let nuc4 = document.getElementById('test-nuc4');

  let sub = document.getElementById('test-sub');
  let sub1 = document.getElementById('test-sub1');
  let sub2 = document.getElementById('test-sub2');

  let num = parseInt(localStorage.mouseCounter);
  localStorage.mouseCounter = num + 1;

//  let obj = getObj();	
  let ran10 = Math.trunc(Math.random() * 10) + 5;
    let ranXpos = Math.trunc(Math.random() * ran10) + parseInt(e.clientX, 10);
    let ranYpos = Math.trunc(Math.random() * 10) + parseInt(e.clientY, 10);
    let ran20 = ranYpos - 30;

    let num0 = num % 360 / 10;
    let wid = 30;
    let hei = 10;
    let farX = -30;
    let farY = -30;	
    x = Math.sin(num0) * wid;
    y = Math.cos(num0) * hei;

    let num1 = (num + 60)% 360 / 20;	
    let num11 = (num + 105)% 360 / 100;	
	
    let x1 = Math.sin(num1) * wid;
    let y1 = Math.cos(num1) * hei;
    let rad = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));	
    let x11 = Math.sin(num1 - 45) * rad;	
    let y11 = Math.cos(num1 + 45) * rad;	
// console.log(num)
//	console.log(num11)
//console.log(x11, y11)

    let num2 = (num + 120) % 360 / 10;	
    let x2 = Math.sin(num2) * hei;
    let y2 = Math.cos(num2) * wid;
    sub.style.position = 'fixed';
    sub.style.top = (e.clientY -farX) + x + 'px';
    sub.style.left = (e.clientX - farY) + y + 'px';
    sub.style.transform = `translateZ(${num0}deg)`	
    sub.style.borderRadius = '50%';	
    sub.style.border = '1px solid red';	
    sub.style.zIndex = '-1';	
    sub.style.backgroundImage = `linear-gradient(to bottom right, hsl(170, 100%, 50%), hsl(170, 100%, 0%)`;
    sub1.style.borderRadius = '50%'; 

    sub1.style.position = 'fixed';
    sub1.style.top = (e.clientY -farX) + x11 + 'px';
    sub1.style.left = (e.clientX - farY) + y11 + 'px';
    sub1.style.transform = `translateZ(${num1}deg)`	
    sub1.style.borderRadius = '50%';	
    sub1.style.border = '1px solid red';	
    sub1.style.zIndex = '-1';	
    sub1.style.backgroundImage = `linear-gradient(to bottom right, hsl(170, 100%, 50%), hsl(170, 100%, 0%)`;
    sub1.style.borderRadius = '50%'; 

    sub2.style.position = 'fixed';
    sub2.style.top = (e.clientY -farY) + x2 + 'px';
    sub2.style.left = (e.clientX - farX) + y2 + 'px';
    sub2.style.transform = `translateZ(${num2}deg)`	
    sub2.style.borderRadius = '50%';	
    sub2.style.border = '1px solid red';	
    sub2.style.zIndex = '-1';	
    sub2.style.backgroundImage = `linear-gradient(to bottom right, hsl(170, 100%, 50%), hsl(170, 100%, 0%)`;
    sub2.style.borderRadius = '50%';

    obj.style.position = 'fixed';
    obj.style.top = (e.clientY + 10) + 'px';
    obj.style.left = (e.clientX + 5) + 'px';
    obj.style.borderRadius = '50%';	
    obj.style.border = '1px solid red';	
    obj.style.zIndex = '-1';	
    obj.style.transform = 'rotateX(60deg)';	
 //   obj.style.backgroundImage = `linear-gradient(to bottom right, hsl(170, 100%, 50%), hsl(170, 100%, 0%)`;
    obj.style.borderRadius = '50%';

obj1.style.position = 'fixed';
    obj1.style.top = (e.clientY + 5) + 'px';
    obj1.style.left = (e.clientX + 10) + 'px';
    obj1.style.borderRadius = '50%';	
    obj1.style.border = '1px solid red';	
    obj1.style.zIndex = '-1';	
    obj1.style.transform = 'rotateY(60deg)';	
 //   obj1.style.backgroundImage = `linear-gradient(to bottom right, hsl(170, 100%, 50%), hsl(170, 100%, 0%)`;
    obj1.style.borderRadius = '50%';

obj2.style.position = 'fixed';
//    obj2.style.top = (e.clientY + 10) + 'px';
//    obj2.style.left = (e.clientX + 2) + 'px';
    obj2.style.top = (e.clientY + 5) + 'px';
    obj2.style.left = (e.clientX + 5) + 'px';
    obj2.style.borderRadius = '50%';	
    obj2.style.border = '1px solid red';	
    obj2.style.zIndex = '-1';	
//    obj2.style.transform = 'rotate(-45deg) rotateX(60deg)';	
//   obj2.style.backgroundImage = `linear-gradient(to bottom right, hsl(170, 100%, 50%), hsl(170, 100%, 0%)`;
    obj2.style.borderRadius = '50%';

    nuc1.style.position = 'fixed';
    nuc1.style.top = (e.clientY + 25) + 'px';
    nuc1.style.left = (e.clientX + 25) + 'px';
    nuc1.style.borderRadius = '50%';	
//    nuc1.style.border = '1px solid red';	
    nuc1.style.zIndex = '10';	
    nuc1.style.backgroundImage = `linear-gradient(to bottom right, hsl(0, 100%, 50%), hsl(170, 100%, 0%)`;
    nuc1.style.borderRadius = '50%';

    nuc2.style.position = 'fixed';
    nuc2.style.top = (e.clientY + 35) + 'px';
    nuc2.style.left = (e.clientX + 25) + 'px';
    nuc2.style.borderRadius = '50%';	
//    nuc2.style.border = '1px solid red';	
    nuc2.style.zIndex = '10';	
    nuc2.style.backgroundImage = `linear-gradient(to bottom right, hsl(0, 100%, 100%), hsl(170, 100%, 0%)`;
    nuc2.style.borderRadius = '50%';

    nuc3.style.position = 'fixed';
    nuc3.style.top = (e.clientY + 35) + 'px';
    nuc3.style.left = (e.clientX + 35) + 'px';
    nuc3.style.borderRadius = '50%';	
//    nuc3.style.border = '1px solid red';	
    nuc3.style.zIndex = '10';	
    nuc3.style.backgroundImage = `linear-gradient(to bottom right, hsl(0, 100%, 50%), hsl(170, 100%, 0%)`;
    nuc3.style.borderRadius = '50%';

    nuc4.style.position = 'fixed';
    nuc4.style.top = (e.clientY + 25) + 'px';
    nuc4.style.left = (e.clientX + 35) + 'px';
    nuc4.style.borderRadius = '50%';	
//    nuc4.style.border = '1px solid red';	
    nuc4.style.zIndex = '10';	
    nuc4.style.backgroundImage = `linear-gradient(to bottom right, hsl(0, 100%, 100%), hsl(170, 100%, 0%)`;
    nuc4.style.borderRadius = '50%';

/*
    sub.animate([
    
    ],{  
      duration: 1000,
      iterations: Infinity
    })
*/
	/*
    obj.animate([
      {top: ranYpos + 'px',
      left: e.clientX + 'px',
      width: 5 + 'px',
      height: 5 + 'px' 
    }, 
      {top: ran20 + 'px',
      left: ranXpos + 'px',
      width: ran10 + 'px',
      height: ran10 + 'px' 
    }
    ], 200)
*/
  //setTimeout(() => obj.remove(), 200);
  return;
}

document.body.addEventListener('mousemove', mouseEvent);

chrome.runtime.onMessage.addListener((msg) => {
document.body.removeEventListener('mousemove', mouseEvent)
});
