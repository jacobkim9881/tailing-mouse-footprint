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

let bubble = './images/bubble/buble32.png'
let letter = './images/letter/letter32.png'
//let bubble = document.getElementById('bubble');
//let letter = document.getElementById('letter');
let colorSquare = document.getElementById('colorfulSquare');
let colofulO = document.getElementById('colorfulO');
let snowflake = document.getElementById('snowflake');
let waterWave = document.getElementById('waterWave');
let heart = document.getElementById('heart');
let leaf = document.getElementById('leaf');

startPointerFunction('bubble', bubble);
startPointerFunction('letter', letter);
//getId('bubble').style.backgroundImage = url(bubble);

//letter.addEventListener('click', () => {
//  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
//    chrome.tabs.sendMessage(
//      tabs[0].id,
//      'giveLetter'
//    )
//    chrome.pageAction.setIcon({path: './images/letter/letter32.png',
//    tabId: tabs[0].id});
//  })
//})


colorSquare.addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      'colorfulSquare'
    );
    chrome.pageAction.setIcon({path: './images/csquare/colofulSquare16.png',
    tabId: tabs[0].id});
  })
})


colofulO.addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      'colofulO'
    );
      chrome.pageAction.setIcon({path: './images/co/colofulO16.png',
  tabId: tabs[0].id});
  })
})


snowflake.addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      'giveSnowflake'
    );
      chrome.pageAction.setIcon({path: './images/snow/snowflake32.png',
  tabId: tabs[0].id});
  })
})


waterWave.addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      'giveWaterWave'
    );
      chrome.pageAction.setIcon({path: './images/snow/snowflake32.png',
  tabId: tabs[0].id});
  })
})


heart.addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      'giveHeart'
    );
      chrome.pageAction.setIcon({path: './images/heart/heart32.png',
  tabId: tabs[0].id});
  })
})


leaf.addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      'giveLeaf'
    );
      chrome.pageAction.setIcon({path: './images/leaf/leaf32.png',
  tabId: tabs[0].id});
  })
})