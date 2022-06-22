chrome.runtime.onInstalled.addListener(() => {

  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
            
      })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }])    
	  return
  });

  chrome.contextMenus.create({
    "id": "tails-mouse-footpring-switch",
    "title": "STOP Extension"
  });
  return
});

chrome.contextMenus.onClicked.addListener(() => {
chrome.storage.local.get(['msg'], function(res){
  if(res.msg.type === 'stop') {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {

      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          name: res.msg.name,
          path: res.msg.name,
          type: 'moving'})
	    return
    });
   
  } else {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {

      chrome.tabs.sendMessage(
        tabs[0].id,
        {
		type: 'stop',
		name: res.msg.name,
		path: res.msg.name
	})
	    return
    });

  }
	return
})
})

chrome.runtime.onMessage.addListener((msg) => {
  let msgObj;
  if (msg.type === 'moving') {
    msgObj = {
      name: msg.name,
      path: msg.path,
      type: 'check'
    }
    chrome.storage.local.set({msg: msgObj})

    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
console.log(tabs)
      chrome.scripting.executeScript(
        { target: {tabId: tabs[0].id},
        files: ['./functions/' + msg.name + '.js',
	       './eventHandler/'+ msg.name + '.js'
	] });
	    return

    });
    
    chrome.contextMenus.update( "tails-mouse-footpring-switch", {"title": "STOP Extension"});

  } else if (msg.type === 'stop') {
    msgObj = {
      type: 'stop',
      name: msg.name,
      path: msg.path	    
    }
    chrome.storage.local.set({msg: msgObj})

    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.scripting.executeScript(
        { target: { tabId : tabs[0].id},
        files: ['./functions/' + 'stop' + '.js'] });
	    return
    });

    chrome.contextMenus.update( "tails-mouse-footpring-switch", {"title": "START Extension"});

  } else if (msg.type === 'check') {

    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {             
	    console.log(tabs)
      chrome.storage.local.get(['msg'], function(res){
      chrome.tabs.sendMessage(
        tabs[0].id,
        { name: res.msg.name,
          path: res.msg.path,
	 	    type: res.msg.type === 'stop' ? 'stop' : 'moving',
          sender: 'background'}
      );
	      /*
      chrome.action.setIcon({
        path: res.msg.path,
        tabId: tabs[0].id});
	      */
      })
    });
       
  }
    return
})
