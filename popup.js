let icons = document.getElementById('icons');

function createButton(id) {

}

function buttonElement(targetId) {
//  return document.getElementById(targetId + '-button');
let buttonTag = document.createElement('button')
, spanTag = document.createElement('span');	
 buttonTag.id = targetId + '-button';
 buttonTag.className = 'mousemove';	
 spanTag.className = 'buttonDiv';
 spanTag.appendChild(buttonTag);
 icons.appendChild(spanTag);	
 return buttonTag	
}

function setButtonImage(targetId, targetUrl) {
  buttonElement(targetId).style.backgroundImage = `url(${targetUrl})`;
  return
}

function startShortcut(targetId) {
  let funcName = 'shortcut_' + targetId;	
  startAnimation(targetId);
}

function addClickEvent(ele, targetId, type, targetUrl) {
//let ele = document.getElementById(targetId + '-button');
	console.log(ele)
  ele.addEventListener('click', () => {
    
    let stopButton = buttonElement('stop');
    if (stopButton.innerHTML === 'START Extension') {
	  stopButton.innerHTML= 'STOP Extension'};
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          name: targetId, 
//          path: targetUrl, 
	  type: type,
  	  eventName: ele.className ,
          isItOn: true,
          sender: 'popup'}
      );
      /*
      chrome.runtime.onMessage.addListener((msg, _, sendRes) => {
        chrome.pageAction.setIcon({path: targetUrl,
          tabId: tabs[0].id
        });
      });
     */ 
    });

  });
  return;  
}

function addHoverEventInPopup(ele, targetId, cnt) {
//console.log(functionObj)
//console.log(ele)

let eObj = {
"clientX": ele.offsetLeft + 50,
"clientY": ele.offsetTop + 38	
}
console.log(eObj)
let aniEvent = setInterval(() => {
    functionObj[targetId].mouse.mousemove(eObj)	   
  }, 200)	 
  //setInterval, addEvent, removeEvent
	
		console.log(functionObj[targetId].mouse.mousemove) 
	ele.addEventListener('mouseover', () => {
		console.log('moved', targetId)
		ele.addEventListener('mousemove', functionObj[targetId].mouse.mousemove);
    clearInterval(aniEvent)
	});

		//functionObj[targetId].mouse.mousemove) 
  ele.addEventListener('mouseout', (e) => {  
     ele.removeEventListener('mousemove', functionObj[targetId].mouse.mousemove);
     aniEvent = setInterval(() => {
      functionObj[targetId].mouse.mousemove(eObj)	   
    }, 200)	 
  })
}

function startPointerFunction(targetId, type, targetUrl) {
console.log(targetId)

  let buttonEle = buttonElement(targetId);
	console.log(buttonEle)
//  setButtonImage(targetId, targetUrl);
  addClickEvent(buttonEle, targetId, type); 
	console.log(targetId)
  addHoverEventInPopup(buttonEle, targetId);
  return;
}

function triggerStop(func, targetId) {
  func(targetId).addEventListener('click', () => {
    
    let buttonName = ''
    if (targetId === 'stop') buttonName = stopEvent(func, targetId);

    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {

      chrome.tabs.sendMessage(
        tabs[0].id,
        {
	  name: buttonName === 'STOP Extension' ? localStorage.pointerName : targetId,
          path: buttonName === 'STOP Extension' ? localStorage.pointerPath : '',
          type: buttonName === 'STOP Extension' ? 'moving' : targetId,
          sender: 'popup'}
      );

    });
	  
  });
}

function stopEvent(func, targetId) {
  let stopButton =  func(targetId);
  stopButton.innerHTML === 'STOP Extension' ? 
    stopButton.innerHTML = 'START Extension' : 
    stopButton.innerHTML = 'STOP Extension';
  return stopButton.innerHTML;
}


for (const [key, val] of Object.entries(pngPaths)) {
  createButton(key)	
  startPointerFunction(key, 'moving')
};
/*
startPointerFunction('bubble', bubble, 'moving');
startPointerFunction('letter', letter, 'moving');
startPointerFunction('snowflake', snowflake, 'moving');
startPointerFunction('heart', heart, 'moving');
startPointerFunction('colorfulBall', colorfulBall, 'moving');
startPointerFunction('bunny', bunny, 'moving');
startPointerFunction('dna', dna, 'moving');
startPointerFunction('card', card, 'moving');
startPointerFunction('atom', atom, 'moving');
startPointerFunction('petal', petal, 'moving');
startPointerFunction('float', float, 'moving');
*/
triggerStop(buttonElement, 'stop');

if (localStorage.type === 'stop') buttonElement('stop').innerHTML = 'START Extension';
