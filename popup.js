function getId(targetId) {
  return document.getElementById(targetId);
}

function setButtonImage(targetId, targetUrl) {
  getId(targetId).style.backgroundImage = `url(${targetUrl})`;
  return
}

function addClickEvent(func, targetId, targetUrl) {
  func(targetId).addEventListener('click', () => {
  
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          name: targetId, 
          path: targetUrl, 
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

function startPointerFunction(targetId, targetUrl) {
  getId(targetId);
  setButtonImage(targetId, targetUrl);
  addClickEvent(getId, targetId, targetUrl);
  return;
}

let bubble = './images/bubble/bubble32.png'
let letter = './images/letter/letter32.png'

startPointerFunction('bubble', bubble);
startPointerFunction('letter', letter);