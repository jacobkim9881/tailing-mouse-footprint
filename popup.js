function buttonElement(targetId) {
  return document.getElementById(targetId);
}

function setButtonImage(targetId, targetUrl) {
  buttonElement(targetId).style.backgroundImage = `url(${targetUrl})`;
  return
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
      
      chrome.runtime.onMessage.addListener((msg, _, sendRes) => {
        chrome.action.setIcon({path: targetUrl,
          tabId: tabs[0].id
        });
      });
      
    });

  });
  return;  
}

function startPointerFunction(targetId, targetUrl, type) {
  buttonElement(targetId);
  setButtonImage(targetId, targetUrl);
  addClickEvent(buttonElement, targetId, targetUrl, type);
  return;
}

function triggerStop(func, targetId) {
  func(targetId).addEventListener('click', () => {
 

    let buttonName = ''
    if (targetId === 'stop') buttonName = stopEvent(func, targetId);

    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {

      chrome.storage.local.get(['msg'], function(res){
	      console.log(res)
	      console.log(targetId)
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
	  name: res.msg.name,
          path: res.msg.path,
          type: buttonName !== 'STOP Extension' ? targetId : 'moving',
          sender: 'popup'}
      );
      })
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
let heart1 = './images/heart1/heart132.png'
let colorfulBall = './images/co/colorfulBall32.png'
let strawblueberry = './images/strawblueberry/strawblueberry32.png'
let bunny = './images/bunny/bunny32.png';
let dna = './images/dna/dna32.png';
let card = './images/card/card32.png';
let atom = './images/atom/atom32.png';
let petal = './images/petal/petal32.png';
let float = './images/float/float32.png';
let springCooler = './images/spring/springCooler32.png';
let colorSpring = './images/colorSpring/colorSpring32.png';
let coins = './images/coins/coins32.png';
startPointerFunction('bubble', bubble, 'moving');
startPointerFunction('letter', letter, 'moving');
startPointerFunction('snowflake', snowflake, 'moving');
startPointerFunction('heart', heart, 'moving');
startPointerFunction('heart1', heart1, 'moving');
startPointerFunction('colorfulBall', colorfulBall, 'moving');
startPointerFunction('strawblueberry', strawblueberry, 'moving');
startPointerFunction('bunny', bunny, 'moving');
startPointerFunction('dna', dna, 'moving');
startPointerFunction('card', card, 'moving');
startPointerFunction('atom', atom, 'moving');
startPointerFunction('petal', petal, 'moving');
startPointerFunction('float', float, 'moving');
startPointerFunction('springCooler', springCooler, 'moving');
startPointerFunction('colorSpring', colorSpring, 'moving');
startPointerFunction('coins', coins, 'moving');
triggerStop(buttonElement, 'stop');

      chrome.storage.local.get(['msg'], function(res){
	if(res.msg.type === 'stop') buttonElement('stop').innerHTML = 'START Extension';

console.log(res)
      })
