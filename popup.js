function buttonElement(targetId) {
  return document.getElementById(targetId);
}

function setButtonImage(targetId, targetUrl) {
  buttonElement(targetId).style.backgroundImage = `url(${targetUrl})`;
  return
}

function addClickEvent(func, targetId, targetUrl, type) {
  func(targetId).addEventListener('click', () => {
    
    let stopButton = buttonElement('stop');
    if (stopButton.innerHTML === startExtension) {
	  stopButton.innerHTML= stopExtension};
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
	    for (let i = 0; i <= tabs.length; i++) {
      chrome.tabs.sendMessage(
        tabs[i].id,
        {
          name: targetId, 
          path: targetUrl, 
	  type: type,
  	  eventName: func(targetId).className ,
          isItOn: true,
          sender: 'popup'}
      );
      
      chrome.runtime.onMessage.addListener((msg, _, sendRes) => {
        chrome.action.setIcon({path: targetUrl,
          tabId: tabs[i].id
        });
      });
    } 
    });

  });
  return;  
}

function startPointerFunction(targetId, targetUrl, type) {
  buttonElement(targetId);
  setButtonImage(targetId, targetUrl);
  addClickEvent(buttonElement, targetId, targetUrl, type);
  return;
}

function triggerStop(func, targetId) {
  func(targetId).addEventListener('click', () => {
 

    let buttonName = ''
    if (targetId === 'stop') buttonName = stopEvent(func, targetId);

    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {

	    for (let i = 0; i <= tabs.length; i++) {
      chrome.storage.local.get(['msg'], function(res){
        //	      console.log(res)
        //	      console.log(targetId)
        chrome.tabs.sendMessage(
          tabs[i].id,
          {
	  name: res.msg.name,
            path: res.msg.path,
            type: buttonName !== stopExtension ? targetId : 'moving',
            sender: 'popup'}
        );
      })
    }
    });
	  
  });
}

function stopEvent(func, targetId) {
  let stopButton =  func(targetId);
  stopButton.innerHTML === stopExtension ? 
    stopButton.innerHTML = startExtension : 
    stopButton.innerHTML = stopExtension
  return stopButton.innerHTML;
}

function stampCounter() {

  chrome.storage.local.get(['advertised'], function(res1) { 
    chrome.storage.local.get(['stamp'], function(res) { 
      //console.log(res)
      let stamps = res.stamp ? Object.keys(res.stamp) : []
        , advertised = res1.advertised
        , dayCount = 3	
        , ratingBtnTextTag = document.querySelector('#rating h4')
        , ratingBtn = document.getElementById('rating')
      //	console.log(stamps)
      //	console.log(advertised)
      //	console.log(advertised === undefined)
      if (stamps.length < dayCount) {	
        let lastStamp = stamps[stamps.length -1]	
        let aDay = 1000 * 60 * 60 * 24
        today = new Date()	
        //console.log(lastStamp)
        lastStamp = Date.parse(lastStamp)	
        //console.log(lastStamp + aDay) 
        //console.log(today.getTime())
        //	console.log(lastStamp)
        let aDayOver = lastStamp + aDay < today.getTime() || isNaN(lastStamp) || lastStamp === undefined 	
        let stampObj =  isNaN(lastStamp) ? {stamp : {}} : res	
        //	console.log(aDayOver)
        if (aDayOver) {
          stampObj.stamp[today] = 1	
          //	console.log(stampObj)
          chrome.storage.local.set(stampObj)
        }
      } else if(stamps.length >= dayCount && !advertised) {

        const askQuestion = chrome.i18n.getMessage('askQuestion')
        const ratingQuestion = chrome.i18n.getMessage('ratingQuestion')
          , ratingBtnText = chrome.i18n.getMessage('ratingBtn')

	     ratingBtn.style.display = 'block'	 
        chrome.storage.local.set({advertised: true})
        gradationBtn()

        ratingBtnTextTag.innerText = askQuestion
	      console.log(ratingQuestion)
        let splited = ratingQuestion.split('\n') 

        setTimeout(() => {
          ratingBtnTextTag.innerText = splited[0] 
        }, 2000)

	     setTimeout(() => {
          ratingBtnTextTag.innerText = splited[1]
	     }, 4000)

	      setTimeout(() => {
          ratingBtnTextTag.innerText = ratingBtnText 
        }, 6000)

        /*
        if (confirm(askQuestion) === true) {
          alert(ratingQuestion)
          ratingBtn.style.display = 'block'	 
          chrome.storage.local.set({advertised: true})
          gradationBtn()
        } else {
          chrome.storage.local.set({stamp : {}})
        }
*/
      } else if(advertised) {
        //	console.log(advertised)
        ratingBtn.style.display = 'block'	 
        gradationBtn()
      }
      return
    })
  })
}

function gradationBtn() {
  let ratingH4 = document.getElementById('rating-h4')
  let grad1 = 1	

  ratingH4.style.color = 'white'	

  let ratingGradation = setInterval(() => {
    ratingH4.style.backgroundImage = `linear-gradient(hsl(${grad1}, 100%, 50%) , hsl(${grad1 + 30}, 100%, 50%))`
    ratingH4.style.boxShadow = `0.3rem 0.3rem 0.6rem hsl(${grad1}, 100%, 50%), -0.2rem -0.2rem 0.5rem #FFFFFF`

    grad1 = (grad1 + 1) % 360	
  }, 50)

  chrome.storage.local.get(['rating-visited'], function(res) { 
    //console.log(res)
    if (res['rating-visited']) {
      clearInterval(ratingGradation)
      ratingH4.style.color = '#383838'	
    }
  })
  ratingH4.onclick = function() {
    //console.log('clicked')
    chrome.storage.local.set({["rating-visited"] : true})
  }
  return
}

function setInnerText() {
  const title = document.getElementById('title-ext')
    , ratingBtn = document.getElementById('rating-h4')
    , stopBtn = document.getElementById('stop')
    , stopExtension = chrome.i18n.getMessage('stopExtension')
    , popupTitle = chrome.i18n.getMessage('popupTitle')
    , ratingBtnText = chrome.i18n.getMessage('ratingBtn')

  ratingBtn.innerText = ratingBtnText	
  title.innerText = popupTitle
  stopBtn.innerText = stopExtension
  return	
}

setInnerText()
stampCounter()

const stopExtension = chrome.i18n.getMessage('stopExtension')
const startExtension = chrome.i18n.getMessage('startExtension')

let targets = [ // add new feature name here 
  'bubble', 'letter', 'snowflake', 'heart', 'heart1', 
  'colorfulBall', 'strawblueberry', 'bunny', 'dna', 'card', 
  'atom', 'petal', 'float', 'springCooler', 'colorSpring', 
  'coins', 'digital', 'particleMagnet', 
  'rainbow', 'warpWhite', 'warpBlack', 'warpRainbow'
]
for (let i = 0; i < targets.length; i++ ){

  let path = `./images/${targets[i]}/${targets[i]}32.png`

  startPointerFunction(targets[i], path, 'moving');
}
triggerStop(buttonElement, 'stop');

chrome.storage.local.get(['msg'], function(res){
//  console.log(Object.keys(res).length)
  if (Object.keys(res).length === 0) return; 
  if(res.msg.type === 'stop') buttonElement('stop').innerHTML = startExtension;

})

