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

  if (msg.type === 'moving') {
      localStorage.pointerName = msg.name;      
      localStorage.pointerPath = msg.path;
      localStorage.type = 'check';

      chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.executeScript(
          tabs[0].id,
          {file: './functions/' + msg.name + '.js'} );
      });
      
    } else if (msg.type === 'stop') {
      localStorage.type = 'stop';

      chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.executeScript(
          tabs[0].id,
          {file: './functions/' + msg.name + '.js'} );
      });

    } else if (msg.type === 'check') {
            chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {              

              chrome.tabs.sendMessage(
                  tabs[0].id,
                  { name:localStorage.pointerName,
                    path: localStorage.pointerPath,
	 	    type: localStorage.type,
                    sender: 'background'}
                );

                chrome.pageAction.setIcon({
                  path: localStorage.pointerPath,
                  tabId: tabs[0].id});
              });
       
    }
    
})
