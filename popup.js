let changeColor = document.getElementById('changeColor');

changeColor.addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      'giveBubble'
    )
  })
})


//chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
//  chrome.tabs.executeScript(
//      tabs[0].id,
//      {file: `test.js`}
//  )  
//})