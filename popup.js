function buttonElement(targetId) {
  return document.getElementById(targetId);
}

function setButtonImage(targetId, targetUrl) {
  buttonElement(targetId).style.backgroundImage = `url(${targetUrl})`;
  return
}

function startShortcut(targetId) {
  let funcName = 'shortcut_' + targetId;	
  startAnimation(targetId);
}

function addClickEvent(func, targetId, targetUrl, type) {
  func(targetId).addEventListener('click', () => {
    
    let stopButton = buttonElement('stop');
    if (stopButton.innerHTML === 'START Extension') {
	  stopButton.innerHTML= 'STOP Extension'};
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          name: targetId, 
          path: targetUrl, 
	  type: type,
  	  eventName: func(targetId).className ,
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
  ele.addEventListener('mouseover', (e) => {
	  console.log('overred');
  targetId ? animationObj[targetId]() : null;
  })
  ele.addEventListener('mouseout', (e) => {
  
  })	
}

function startPointerFunction(targetId, targetUrl, type) {
  let buttonEle = buttonElement(targetId);
//  setButtonImage(targetId, targetUrl);
	console.log(animationObj[targetId])
  animationObj[targetId]();	
  addClickEvent(buttonElement, targetId, targetUrl, type);  
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

let bubble = './images/bubble/bubble32.png'
let letter = './images/letter/letter32.png'
let snowflake = './images/snow/snowflake32.png'
let heart = './images/heart/heart32.png'
let colorfulBall = './images/co/colorfulBall32.png'
let bunny = './images/bunny/bunny32.png';
let dna = './images/dna/dna32.png';
let card = './images/card/card32.png';
let atom = './images/atom/atom32.png';
let petal = './images/petal/petal32.png';
let float = './images/float/float32.png';
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
triggerStop(buttonElement, 'stop');

if (localStorage.type === 'stop') buttonElement('stop').innerHTML = 'START Extension';
