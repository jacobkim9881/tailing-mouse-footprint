let changeColor = document.getElementById('changeColor');

changeColor.onClick = () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: console.log('hello')}
      )  
    })
}
