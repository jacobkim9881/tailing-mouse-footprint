//dna.js

function mouseEvent(e) {
  let pxByScreenWidth = window.innerWidth/100;
  let basicSize = 10;
  let randomBallSize = Math.trunc(Math.random() * (pxByScreenWidth -15)) + basicSize;
 
  function trigger(e, isItUp=true) {
    let stick = document.createElement('div');
    let xPos = pxByScreenWidth + parseInt(e.clientX, 10);
    let yPos = pxByScreenWidth + parseInt(e.clientY, 10);
    let ranH = Math.trunc(Math.random() * 360);
    let ranH2 =  Math.trunc(Math.random() * 360);
  
    //stick between DNAs	  
    let middleOfBall = randomBallSize/2 - window.innerWidth/800; 
    let stickWidth =  window.innerWidth/400;
    let pink = 336;	  
    stick.style.position = 'fixed';
    stick.style.left = xPos +  middleOfBall + 'px';
    stick.style.width = stickWidth + 'px';
    stick.style.backgroundColor = `hsl(${pink}, 100%, 50%)`;

    //This animation decides length of sticks between DNAs	  
    //This condition with a DNA ball of two
    //Sticks' lengths aren't exact to DNAs
    if (isItUp) {
      stick.animate([
        {top: (yPos + randomBallSize) + 'px',
          height: (30 - randomBallSize) + 'px',
          backgroundColor: `hsl(${115}, 100%, 50%)` 
        },
        {top: (yPos + 30 - randomBallSize) + 'px',
          height: 0 + 'px'
        },
        {top: (yPos + randomBallSize) + 'px',
          height: (29 - randomBallSize) + 'px'    
        },
        {top: (yPos + 30 - randomBallSize) + 'px',
          height: 0 + 'px',
          backgroundColor: `hsl(${115}, 100%, 50%)` 
        }
      ], {duration: 700,
        timing(timeFraction) {
          return 1 - Math.sin(Math.acos(timeFraction))}
      })
    }
    //This condition with the other DNA ball of two	  
    else {
      stick.animate([
        {top: (yPos + 30 - randomBallSize) +  'px',
          height: 0 + 'px',
          backgroundColor: `hsl(${336}, 100%, 50%)`
        },
        {top: (yPos + randomBallSize) + 'px',
          height: (30 - randomBallSize) + 'px'
        },
        {top: (yPos + 30 - randomBallSize) + 'px',
          height: 0 + 'px'
        },
        {top: (yPos + randomBallSize) + 'px',
          height: (30 - randomBallSize) + 'px',    
          backgroundColor: `hsl(${336}, 100%, 50%)` }
      ], {duration: 700,
        timing(timeFraction) {
          return 1 - Math.sin(Math.acos(timeFraction))}
      })
 
    }

    let dnaBall = document.createElement('div');
    dnaBall.style.position = 'fixed';
    dnaBall.style.left = xPos + 'px';
    dnaBall.style.width = randomBallSize + 'px';
    dnaBall.style.height = randomBallSize + 'px';
    dnaBall.style.backgroundColor = `hsl(${ranH}, 100%, 50%)`;
    dnaBall.style.borderRadius = '50%';

    //This if condition makes balls cross moving like waves	  
    //This condition with a DNA of two
    if (isItUp) {
      dnaBall.animate([
        {top: yPos + 'px',
	    backgroundColor: `hsl(${ranH}, 100%, 50%)`  },
        {top: (yPos + 30 ) + 'px'},
        {top: yPos + 'px'},
        {top: (yPos + 30)+ 'px',
          backgroundColor: `hsl(${ranH2}, 100%, 50%)` }
      ], {duration: 700,
        timing(timeFraction) {
          return 1 - Math.sin(Math.acos(timeFraction))}
      })
    }
    //This condition with other DNA of two
    else {
      dnaBall.animate([
        {top: (yPos + 30 ) + 'px',
          backgroundColor: `hsl(${ranH}, 100%, 50%)`},
        {top: yPos + 'px'},
        {top: (yPos + 30)+ 'px'},
        {top: yPos + 'px',
          backgroundColor: `hsl(${ranH2}, 100%, 50%)` }      
      ], {duration: 700,
        timing(timeFraction) {
          return 1 - Math.sin(Math.acos(timeFraction))}
      })
 
    }
  
    document.body.appendChild(dnaBall);
    setTimeout(() => dnaBall.remove(), 700);
    document.body.appendChild(stick);
    setTimeout(() => stick.remove(), 700);  
    return;
  }
  //This decides number of objects by mousemove	
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
