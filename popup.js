function getId(targetId) {
  return document.getElementById(targetId);
}

let bubble = document.getElementById('bubble');
let letter = document.getElementById('letter');
bubble.addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      'giveBubble'
    );
    chrome.pageAction.setIcon({path: './images/bubble/buble32.png',
  tabId: tabs[0].id
});
  });
})


letter.addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      'giveLetter'
    )
    chrome.pageAction.setIcon({path: './images/letter/letter32.png',
    tabId: tabs[0].id});
  })
})

let colorSquare = document.getElementById('colorfulSquare');

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

let colofulO = document.getElementById('colorfulO');

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

let snowflake = document.getElementById('snowflake');

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

let waterWave = document.getElementById('waterWave');

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

let heart = document.getElementById('heart');

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

let leaf = document.getElementById('leaf');

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