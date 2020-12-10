//colofulBall.js

function mouseEvent(e) {
  let ballSize = window.innerWidth/100; 
  let randomBallSize = Math.trunc(Math.random() * (ballSize -15)) + 10;
 
  function trigger(e, isItUp=true) {
  let stick = document.createElement('div');
  let ranXpos = ballSize + parseInt(e.clientX, 10);
  let ranYpos = ballSize + parseInt(e.clientY, 10);
  let ranH = Math.trunc(Math.random() * 360);
  let ranH2 =  Math.trunc(Math.random() * 360);
  stick.style.position = 'fixed';
  stick.style.left = (ranXpos + randomBallSize/2 - window.innerWidth/800 )+ 'px';
  stick.style.width = window.innerWidth/400 + 'px';
  stick.style.backgroundColor = `hsl(${336}, 100%, 50%)`;

  if (isItUp) {
  stick.animate([
    {top: (ranYpos + randomBallSize) + 'px',
     height: (30 - randomBallSize) + 'px',
     backgroundColor: `hsl(${115}, 100%, 50%)` 
    },
    {top: (ranYpos + 30 - randomBallSize) + 'px',
     height: 0 + 'px'
    },
    {top: (ranYpos + randomBallSize) + 'px',
     height: (29 - randomBallSize) + 'px'    
    },
    {top: (ranYpos + 30 - randomBallSize) + 'px',
     height: 0 + 'px',
     backgroundColor: `hsl(${115}, 100%, 50%)` 
    }
  ], {duration: 700,
      timing(timeFraction) {
      return 1 - Math.sin(Math.acos(timeFraction))}
  })
  } else {
  stick.animate([
    {top: (ranYpos + 30 - randomBallSize) +  'px',
     height: 0 + 'px',
     backgroundColor: `hsl(${336}, 100%, 50%)`
    },
    {top: (ranYpos + randomBallSize) + 'px',
     height: (30 - randomBallSize) + 'px'
    },
    {top: (ranYpos + 30 - randomBallSize) + 'px',
     height: 0 + 'px'
 },
    {top: (ranYpos + randomBallSize) + 'px',
     height: (30 - randomBallSize) + 'px',    
     backgroundColor: `hsl(${336}, 100%, 50%)` }
  ], {duration: 700,
      timing(timeFraction) {
      return 1 - Math.sin(Math.acos(timeFraction))}
  })
 
  }

  let obj = document.createElement('div');
  obj.style.position = 'fixed';
  obj.style.left = ranXpos + 'px';
  obj.style.width = randomBallSize + 'px';
  obj.style.height = randomBallSize + 'px';
  obj.style.backgroundColor = `hsl(${ranH}, 100%, 50%)`;
  obj.style.borderRadius = '50%';

  if (isItUp) {
  obj.animate([
    {top: ranYpos + 'px',
	    backgroundColor: `hsl(${ranH}, 100%, 50%)`  },
    {top: (ranYpos + 30 ) + 'px'},
    {top: ranYpos + 'px'},
    {top: (ranYpos + 30)+ 'px',
      backgroundColor: `hsl(${ranH2}, 100%, 50%)` }
  ], {duration: 700,
      timing(timeFraction) {
      return 1 - Math.sin(Math.acos(timeFraction))}
  })
  } else {
   obj.animate([
   {top: (ranYpos + 30 ) + 'px',
      backgroundColor: `hsl(${ranH}, 100%, 50%)`},
    {top: ranYpos + 'px'},
    {top: (ranYpos + 30)+ 'px'},
    {top: ranYpos + 'px',
      backgroundColor: `hsl(${ranH2}, 100%, 50%)` }      
  ], {duration: 700,
      timing(timeFraction) {
      return 1 - Math.sin(Math.acos(timeFraction))}
  })
 
  }
  
  document.body.appendChild(obj);
  setTimeout(() => obj.remove(), 700);
  document.body.appendChild(stick);
  setTimeout(() => stick.remove(), 700);  
  return;
  }
  let num = parseInt(localStorage.mouseCounter);
  localStorage.mouseCounter = num + 1;
  if (num %  2 === 0 ) {
   trigger(e, true);
   trigger(e, false);
  }
}

document.body.addEventListener('mousemove', mouseEvent);

chrome.runtime.onMessage.addListener((msg) => {
  document.body.removeEventListener('mousemove', mouseEvent)
});
