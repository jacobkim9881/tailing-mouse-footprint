//card.js

function getObj() {
 let obj = document.createElement('div');
 obj.id = 'card-obj-playing';  
 obj.style.width = 0 + 'px'; 
 obj.style.height = 0 + 'px';
 obj.style.fontFamily = 'sans-serif';	
 document.body.appendChild(obj);	
// return obj;
}
getObj();

function mouseEvent(e) {
// object for styling
  let obj = document.getElementById('card-obj-playing');
  let ran10 = Math.trunc(Math.random() * 10) + 5;
    let ranXpos = Math.trunc(Math.random() * ran10) + parseInt(e.clientX, 10);
    let ranYpos = Math.trunc(Math.random() * 10) + parseInt(e.clientY, 10);
    let ran20 = ranYpos - 30;
    let txtArr = ['♠','♥','♦','♣'];
    let ran4 = Math.trunc(Math.random() * 4);	
    obj.style.fontSize = '20px';	
    obj.style.position = 'fixed';
    obj.style.top = (e.clientY + 10) + 'px';
    obj.style.left = (e.clientX + 10) + 'px';
    obj.style.zIndex = '1';	
    obj.style.borderRadius = '50%'; 
    //setTimeout(() => obj.remove(), 200);
  return;
}
setInterval(() => {
    let obj = document.getElementById('card-obj-playing');
    let txtArr = ['♥','♠','♦','♣'];
    let ran = Math.random(); 	
    let ran4 = Math.trunc(ran * 4);
    let chance = 0.03;	    
    let txtColor = ran4 % 2 === 0 ? 'red': 'black';
    obj.style.color = txtColor;	    
    obj.innerText = ran.toString()[2] + ran.toString()[3] === '03' ? '★' :txtArr[ran4];
    }, 1500);	    
function animateObj() {
    let obj = document.getElementById('card-obj-playing');
    obj.innerText = '♠';
    obj.style.color = 'black';	    
    obj.style.textIndent = '-10px';
    obj.animate([
	    {transform: 'rotateY(90deg)'},
	    {transform: 'rotateY(270deg)'},
	    {transform: 'rotateY(90deg)'},
	        ], {
	    iterations: Infinity,
	    duration: 3000
    })

}
animateObj();
document.body.addEventListener('mousemove', mouseEvent);

chrome.runtime.onMessage.addListener((msg) => {
document.body.removeEventListener('mousemove', mouseEvent)
document.getElementById('card-obj-playing').remove();

});
