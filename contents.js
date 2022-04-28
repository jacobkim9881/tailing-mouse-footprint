localStorage.mouseCounter = 0;
chrome.runtime.sendMessage(undefined,
  { type : 'check',
    sender: 'contents'}
);
    
chrome.runtime.onMessage.addListener((msg, _, sendRes) => {
console.log('contents.js: ',msg)        
  chrome.runtime.sendMessage(undefined,
    { name:msg.name,
      path: msg.path,
      type: msg.type,
      sender: 'contents'}
  );

});
