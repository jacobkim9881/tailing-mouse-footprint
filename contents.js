let holdObj = document.createElement('div');

function rain(e) {
  let obj = document.createElement('div');
          
  x = Math.trunc(Math.random() * window.innerWidth);
  y = Math.trunc(Math.random() * window.innerHeight);
  obj.style.position = 'fixed';
  obj.style.top = y + 'px';
  obj.style.left = x + 'px';
  obj.style.width = 10 + 'px';
  obj.style.height = 200 + 'px';
  obj.style.borderLeft = '1px solid blue';
  obj.style.transform = 'rotate(-20deg)';
  //obj.animate([
  //  {height: '0px'},
  //  {height: '200px'}
  //], 50)
  document.body.appendChild(obj);
  setTimeout(() => obj.remove(), 100);
}

function leftRight(obj, e, formerX) {
  x = e.clientX;
  y = e.clientY;
  let hgt = 30;
  let changedX = x + hgt / 3;
  let changedY = y - hgt / 3; 
  let sinGp = Math.sin(num % 360) * 90;
  obj.style.position = 'fixed';
  obj.style.top = y + 'px';
  obj.style.left = x + 'px';
  obj.style.width = 10 + 'px';
  obj.style.height = 30 + 'px';
  obj.style.backgroundColor = 'green';

  
  //obj.animate([
  //  {transform: 'rotate(0deg)'},
  //  {transform: 'rotate(90deg)',
  //left : changedX + 'px',
  //top : changedY + 'px'},
  //  {transform: 'rotate(0deg)'},
  //        
  //], {
  //  duration: 1000,
  //  iterations: Infinity
  //})
}

function waterWave(obj, e) {
  x = Math.trunc(Math.random() * window.innerWidth);
  y = Math.trunc(Math.random() * window.innerHeight);
  let changedX = x - 1000;
  let changedY = y - 1000;
  obj.style.position = 'fixed';
  obj.style.top = y + 'px';
  obj.style.left = x + 'px';
  obj.style.border = '1px solid blue';
  obj.style.borderRadius = "50%";
  obj.animate([
    {width: 0 + 'px',
    height: 0 + 'px',
  top: y + 'px',
  left: x + 'px'},
    {width: 1000 + 'px',
    height: 1000 + 'px',
    top: changedY + 'px',
    left: changedX + 'px'}      
  ], 8000)
  
}

function leafs(obj, e) {
  x = e.clientX;
  y = e.clientY;
  let ran360 = Math.trunc(Math.random() * 360);
  let ran360Two = Math.trunc(Math.random() * 360);
  let changedY = Math.sin(num) * 10 + y;
  let bottomY = window.innerHeight - 30;
  let changedX = x + 10;
  obj.style.position = 'fixed';
  obj.style.width = 50 + 'px';
  obj.style.height = 50 + 'px';
  //obj.style.borderRadius = '50%';  
  obj.style.top = bottomY + 'px';
  obj.style.left = x + 'px';
  obj.animate([
    {top: y + 'px'},
    {top: bottomY + 'px'}        
  ], 8000)
  
}

function snowflake(obj, e) {
  x = e.clientX;
  y = e.clientY;
  let ran360 = Math.trunc(Math.random() * 360);
  let ran360Two = Math.trunc(Math.random() * 360);
  let changedY = Math.sin(num) * 10 + y;
  let bottomY = window.innerHeight - 30;
  let changedX = x + 10;
  obj.style.position = 'fixed';
  obj.style.width = 10 + 'px';
  obj.style.height = 10 + 'px';
  obj.style.borderRadius = '50%';  
  //obj.style.top = bottomY + 'px';
  obj.style.left = x + 'px';
  obj.style.backgroundImage = `radial-gradient(circle, hsl(0, 0%, 70%), hsl(0, 0%, 90%))`;  
  
  obj.animate([
    {top: y + 'px'},
    {top: bottomY + 'px'}        
  ], 8000)
  
}

function screwLine(obj, e, num, sin, formerX, formerY) {
  x = e.clientX + Math.trunc(Math.sin(e.clientY) * 30);
  y = e.clientY + Math.trunc(Math.sin(e.clientX) * 30);
  let changeY = y;
  obj.style.position = 'fixed';
  obj.style.width = 10 + 'px';
  obj.style.height = 10 + 'px';
  obj.style.borderRadius = '50%';  
  obj.style.top = changeY + 'px';
  obj.style.left = x + 'px';
  obj.style.backgroundImage = `radial-gradient(circle, hsl(0, 0%, 70%), hsl(0, 0%, 90%))`; 
}

function footprint(obj, e, num, formerX, formerY) {
  x = e.clientX;
  y = e.clientY;
  let changedX;
  let changedY;
  let numTen = (num / 10).toString();
  let numHead = numTen[numTen.length - 1];
  
  obj.style.position = 'fixed';
  obj.style.top = x + 'px';
  obj.style.left = y + 'px';

}
function giveBubble(obj, e) {  
    let ranXpos = Math.trunc(Math.random() * 10) + parseInt(e.clientX, 10);
    let ranYpos = Math.trunc(Math.random() * 10) + parseInt(e.clientY, 10);
    let ran10 = Math.trunc(Math.random() * 5) + 5;
    let ran20 = ranYpos - 30;
    obj.style.position = 'fixed';
    obj.style.top = ranYpos + 'px';
    obj.style.left = ranXpos + 'px';
    obj.style.width = ran10 + 'px';
    obj.style.height = ran10 + 'px';
    obj.style.backgroundImage = `linear-gradient(to bottom right, hsl(170, 100%, 50%), hsl(170, 100%, 0%)`;
    obj.style.borderRadius = '50%';  
    obj.animate([
      {top: ranYpos + 'px'}, 
      {top: ran20 + 'px'}
    ], 200)
  }

  function giveSquare(obj, e) {
    let ranXpos = Math.trunc(Math.random() * 10) + parseInt(e.clientX, 10);
    let ranYpos = Math.trunc(Math.random() * 10) + parseInt(e.clientY, 10);
    let ran10 = Math.trunc(Math.random() * 10) + 10;
    let ran360 = Math.trunc(Math.random() * 360);
    let ran360Two = Math.trunc(Math.random() * 360);
    obj.style.position = 'fixed';
    obj.style.top = ranYpos + 'px';
    obj.style.left = ranXpos + 'px';
    obj.style.width = ran10 + 'px';
    obj.style.height = ran10 + 'px';
    obj.style.backgroundImage = `linear-gradient(to bottom right, hsl(${ran360}, 100%, 50%), hsl(${ran360Two}, 100%, 50%)`;
    }

  function giveStyle(obj, e) {
    let ranXpos = Math.trunc(Math.random() * 10) + parseInt(e.clientX, 10);
    let ranYpos = Math.trunc(Math.random() * 10) + parseInt(e.clientY, 10);
    let ran10 = Math.trunc(Math.random() * 5) + 5;
    let ran360 = Math.trunc(Math.random() * 360);
    obj.style.position = 'fixed';
    obj.style.top = ranYpos + 'px';
    obj.style.left = ranXpos + 'px';
    obj.style.width = ran10 + 'px';
    obj.style.height = ran10 + 'px';
    obj.style.backgroundColor = `hsl(${ran360}, 100%, 50%)`;
    obj.style.borderRadius = '50%';
    }

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'

    function giveLetter(obj, e) {
      let ranXpos = Math.trunc(Math.random() * 10) + parseInt(e.clientX, 10);
      let ranYpos = Math.trunc(Math.random() * 10) + parseInt(e.clientY, 10);
      let ran15 = Math.trunc(Math.random() * 20) + 5;
      let ran360 = Math.trunc(Math.random() * 360);
      let ranAlpha = Math.trunc(Math.random() * alphabet.length);
      obj.style.position = 'fixed';
      obj.style.top = ranYpos + 'px';
      obj.style.left = ranXpos + 'px';
      obj.innerHTML = alphabet[ranAlpha];
      obj.style.fontSize = ran15 + 'px';
      //obj.style.color = `hsl(${ran360}, 100%, 50%)`;
      }

      let num = 1;
      let formerX;
      let formerY;

      let base = (e) => {
        let obj = document.createElement('div');
        
        //let lessNum = num - 1;        
        //let formerObj = document.getElementById('particle' + lessNum);        
        //if (formerObj !== null) {
        //  setTimeout(() => document.getElementById('particle' + lessNum).remove(), 200);
        //}                
        obj.setAttribute('id', 'particle' + num);
        num++
        if (e !== undefined) {
          giveBubble(obj, e);  
        }
        document.body.appendChild(obj);
        setTimeout(() => obj.remove(), 200);
      }

      let baseSquare = (e) => {
        let obj = document.createElement('div');
        
        obj.setAttribute('id', 'particle' + num);
        num++
        if (e !== undefined) {
          giveSquare(obj, e);  
        }
        document.body.appendChild(obj);
        setTimeout(() => obj.remove(), 200);
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

      var head = document.getElementsByTagName('HEAD')[0];

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
        num++
          if (num % 10 === 0) {
          if (e !== undefined) {
            snowflake(obj, e);  
          } 
          document.body.appendChild(obj);
          //setTimeout(() => obj.remove(), 500);
        }
        
      }

      let baseFootprint = (e) => {
        if (num % 50 === 0) {
          let obj = document.createElement('div');
        
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
      }

      let baseScrewLine = (e) => {
        num++;
        if (num % 1 === 0) {
          let sin = Math.trunc(Math.sin(num) * 10);
          let obj = document.createElement('div');
          
          if (e !== undefined) {
            screwLine(obj, e, num, -sin);
          } 
          document.body.appendChild(obj);
          setTimeout(() => {
            obj.remove();
          }, 200);
        }
      }

      let baseLeafs = (e) => {
        let obj = document.createElement('img');
        num++;
        //let test = document.createElement('link');
        //test.rel = 'stylesheet';
        //test.type = 'text/css'
        //document.head.appendChild(test);
        if (num % 10 === 0) {
          if (e !== undefined) {
            leafs(obj, e);  
          } 
          document.body.appendChild(obj);
          //setTimeout(() => obj.remove(), 500);
        }
        
      }

      let baseWaterWave = (e) => {
        num++;
        if (num % 50 === 0) {

          let obj = document.createElement('img');
        
          if (num % 10 === 0) {
            if (e !== undefined) {
              waterWave(obj, e);  
            } 
            document.body.appendChild(obj);
            //setTimeout(() => obj.remove(), 500);
          }
        }
      }

      //let objt = document.createElement('div');
      //objt.style.position = 'fixed';
      //objt.style.top = 500 + 'px';
      //objt.style.left = 500 + 'px';
      //objt.style.width = 20 + 'px';
      //objt.style.height = 50 + 'px';
      //objt.style.backgroundColor = 'green';
//
      //let objt1 = document.createElement('div');
      //objt1.style.position = 'fixed';
      //objt1.style.top = 500 - 16.666 + 'px';
      //objt1.style.left = 500 + 16.666 + 'px';
      //objt1.style.width = 20 + 'px';
      //objt1.style.height = 50 + 'px';
      //objt1.style.backgroundColor = 'green';
      //objt1.style.transform = 'rotate(90deg)';
//
      //document.body.appendChild(objt);
      //document.body.appendChild(objt1);
            
      let baseLeftRight = (e) => {
        num++;
        if (num % 1 === 0) {

          //let obj = document.createElement('div');
          if (num % 1 === 0) {
            if (e !== undefined) {
              leftRight(holdObj, e);  
            } 
            document.body.appendChild(holdObj);
            //setTimeout(() => obj.remove(), 500);
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

      let curFunc;

      chrome.runtime.sendMessage(undefined, 'check');

      chrome.runtime.onMessage.addListener((msg, _, sendRes) => {
          switch(msg) {
              case 'giveBubble' :
              document.body.removeEventListener('mousemove', curFunc);
              chrome.runtime.sendMessage(undefined, 'bubble');
              curFunc = base;
              break;
              case 'giveLetter' :
              document.body.removeEventListener('mousemove', curFunc);
              chrome.runtime.sendMessage(undefined, 'letter');
              curFunc = baseLetter;
              break;
              case 'colorfulSquare' :
              document.body.removeEventListener('mousemove', curFunc);
              chrome.runtime.sendMessage(undefined, 'cSquare');
              curFunc = baseSquare;
              break;
              case 'colofulO' :
              document.body.removeEventListener('mousemove', curFunc);
              chrome.runtime.sendMessage(undefined, 'cO');
              curFunc = baseO;
              break;
              case 'giveSnowflake':
              document.body.removeEventListener('mousemove', curFunc);
              chrome.runtime.sendMessage(undefined, 'snowflake');
              curFunc = baseSnowflake;
              break;
              case 'giveWaterWave':
                document.body.removeEventListener('mousemove', curFunc);
                chrome.runtime.sendMessage(undefined, 'waterWave');
                curFunc = baseRain;
                break;
              case 'bubble' :
                document.body.removeEventListener('mousemove', curFunc);
                curFunc = base;
                break;
              case 'letter':
                document.body.removeEventListener('mousemove', curFunc);
                curFunc = baseLetter;
                break;
              case 'cSquare' :
                document.body.removeEventListener('mousemove', curFunc);
                curFunc = baseSquare;
                break;
                case 'cO' :
                document.body.removeEventListener('mousemove', curFunc);
                curFunc = baseO;
                break;
              case 'snowflake' :
                document.body.removeEventListener('mousemove', curFunc);
                curFunc = baseSnowflake;
                break;
              case 'waterWave' :
                document.body.removeEventListener('mousemove', curFunc);
                curFunc = baseRain;
                break;
                      
                
          }
          document.body.addEventListener('mousemove', curFunc)
      })
//      chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
//    chrome.tabs.onMessage.addListener((msg, _, sendRes) => {
//        alert('sssfdd')
//    }
//    )
//  })