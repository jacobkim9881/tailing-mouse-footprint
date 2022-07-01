//rainbow.js
  function trigger(e, num, addY = 0) {
    let obj = document.createElement('div');
    let ballSize = window.innerHeight/50;
    let randomBallSize = ballSize + 5;
    let ranXpos = ballSize + parseInt(e.clientX, 10);
    let ranYpos = ballSize + parseInt(e.clientY, 10);
    let ranH = Math.trunc(Math.random() * 360);
    let ranH2 =  Math.trunc(Math.random() * 360);  
    let colors =[
'#ed0000', 
'#f19d00',
'#f2f201',
'#007a01',
'#01f2f2',
'#0000f0',
'#7a0079'
    ]
		  // ['violet', 'blue', 'yellow', 'orange', 'red']
    //let colors = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red']
    obj.style.position = 'fixed';
    obj.style.left = ranXpos + 'px';
    obj.style.top = (ranYpos + addY) + 'px';
    obj.style.width = randomBallSize + 'px';
    obj.style.height = randomBallSize + 'px';
    obj.style.borderTop = `2px solid ${colors[num % 7]}`
    //obj.style.borderTop = `2px solid ${colors[num % 5]}`
    obj.style.borderRadius = '50%';
    let animateColor = setInterval(() => {
    obj.style.borderTop = `2px solid ${colors[num % 7]}`
    //obj.style.borderTop = `2px solid ${colors[num % 5]}`
	    num = num + 1
    }, 100)
/*
    obj.animate([
	    {borderTop: `2px solid ${colors[num % 7]}`},
	    {borderTop: `2px solid ${colors[num + 1 % 7]}`},
	    {borderTop: `2px solid ${colors[num + 2 % 7]}`},
	    {borderTop: `2px solid ${colors[num + 3 % 7]}`},

    ], {duration: 800,
      timing(timeFraction) {
        return 1 - Math.sin(Math.acos(timeFraction))}
    })
 */ 
    document.body.appendChild(obj);
    setTimeout(() => {
	    obj.remove()
	    clearInterval(animateColor)
    }, 700);
    return;
  }

function mouseEvent(e) {

  let num = parseInt(localStorage.mouseCounter);
  localStorage.mouseCounter = num + 1;
  if (num %  9 === 0 ) {
    trigger(e, num);
    trigger(e, num + 1, 2);
    trigger(e, num + 2, 4);
    trigger(e, num + 3, 6);
//trigger(e, num + 4, 8);
//trigger(e, num + 5, 10);
//trigger(e, num + 6, 12);
  }
}

document.body.addEventListener('mousemove', mouseEvent);

chrome.runtime.onMessage.addListener((msg) => {
  document.body.removeEventListener('mousemove', mouseEvent)
});
