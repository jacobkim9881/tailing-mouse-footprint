function giveBubble(obj, e) {  
    let ranXpos = Math.trunc(Math.random() * 10) + parseInt(e.clientX, 10);
    let ranYpos = Math.trunc(Math.random() * 10) + parseInt(e.clientY, 10);
    let ran10 = Math.trunc(Math.random() * 5) + 5;
    let ran360 = Math.trunc(Math.random() * 360);
    obj.style.position = 'fixed';
    obj.style.top = ranYpos + 'px';
    obj.style.left = ranXpos + 'px';
    obj.style.width = ran10 + 'px';
    obj.style.height = ran10 + 'px';
    obj.style.backgroundImage = `linear-gradient(to bottom right, hsl(170, 100%, 50%), hsl(170, 100%, 0%)`;
    obj.style.borderRadius = '50%';  
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

      let base = (e) => {
        let obj = document.createElement('div');
        
        let lessNum = num - 1;        
        let formerObj = document.getElementById('particle' + lessNum);        
        if (formerObj !== null) {
          setTimeout(() => document.getElementById('particle' + lessNum).remove(), 200);
        }                
        obj.setAttribute('id', 'particle' + num);
        num++
        if (e !== undefined) {
          giveBubble(obj, e);  
        }
        document.body.appendChild(obj);
      }

      let baseSquare = (e) => {
        let obj = document.createElement('div');
        
        let lessNum = num - 1;        
        let formerObj = document.getElementById('particle' + lessNum);        
        if (formerObj !== null) {
          setTimeout(() => document.getElementById('particle' + lessNum).remove(), 200);
        }                
        obj.setAttribute('id', 'particle' + num);
        num++
        if (e !== undefined) {
          giveSquare(obj, e);  
        }
        document.body.appendChild(obj);
      }

      let baseO = (e) => {
        let obj = document.createElement('div');
        
        let lessNum = num - 1;        
        let formerObj = document.getElementById('particle' + lessNum);        
        if (formerObj !== null) {
          setTimeout(() => document.getElementById('particle' + lessNum).remove(), 200);
        }                
        obj.setAttribute('id', 'particle' + num);
        num++
        if (e !== undefined) {
          giveStyle(obj, e);  
        }
        document.body.appendChild(obj);
      }

      let baseLetter = (e) => {
        let obj = document.createElement('div');
        
        let lessNum = num - 1;        
        let formerObj = document.getElementById('particle' + lessNum);        
        if (formerObj !== null) {
          setTimeout(() => document.getElementById('particle' + lessNum).remove(), 200);
        }                
        obj.setAttribute('id', 'particle' + num);
        num++
        if (e !== undefined) {
          giveLetter(obj, e);  
        }
        document.body.appendChild(obj);
      }


      document.body.addEventListener('mousemove', base);

      let curFunc = base;

      chrome.runtime.onMessage.addListener((msg, _, sendRes) => {
          switch(msg) {
              case 'giveBubble' :
              document.body.removeEventListener('mousemove', curFunc);
              curFunc = base;
              break;
              case 'giveLetter' :
              document.body.removeEventListener('mousemove', curFunc);
              curFunc = baseLetter;
              break;
              case 'colorfulSquare' :
              document.body.removeEventListener('mousemove', curFunc);
              curFunc = baseSquare;
              break;
              case 'colofulO' :
              document.body.removeEventListener('mousemove', curFunc);
              curFunc = baseO;
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