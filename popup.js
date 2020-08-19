let bubble = document.getElementById('bubble');

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

let letter = document.getElementById('letter');

letter.addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      'giveLetter'
    )
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

//chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
//  chrome.tabs.executeScript(
//      tabs[0].id,
//      {file: `test.js`}
//  )  
//})