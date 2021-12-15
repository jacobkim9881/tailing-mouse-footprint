localStorage.mouseCounter = 0;
/*
chrome.runtime.sendMessage(undefined,
  { type : 'check',
    sender: 'contents'}
);
*/
console.log('contents')    

console.log(functionObj[localStorage.pointerName])
console.log(localStorage.pointerName)

executeObjFunc(localStorage.pointerName)

chrome.runtime.onMessage.addListener((msg, _, sendRes) => {
console.log(msg)
executeObjFunc(msg.name)
	

});
