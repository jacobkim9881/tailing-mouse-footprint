//test.js
function mouseEvent(e) {

    function trigger(e) {
    let obj = document.createElement('div');
    let ballSize = window.innerWidth/100;
    let randomBallSize = Math.trunc(Math.random() * ballSize) + 5;
    let ranXpos = ballSize + parseInt(e.clientX, 10);
    let ranYpos = ballSize + parseInt(e.clientY, 10);
  //  let colorArr = ['#b2fcff','#edfcff', '#5ce1fc', '#3f63ff']
  //  let colorArr =  		['#7dd0c0','#f1e3c8','#ec8e6a','#ee4b49']
      let colorArr = ['#f72585','#480ca8','#4361ee','#4cc9f0']	
  
    let ran4 = Math.trunc(Math.random() * 4);
        
    let ranH = colorArr[ran4];
    obj.style.position = 'fixed';
    obj.style.left = ranXpos + 'px';
    obj.style.width = randomBallSize + 'px';
    obj.style.height = randomBallSize + 'px';
    obj.style.backgroundColor = ranH;
    obj.style.borderRadius = '50%';
  
    obj.animate([
      {top: (ranYpos + randomBallSize) + 'px',
          backgroundColor: ranH},
      {top: (ranYpos - 10 )+ 'px'},
      {top: (ranYpos + randomBallSize) + 'px'},
      {top: ((ranYpos + 100 )+ randomBallSize) + 'px'},
      {top: (ranYpos + 80) + 'px',
        backgroundColor: ranH}
    ], {duration: 700,
        timing(timeFraction) {
        return 1 - Math.sin(Math.acos(timeFraction))}
    })
    
    document.body.appendChild(obj);
    setTimeout(() => obj.remove(), 700);
    return;
    }
    let num = parseInt(localStorage.mouseCounter);
    localStorage.mouseCounter = num + 1;
    if (num %  8 === 0 ) {
     trigger(e);
    }
  }
  
  document.body.addEventListener('mousemove', mouseEvent);
  
  chrome.runtime.onMessage.addListener((msg) => {
    document.body.removeEventListener('mousemove', mouseEvent)
  });
  