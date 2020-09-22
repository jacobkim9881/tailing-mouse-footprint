        chrome.runtime.sendMessage(undefined,
          {name:'check', sender: 'contents'}
        );
    

      chrome.runtime.onMessage.addListener((msg, _, sendRes) => {
        
        chrome.runtime.sendMessage(undefined,
          { name:msg.name,
            path: msg.path,
            sender: 'contents'}
        );

      });
