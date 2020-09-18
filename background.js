chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                
            })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
         }])     
    });

});

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.name !== 'check') {
      localStorage.pointer.name = msg.name;      
      localStorage.pointer.path = msg.path;

      chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.executeScript(
          tabs[0].id,
          {file: './functions/' + msg.name + '.js'} );
      });
      
    } else {
            chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
              let path = '';
                switch (localStorage.pointer.name) {
                  case 'bubble':
                  path = './images/bubble/buble32.png';
                  break;
                  case 'letter':
                  path = './images/letter/letter32.png';
                  break;
                  case 'cSquare':
                  path = './images/csquare/colofulSquare16.png';
                  break;
                  case 'cO':
                  path = './images/co/colofulO16.png';
                  break;
                  case 'snowflake':
                  path = './images/snow/snowflake16.png';
                  break;  
                  case 'waterWave':
                    path = './images/snow/snowflake16.png';
                    break;
                  case 'heart':
                    path = './images/heart/heart16.png';
                    break;
                  case 'leaf':
                  path = './images/leaf/leaf16.png';
                  break;  
                } 
              chrome.tabs.sendMessage(
                  tabs[0].id,
                  { name:localStorage.pointer,
                    path: path,
                    sender: msg.sender + 'bg'}
                );
                chrome.pageAction.setIcon({
                  path: path,
                  tabId: tabs[0].id});
              });
       
    }
    
})