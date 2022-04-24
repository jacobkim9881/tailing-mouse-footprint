function buttonElement(targetId) {
  return document.getElementById(targetId);
}

function setButtonImage(targetId, targetUrl) {
  buttonElement(targetId).style.backgroundImage = `url(${targetUrl})`;
  return
}

function addClickEvent(func, targetId, targetUrl, type) {
  let reqUrl = 'http:localhost:80/vote/cast'	
  let account = '1';	
  func(targetId).addEventListener('click', () => {
    
    let stopButton = buttonElement('stop');
    if (stopButton.innerHTML === 'START Extension') {
	  stopButton.innerHTML= 'STOP Extension'};
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      
      chrome.tabs.sendMessage(
        tabs[0].id,
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
          tabId: tabs[0].id
        });
      });
      
    });
    chrome.storage.sync.set({name: targetId}, async function() {
      console.log(JSON.stringify(reqData))	
	  console.log('Value is set to ' + targetId);
      console.log(reqData);


    });
  });
  return;  
}

function requestToVote(reqUrl, targetId) {
	    const req = new XMLHttpRequest();
	    let reqData =  {
    name: targetId,
    vote:'1'
  } 
  const urlParams = `name=${targetId}&vote=1`;

		   req.open("POST", reqUrl, true);
	    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    req.send(urlParams);

	    req.onreadystatechange = function(e) { 
		            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
				                console.log("Got response 200!");
				    let res = e.target.response
				    res = JSON.parse(res)
				            } else {
      console.log('Got an error while getting response')
					    }
		        }
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

      chrome.tabs.sendMessage(
        tabs[0].id,
        {
	  name: buttonName === 'STOP Extension' ? localStorage.pointerName : targetId,
          path: buttonName === 'STOP Extension' ? localStorage.pointerPath : '',
          type: buttonName === 'STOP Extension' ? 'moving' : targetId,
          sender: 'popup'}
      );

    });
	  
  });
}

function stopEvent(func, targetId) {
  let stopButton =  func(targetId);
  stopButton.innerHTML === 'STOP Extension' ? 
    stopButton.innerHTML = 'START Extension' : 
    stopButton.innerHTML = 'STOP Extension';
  return stopButton.innerHTML;
}

async function getVoteFromServer() {
  const reqUrl = 'http://localhost:80/vote';	
  const req = new XMLHttpRequest();
  console.log('req')
		   req.open("GET", reqUrl, true);
  req.send();
	    req.onreadystatechange = function(e) { 
		            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
				                console.log("Got response 200!");
				    let res = e.target.response
				    res = JSON.parse(res)
				    console.log(res)
				            } else {
      console.log('Got an error while getting response')
					    }
		        }
}

getVoteFromServer();

chrome.storage.sync.get(['name'], function(result) {
	  console.log('Value currently is ' + JSON.stringify(result));
});

let bubble = './images/bubble/bubble32.png'
let letter = './images/letter/letter32.png'
let snowflake = './images/snow/snowflake32.png'
let heart = './images/heart/heart32.png'
let heart1 = './images/heart1/heart132.png'
let colorfulBall = './images/co/colorfulBall32.png'
let strawblueberry = './images/strawblueberry/strawblueberry32.png'
let bunny = './images/bunny/bunny32.png';
let dna = './images/dna/dna32.png';
let card = './images/card/card32.png';
let atom = './images/atom/atom32.png';
let petal = './images/petal/petal32.png';
let float = './images/float/float32.png';
let springCooler = './images/spring/springCooler32.png';
let colorSpring = './images/colorSpring/colorSpring32.png';
let coins = './images/coins/coins32.png';
startPointerFunction('bubble', bubble, 'moving');
startPointerFunction('letter', letter, 'moving');
startPointerFunction('snowflake', snowflake, 'moving');
startPointerFunction('heart', heart, 'moving');
startPointerFunction('heart1', heart1, 'moving');
startPointerFunction('colorfulBall', colorfulBall, 'moving');
startPointerFunction('strawblueberry', strawblueberry, 'moving');
startPointerFunction('bunny', bunny, 'moving');
startPointerFunction('dna', dna, 'moving');
startPointerFunction('card', card, 'moving');
startPointerFunction('atom', atom, 'moving');
startPointerFunction('petal', petal, 'moving');
startPointerFunction('float', float, 'moving');
startPointerFunction('springCooler', springCooler, 'moving');
startPointerFunction('colorSpring', colorSpring, 'moving');
startPointerFunction('coins', coins, 'moving');
triggerStop(buttonElement, 'stop');

if (localStorage.type === 'stop') buttonElement('stop').innerHTML = 'START Extension';

