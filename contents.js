let holdObj = document.createElement('div');

function ranNum(num) {
  return Math.trunc(Math.random() * num)
}

function firefly(obj, e) {
  x = e.clientX;
  y = e.clientY
  let ran30 = ranNum(20) + 20;
  let changedX = x + ranNum(100);
  
  obj.style.position = 'fixed';
  obj.style.top = y + 'px';
  obj.style.left = x + 'px';
  obj.style.width = 10 + 'px';
  obj.style.height = 10 + 'px';
  obj.style.backgroundImage = `radial-gradient(circle, hsl(66, 100%, 52%), hsl(80, 100%, 52%))`; 
  obj.style.borderRadius = '50%';

  obj.animate([
    {backgroundImage: `radial-gradient(circle, hsl(66, 100%, 52%), hsl(80, 100%, 52%))`,
  width: ran30 + 'px',
  height: ran30 + 'px',
opacity: 0},
    {backgroundImage: `radial-gradient(circle, hsl(66, 100%, 52%), hsl(66, 100%, 52%))`,
    width: 10 + 'px',
    height: 10 + 'px',
    opacity: 0.8},
    {backgroundImage: `radial-gradient(circle, hsl(66, 100%, 52%), hsl(80, 100%, 52%))`,
    width: ran30 + 'px',
    height: ran30 + 'px',
    opacity: 0}
    ], {
    duration: 3000,
    iterations: Infinity
  });
  obj.animate([
    {left: x + 'px'
    },
    {left: changedX + 'px'
    },
    {left: x + 'px'
    }
  ], {
    duration: 5000,
    iterations: Infinity
  });
  obj.animate([
    {top: y + 'px'},
    {top: 0 + 'px'}
  ], 8000)
 
}

function heart(test, e, moveX, deg) {
  let obj = document.createElement('div');
  let ranXpos = Math.trunc(Math.random() * 15) + parseInt(e.clientX, 10);
  let ranYpos = Math.trunc(Math.random() * 10) + parseInt(e.clientY, 10);
  let ran10 = Math.trunc(Math.random() * 5) + 5;
  let ranYpos2 = ranYpos + ran10 + 5;
  let secLeft = ranXpos + ran10/2;
  obj.style.position = 'fixed';
  if (moveX === 1) {
    obj.style.left = - secLeft + 'px';
  } else {
    obj.style.left = ranXpos + 'px';
  }  
  obj.style.width = ran10 + 'px';
  obj.style.height = ran10 + 'px';
  obj.style.backgroundColor = `hsl(0, 100%, 50%)`;
  obj.style.borderRadius = '50%';  

  obj.animate([           
    {top: ranYpos2 + 'px',
  transform: 'skewY(25deg)'},
    {top: ranYpos + 'px',
    transform: 'skewY(30deg)'},
    {top: ranYpos + 'px',
    transform: 'skewY(30deg)'},
    {top: ranYpos + 'px',
    transform: 'skewY(25deg)'}
  ], 500);

  document.body.appendChild(obj);
  setTimeout(() => obj.remove(), 500);
  
  let obj1 = document.createElement('div');
  obj1.style.position = 'fixed';
  obj1.style.left = secLeft + 'px';
  obj1.style.width = ran10 + 'px';
  obj1.style.height = ran10 + 'px';
  obj1.style.backgroundColor = `hsl(0, 100%, 50%)`;
  obj1.style.borderRadius = '50%';  

  obj1.animate([           
    {top: ranYpos2 + 'px',
  transform: 'skewY(-25deg)'},
    {top: ranYpos + 'px',
    transform: 'skewY(-30deg)'},
    {top: ranYpos + 'px',
    transform: 'skewY(-30deg)'},
    {top: ranYpos + 'px',
    transform: 'skewY(-25deg)'}
  ], 500);

  document.body.appendChild(obj1);
  setTimeout(() => obj1.remove(), 500);
  }

function leafs(obj, e) {
  x = e.clientX;
  y = e.clientY;
  let bottomY = window.innerHeight - 30;
  let changedX = x + 30;
  let skewness = [
    {first: 'skew(0deg, 0deg)', second: 'skew(20deg, 10deg)'},
    {first: 'rotateY(360deg)', second: 'rotateY(0deg)'}
  ]
  obj.style.position = 'fixed';
  obj.style.width = 15 + 'px';
  obj.style.height = 15 + 'px';
  obj.style.backgroundColor = 'hsl(76, 58%, 47%)';
  obj.style.borderRadius = '40% 90% / 10% 90%';  
  obj.style.top = bottomY + 'px';
  obj.style.left = x + 'px';
  obj.animate([
    {top: y + 'px'},
    {top: bottomY + 'px'}        
  ], 8000);
  obj.animate([
    {opacity: 1, offset: 0.8},
    {opacity: 0}    
  ], 5000);
  obj.animate([
    {left: changedX + 'px', transform: skewness[0].first, easing: 'ease-in-out'},
    {left: x + 'px', transform: skewness[0].second, 
    easing: 'ease-in-out'},
    {left: changedX + 'px', transform: skewness[0].first, easing: 'ease-in-out'}
  ], {
    duration: 1000,
    iterations: 8
  })
}

function snowflake(obj, e, background) {
  x = e.clientX;
  y = e.clientY;
  let bottomY = window.innerHeight - 30;
  obj.style.position = 'fixed';
  obj.style.width = 10 + 'px';
  obj.style.height = 10 + 'px';
  obj.style.borderRadius = '50%';  
  obj.style.backgroundImage = `radial-gradient(circle, hsl(0, 0%, 70%), hsl(0, 0%, 90%))`;  
  
  if (background === 0) {
    obj.style.left = x + 'px';
    obj.animate([
      {top: y + 'px'},
      {top: bottomY + 'px'}        
    ], 8000)
  } else {
    x = Math.trunc(Math.random() * window.innerWidth);
    obj.style.left = x + 'px';
    obj.animate([
      {top: 0 + 'px'},
      {top: bottomY + 'px'}        
    ], 16000)
  
  }

}

function giveBubble(obj, e) {  
    let ran10 = Math.trunc(Math.random() * 10) + 5;
    let ranXpos = Math.trunc(Math.random() * ran10) + parseInt(e.clientX, 10);
    let ranYpos = Math.trunc(Math.random() * 10) + parseInt(e.clientY, 10);
    let ran20 = ranYpos - 30;
    obj.style.position = 'fixed';
    obj.style.backgroundImage = `linear-gradient(to bottom right, hsl(170, 100%, 50%), hsl(170, 100%, 0%)`;
    obj.style.borderRadius = '50%';  
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
    
  }

  function giveSquare(obj, e) {
    let ran = Math.random() * 2;
    if (ran < 1) {
      ran = 1;
    } else {
      ran = - 1;
    }
    let ranXpos = Math.trunc(Math.random() * 400) + parseInt(e.clientX, 10);
    let ranYpos = Math.trunc(Math.random() * 300 * ran) + parseInt(e.clientY, 10);
    let ran10 = Math.trunc(Math.random() * 10) + 10;
    let ran360 = Math.trunc(Math.random() * 360);
    let ran360Two = Math.trunc(Math.random() * 360);
    obj.style.position = 'fixed';
    obj.style.top = ranYpos + 'px';
    obj.style.left = ranXpos + 'px';
    obj.style.width = ran10 + 'px';
    obj.style.height = ran10 + 'px';
    obj.style.backgroundImage = `linear-gradient(to bottom right, hsl(${ran360}, 100%, 50%), hsl(${ran360Two}, 100%, 50%)`;  

    obj.animate([
      {opacity: 0.7,
        top: ranYpos + 'px',
      left: ranXpos + 'px'},
      {opacity: 0,
        top: e.clientY + 'px',
      left: e.clientX + 'px'}
    ], 200);
  }

  function giveStyle(obj, e) {
    let ranXpos = Math.trunc(Math.random() * 10) + parseInt(e.clientX, 10);
    let ranYpos = Math.trunc(Math.random() * 10) + parseInt(e.clientY, 10);
    let ran10 = Math.trunc(Math.random() * 5) + 5;
    let ranYpos2 = ranYpos + ran10 + 5;
    let ran360 = Math.trunc(Math.random() * 360);
    obj.style.position = 'fixed';
    obj.style.left = ranXpos + 'px';
    obj.style.width = ran10 + 'px';
    obj.style.height = ran10 + 'px';
    obj.style.backgroundColor = `hsl(${ran360}, 100%, 50%)`;
    obj.style.borderRadius = '50%';

    obj.animate([       
      {top: ranYpos2 + 'px'},
      {top: ranYpos + 'px'},
      {top: ranYpos2 + 'px'},
    ], 200)
    }

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'

    function giveLetter(obj, e) {
      let ranXpos = Math.trunc(Math.random() * 10) + parseInt(e.clientX, 10);
      let ranYpos = Math.trunc(Math.random() * 10) + parseInt(e.clientY, 10);
      let ran15 = Math.trunc(Math.random() * 20) + 5;
      let ranAlpha = Math.trunc(Math.random() * alphabet.length);
      obj.style.position = 'fixed';
      obj.style.top = ranYpos + 'px';
      obj.style.left = ranXpos + 'px';
      obj.innerHTML = alphabet[ranAlpha];
      obj.style.fontSize = ran15 + 'px';
      }

      let num = 1;
      let formerX;
      let formerY;

      let base = (e) => {
        let obj = document.createElement('div');
        
        obj.setAttribute('id', 'particle' + num);
        num++
        if (e !== undefined) {
          giveBubble(obj, e);  
        }
        document.body.appendChild(obj);
        setTimeout(() => obj.remove(), 200);
      }

      let baseSquare = (e) => {
        num++
        if (num % 10 === 0) {
          let obj = document.createElement('div');
        
          if (e !== undefined) {
            giveSquare(obj, e);  
          }
          document.body.appendChild(obj);
          setTimeout(() => obj.remove(), 200);
  
        }
      }

      let baseO = (e) => {
        let obj = document.createElement('div');
        
        obj.setAttribute('id', 'particle' + num);
        num++
        if (e !== undefined) {
          giveStyle(obj, e);  
        }
        document.body.appendChild(obj);
        setTimeout(() => obj.remove(), 200);
      }

      let baseLetter = (e) => {
        let obj = document.createElement('div');
        
        obj.setAttribute('id', 'particle' + num);
        num++
        obj.setAttribute('class', 'letter')
        if (e !== undefined) {
          giveLetter(obj, e);  
        } 
        obj.animate([
          {opacity: 1}, 
          {opacity: 0}
        ], 200) 
        document.body.appendChild(obj);
        setTimeout(() => obj.remove(), 200);
      }

      let baseSnowflake = (e) => {
        let obj = document.createElement('div');
        let obj1 = document.createElement('div');
        let ran2000 = Math.trunc(Math.random() * 2000);
        num++
          if (e !== undefined) {
            if (num % 10 === 0) {
            snowflake(obj, e, 0);
            document.body.appendChild(obj);
            setTimeout(() => obj.remove(), 8000)
          setTimeout(() => {
            snowflake(obj1, e, 1);
            document.body.appendChild(obj1);
            setTimeout(() => obj1.remove(), 16000);
          }, ran2000)
          }  
          }
        
      }

      let baseWaterWave = (e) => {
        num++;
        if (num % 50 === 0) {
          if (num % 10 === 0) {
            if (e !== undefined) {
              waterWave('', e);  
            } 
            }
        }
      }

      let baseRain = (e) => {
        num++;
        let ran150 = Math.trunc(Math.random() * 151);
        if (num % 150 === ran150) {

          if (num % 1 === 0) {
            if (e !== undefined) {
              rain(e);  
              if (num % 2 === 0) {
                rain(e);
              }
            }
          }
        }
      }            
      let baseLeafs = (e) => {
        let obj = document.createElement('div');
        num++;
        if (num % 30 === 0) {
          if (e !== undefined) {
            leafs(obj, e);  
          } 
          document.body.appendChild(obj);
          setTimeout(() => obj.remove(), 5000);
        }
        
      }

      let baseHearts = (e) => {
        
        num++
        if (e !== undefined) {
          if (num % 3 === 0) {
            heart('', e, 0, 30);
          }    
        }}

      let baseFirefly = (e) => {
        let obj = document.createElement('div');
        num++;
        if (num % 50 === 0) {
          if (e !== undefined) {
            firefly(obj, e);  
          } 
          document.body.appendChild(obj);
          setTimeout(() => obj.remove(), 3000);
        }
        
      }


      let curFunc;

      chrome.runtime.sendMessage(undefined, 'check');

      chrome.runtime.onMessage.addListener((msg, _, sendRes) => {
        
        document.body.removeEventListener('mousemove', curFunc);
        
        switch(msg) {
              case 'giveBubble' :
              chrome.runtime.sendMessage(undefined, 'bubble');
              curFunc = base;
              break;
              case 'giveLetter' :
              chrome.runtime.sendMessage(undefined, 'letter');
              curFunc = baseLetter;
              break;
              case 'colorfulSquare' :
              chrome.runtime.sendMessage(undefined, 'cSquare');
              curFunc = baseSquare;
              break;
              case 'colofulO' :
              chrome.runtime.sendMessage(undefined, 'cO');
              curFunc = baseO;
              break;
              case 'giveSnowflake':
              chrome.runtime.sendMessage(undefined, 'snowflake');
              curFunc = baseSnowflake;
              break;
              case 'giveWaterWave':
                chrome.runtime.sendMessage(undefined, 'waterWave');
                curFunc = baseFirefly;
                break;
              case 'giveHeart':
                chrome.runtime.sendMessage(undefined, 'heart');
                curFunc = baseHearts;
                break;
              case 'giveLeaf':
                chrome.runtime.sendMessage(undefined, 'leaf');
                curFunc = baseLeafs;
                break;  
                case 'bubble' :
                curFunc = base;
                break;
              case 'letter':
                curFunc = baseLetter;
                break;
              case 'cSquare' :
                curFunc = baseSquare;
                break;
                case 'cO' :
                curFunc = baseO;
                break;
              case 'snowflake' :
                curFunc = baseSnowflake;
                break;
              case 'waterWave' :
                curFunc = baseFirefly;
                break;
              case 'heart' :
                curFunc = baseHearts;
                break;
              case 'leaf' :
                curFunc = baseLeafs;
                break;
                      
                
          }
          document.body.addEventListener('mousemove', curFunc)
      })
