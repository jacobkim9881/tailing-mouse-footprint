document.body.addEventListener('mousemove', mouseEventCoins);

chrome.runtime.onMessage.addListener((msg) => {
document.body.removeEventListener('mousemove', mouseEventCoins);
deleteObjsCoins();	
});
