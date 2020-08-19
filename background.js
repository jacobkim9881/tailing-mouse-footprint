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
    switch (msg) {
        case 'bubble':
            localStorage.pointer = 'bubble'   
          break;
        case 'letter':
            localStorage.pointer = 'letter'
          break;
        case 'cSquare':
            localStorage.pointer = 'cSquare'
          break;
        case 'cO':
            localStorage.pointer = 'cO'
          break;
        case 'check':
            chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
                chrome.tabs.sendMessage(
                  tabs[0].id,
                  localStorage.pointer
                );
                let path = '';
                switch (localStorage.pointer) {
                  case 'bubble':
                  path = './images/bubble/buble32.png';
                  break;
                  case 'cSquare':
                  path = './images/csquare/colofulSquare16.png';
                  break;
                  case 'cO':
                  path = './images/co/colofulO16.png';
                  break;  
                }
                chrome.pageAction.setIcon({
                  path: path,
                  tabId: tabs[0].id});
              });
            break;
        default :
        
        break;
            
      }
})