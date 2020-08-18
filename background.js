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
                )
              })
            break;
        default :
        
        break;
            
      }
})