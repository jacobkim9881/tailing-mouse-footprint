let bubble = document.getElementById('bubble');

bubble.addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      'giveBubble'
    )
  })
})

let letter = document.getElementById('letter');

letter.addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      'giveLetter'
    )
  })
})

let colorSquare = document.getElementById('colorful square');

colorSquare.addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      'colorfulSquare'
    )
  })
})

let colofulO = document.getElementById('colorful o');

colofulO.addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      'colofulO'
    )
  })
})

//chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
//  chrome.tabs.executeScript(
//      tabs[0].id,
//      {file: `test.js`}
//  )  
//})