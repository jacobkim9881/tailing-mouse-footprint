localStorage.mouseCounter = 0;
chrome.runtime.sendMessage(undefined,
  { type : 'check',
    sender: 'contents'}
);
console.log('contents')    

function executeEvents(obj, name) {
localStorage.pointerName = name;	
 for (const [key, func] of Object.entries(obj)) {
    document.body.addEventListener(key, func);
console.log(func)
	 console.log(name)
	 console.log(key)
    chrome.runtime.onMessage.addListener((msg) => {
	    console.log(msg)
     msg.name !== name ? document.body.removeEventListener(key, func) : null;
    });
 }

}

executeEvents(functionObj[localStorage.pointerName], localStorage.pointerName);

chrome.runtime.onMessage.addListener((msg, _, sendRes) => {

for (const [key, val] of Object.entries(functionObj[msg.name])) {
  if (key !== 'mouse' && typeof val === 'function') {
  val();
  } else if( typeof val === 'object') { 
  executeEvents(val, msg.name);
  }
	console.log(key, val);
}
	

});
