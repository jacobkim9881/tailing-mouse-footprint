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

let targets = [ // add new feature name here 
		'bubble', 'letter', 'snowflake', 'heart', 'heart1', 
		'colorfulBall', 'strawblueberry', 'bunny', 'dna', 'card', 
		'atom', 'petal', 'float', 'springCooler', 'colorSpring', 
		'coins', 'digital', 'particleMagnet', 'rainbow'
		]
for (let i = 0; i < targets.length; i++ ){

let path = `./images/${targets[i]}/${targets[i]}32.png`

startPointerFunction(targets[i], path, 'moving');
}
triggerStop(buttonElement, 'stop');

      chrome.storage.local.get(['msg'], function(res){
	if(res.msg.type === 'stop') buttonElement('stop').innerHTML = 'START Extension';

console.log(res)
      })
