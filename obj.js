let functionObj = {};
let pngPaths = {
  "bubble": './images/bubble/bubble32.png'
    
  ,"letter": './images/letter/letter32.png'
    
  //,"snowflake": './images/snow/snowflake32.png'
  
  ,"heart": './images/heart/heart32.png'
  ,"colorfulBall": './images/co/colorfulBall32.png'
  ,"dna": './images/dna/dna32.png'
  ,"petal": './images/petal/petal32.png'
  ,"float": './images/float/float32.png'
  /*
  ,"card": './images/card/card32.png'
  ,"atom": './images/atom/atom32.png'
  ,"bunny": './images/bunny/bunny32.png'
  */
  }

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

function executeObjFunc(msgName) {
for (const [key, val] of Object.entries(functionObj[msgName])) {
  if (key !== 'mouse' && typeof val === 'function') {
  val();
  } else if( typeof val === 'object') { 
  executeEvents(val, msgName);
  }
	console.log(key, val);
}

}

functionObj.bubble = {};

functionObj.bubble.mouse = {}

functionObj.bubble.mouse.mousemove = {};

functionObj.bubble.mouse.mousemove = bubble;

functionObj.letter = {};

functionObj.letter.mouse = {}

functionObj.letter.mouse.mousemove = {};

functionObj.letter.mouse.mousemove = letter;

functionObj.snowflake = {};

functionObj.snowflake.mouse = {};

functionObj.snowflake.mouse.mousemove = {};

functionObj.snowflake.mouse.mousemove = snowflake;
