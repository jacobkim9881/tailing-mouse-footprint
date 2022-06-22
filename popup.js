function createAnimationButton(targetId) {
 //OB return document.getElementById(targetId);
	console.log(targetId)
  let buttonTag = document.createElement('iframe')
, spanTag = document.createElement('span')
, newScript = document.createElement('script')	
 buttonTag.id = targetId + '-button';
 buttonTag.className = 'mousemove';	
 buttonTag.style.width = '260px'
 buttonTag.style.height = '70px'	
 spanTag.className = 'buttonDiv';
 spanTag.appendChild(buttonTag);
 console.log(buttonTag.contentWindow) 
 newScript.innerHTML = 'console.log("from newScript")'	
// buttonTag.contentWindow.document.appendChild(newScript)	
 icons.appendChild(spanTag);	
 return buttonTag		
}

function buttonElement(targetId) {
 return document.getElementById(targetId);  	
}

function setButtonImage(targetId, targetUrl) {
  buttonElement(targetId).style.backgroundImage = `url(${targetUrl})`;
  return
}

//function addClickEvent(ele, targetId, targetUrl, type) {
function addClickEvent(ele, targetId, type) {
//  func(targetId).addEventListener('click', () => {
	
let newScript = document.createElement('script')	
	newScript.innerHTML = `
document.body.style.backgroundColor = "black";
	`;	
 ele.contentWindow.document.body.appendChild(newScript);	
  ele.contentWindow.document.addEventListener('click', () => { 
	  console.log('clicked')
    let stopButton = buttonElement('stop');
    if (stopButton.innerHTML === 'START Extension') {
	  stopButton.innerHTML= 'STOP Extension'};
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
     
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          name: targetId, 
//          path: targetUrl, 
	  type: type,
  	  eventName: ele.className ,
          isItOn: true,
          sender: 'popup'}
      );
      /*
      chrome.runtime.onMessage.addListener((msg, _, sendRes) => {
        chrome.action.setIcon({path: targetUrl,
          tabId: tabs[0].id
        });
      });
     */ 
    });

  });
  return;  
}


function addHoverEventInPopup(ele, targetId, eve) {
//console.log(functionObj)
//console.log(ele)
console.log(eve)
let eObj = {
"clientX": ele.offsetLeft + 50,
"clientY": ele.offsetTop + 38	
}
console.log(eObj)
/*
let aniEvent = setInterval(() => {
//    functionObj[targetId].mouse.mousemove(eObj)	   
  eve(eObj)
  }, 200)	 
  //setInterval, addEvent, removeEvent
	
	ele.addEventListener('mouseover', () => {
		console.log('moved', targetId)
		ele.addEventListener('mousemove', eve);
		//ele.addEventListener('mousemove', functionObj[targetId].mouse.mousemove);
    clearInterval(aniEvent)
	});

		//functionObj[targetId].mouse.mousemove) 
  ele.addEventListener('mouseout', (e) => {  
     ele.removeEventListener('mousemove', eve);
     //ele.removeEventListener('mousemove', functionObj[targetId].mouse.mousemove);
     aniEvent = setInterval(() => {
     eve(eObj)
      //functionObj[targetId].mouse.mousemove(eObj)	   
    }, 200)	 
  })
*/
}

function startPointerFunction(targetId, targetUrl, type, eventFunction) {
  let buttonEle = createAnimationButton(targetId);
  buttonElement(targetId);
//  setButtonImage(targetId, targetUrl);
//  addClickEvent(buttonElement, targetId, targetUrl, type);	
  addClickEvent(buttonEle, targetId, type);
  addHoverEventInPopup(buttonEle, targetId, eventFunction);	
  return;
}

function triggerStop(func, targetId) {
  func(targetId).addEventListener('click', () => {
 

    let buttonName = ''
    if (targetId === 'stop') buttonName = stopEvent(func, targetId);

    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {

      chrome.storage.local.get(['msg'], function(res){
	      console.log(res)
	      console.log(targetId)
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
	  name: res.msg.name,
          path: res.msg.path,
          type: buttonName !== 'STOP Extension' ? targetId : 'moving',
          sender: 'popup'}
      );
      })
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
/*
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
let digital = './images/digital/digital32.png';
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
startPointerFunction('digital', digital, 'moving');
*/

let targets = [ // add new feature name here 
	/*
		'bubble', 'letter', 'snowflake', 'heart', 'heart1', 
		'colorfulBall', 'strawblueberry', 'bunny', 'dna', 'card', 
		'atom', 'petal', 'float', 'springCooler', 'colorSpring', 
		'coins', 'digital'i
	*/
	{"bubble" : mouseEventBubble},
	{"letter" : mouseEventLetter},
	{"snowflake" : mouseEventSnowflake},
	{"heart" : mouseEventHeart}, 
	{"heart1" : mouseEventHeart1},
	{"colorfulBall" : mouseEventColorfulBall},
	{"strawblueberry" : mouseEventStrawblueberry},
	{"bunny" : mouseEventBunny},
	{"dna" : mouseEventDna},
	{"card" : mouseEventCard},
	{"atom" : mouseEventAtom},
	{"petal" : mouseEventPetal},
	{"float" : mouseEventFloat},
	{"springCooler" : mouseEventSpringCooler},
	{"colorSpring" : mouseEventColorSpring},
	{"coins" : mouseEventCoins},
	{"digital" : mouseEventDigital}
		]
for (let i = 0; i < targets.length; i++ ){

//for (const [key, val] of Object.entries(targets)){
let key = Object.keys(targets[i])[0]
, val = Object.values(targets[i])[0]
console.log(i)	
let path = `./images/${targets[i]}/${targets[i]}32.png`
//let path = `./images/${key}/${key}32.png`
let functionScript = document.createElement('script');	

//functionScript.src = `/functions/${key}.js`
startPointerFunction(key, path, 'moving', val);
}

triggerStop(buttonElement, 'stop');

      chrome.storage.local.get(['msg'], function(res){
	if(res.msg.type === 'stop') buttonElement('stop').innerHTML = 'START Extension';

console.log(res)
      })
