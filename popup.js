function getId(targetId) {
  return document.getElementById(targetId);
}

function setButtonImage(targetId, targetUrl) {
  getId(targetId).style.backgroundImage = `url(${targetUrl})`;
  return
}

function addClickEvent(func, targetId, targetUrl, type) {
  func(targetId).addEventListener('click', () => {
    
    let stopButton = getId('stop');
    if (stopButton.innerHTML === 'START Extension') {
	  stopButton.innerHTML= 'STOP Extension'};
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          name: targetId, 
          path: targetUrl, 
	  type: type,
          sender: 'popup'}
      );
      
      chrome.runtime.onMessage.addListener((msg, _, sendRes) => {
        chrome.pageAction.setIcon({path: targetUrl,
          tabId: tabs[0].id
        });
      });
      
    });

  });
  return;  
}

function startPointerFunction(targetId, targetUrl, type) {
  getId(targetId);
  setButtonImage(targetId, targetUrl);
  addClickEvent(getId, targetId, targetUrl, type);
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
          name: targetId,
          path: '',
          type: buttonName === 'STOP Extension' ? 'check' : targetId,
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
let stop = './images/icon32.png'
startPointerFunction('bubble', bubble, 'moving');
startPointerFunction('letter', letter, 'moving');
triggerStop(getId, 'stop');
