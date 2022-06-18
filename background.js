chrome.runtime.onInstalled.addListener(() => {

  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
            
      })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }])     
  });

  chrome.contextMenus.create({
    "id": "tails-mouse-footpring-switch",
    "title": "STOP Extension"
  });

});

chrome.contextMenus.onClicked.addListener(() => {
  if(localStorage.type === 'stop') {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {

      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          name: localStorage.pointerName,
          path: localStorage.pointerPath,
          type: 'moving'})
    });
   
  } else {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {

      chrome.tabs.sendMessage(
        tabs[0].id,
        {type: 'stop'})
    });

  }
})

chrome.runtime.onMessage.addListener((msg) => {
console.log('background: ', msg)	
// load function for execute
	fetch('./functions/' + 'bubble' + '.js')
	.then((res) => res.text())
	.then((func) => {
// load js file for running event listener
	fetch('./test.js')
	.then((res1) => res1.text())
	.then((func1) => {
		
	console.log(func + func1)

    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
	      chrome.tabs.executeScript(
        tabs[0].id,
// code execute with executeScript method		      
        {code: func + func1} );
//        {file: './functions/' + 'bubble' + '.js'} );
//        {file: './functions/' + msg.name + '.js'} );
	})
	})
	})

/*	
  if (msg.type === 'moving') {
    localStorage.pointerName = msg.name;      
    localStorage.pointerPath = msg.path;
    localStorage.type = 'check';

    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.executeScript(
        tabs[0].id,
        {file: './functions1/' + 'execute' + '.js'} );
//        {file: './functions/' + msg.name + '.js'} );
    });
    
    chrome.contextMenus.update( "tails-mouse-footpring-switch", {"title": "STOP Extension"});

  } else if (msg.type === 'stop') {
    localStorage.type = 'stop';

    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.executeScript(
        tabs[0].id,
        {file: './functions/' + 'stop' + '.js'} );
    });

    chrome.contextMenus.update( "tails-mouse-footpring-switch", {"title": "START Extension"});

  } else if (msg.type === 'check') {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {              

      chrome.tabs.sendMessage(
        tabs[0].id,
        { name:localStorage.pointerName,
          path: localStorage.pointerPath,
	 	    type: localStorage.type === 'stop' ? 'stop' : 'moving',
          sender: 'background'}
      );

      chrome.pageAction.setIcon({
        path: localStorage.pointerPath,
        tabId: tabs[0].id});
    });
       
  }
   */ 
})
