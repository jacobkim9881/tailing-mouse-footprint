let functionObj = {};

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

functionObj.snowflake = {};

functionObj.snowflake.mouse = {};

functionObj.snowflake.mouse.mousemove = {};

functionObj.snowflake.mouse.mousemove = snowflake;
