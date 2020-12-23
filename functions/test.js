//bunny.js
localStorage.mouseObjArr = ['face',"leaf0", "leaf1", "leaf2", "leaf3", "leaf4", "leaf5", "leaf6", "leaf7", "leaf8", "leaf9", "leaf10", "leaf11", "leaf12", "leaf13", "leaf14", "leaf15", "leaf16", "leaf17", "leaf18", "leaf19", "leaf20", "leaf21", "leaf22", "leaf23", "leaf24", "leaf25", "leaf26", "leaf27", "leaf28", "leaf29", "leaf30", "leaf31", "leaf32", "leaf33", "leaf34", "leaf35"];

function createObjs() {
  let grpDivs = document.createElement('div');
  grpDivs.id = 'grpDivs'
  let ids = localStorage.mouseObjArr.match(/[^,]\w+/gi);
  for (let oneId in ids) {
    let arr =  document.createElement('div')
    arr.id = ids[oneId];
    grpDivs.appendChild(arr);
  }
  document.body.appendChild(grpDivs);
}

function deleteObjs() {
  let ids = localStorage.mouseObjArr.match(/[^,]\w+/gi);
  for (let oneId in ids) {
    let ele = document.getElementById(ids[oneId]);
  }

}

function objProto({element, position, left, top, width, height, borderRadius, zIndex, backgroundColor:{h,s,l}, transform}) {
  element.style.position = position;
  element.style.left = left + 'px';
  element.style.top = top + 'px';
  element.style.width = width +  'px';
  element.style.height = height + 'px';
  element.style.borderRadius = borderRadius;
  element.style.zIndex = zIndex;
  element.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
  element.style.transform = transform;

}

function getId(id) {
  return document.getElementById(id);
}

function stylingFace() {
  const config = {
    element: getId('face'),
    position: 'fixed',
    left: 100,
    top: 110,
    width: 80,
    height: 80,
    borderRadius: 50 + 'px',
    zIndex: 1,
    backgroundColor: {h: 0, s: 0, l: 0},
    transform: 'none'	

  }
  objProto(config);
  getId('face').style.backgroundImage = 'radial-gradient(hsl(22, 100%, 16%), hsl(22, 100%, 31%))';

}

function stylingEar({id, top, left, skewness}) {
  const config = {
    element: getId(id),
    position: 'fixed',
    left: left,
    top: top,
    width: 50,
    height: 130,
    borderRadius: '',
    zIndex: 0,
    backgroundColor: {h: 0, s: 0, l: 0},
    transform: `rotate(${skewness}deg)`
  }
  objProto(config);
  getId(id).style.borderRadius = '100% 100% 50% 50%';
  getId(id).style.backgroundImage = 'linear-gradient(hsl(232, 100%, 50%), hsl(63, 100%, 50%)';

}
function mouseEvent(e) {

  function trigger(e, moveX) {
    let none = null;
    stylingFace();
  
    stylingEar({id: `leaf0`, top: 0, left: 114, skewness:-0});
    stylingEar({id: `leaf1`, top: 170, left: 114, skewness:180});
    stylingEar({id: `leaf2`, top: 85, left: 200, skewness:90});	  
    stylingEar({id: `leaf3`, top: 85, left: 40, skewness:-90});

    stylingEar({id: `leaf4`, top: 25, left: 174, skewness:45});
    stylingEar({id: `leaf5`, top: 135, left: 174, skewness:135});
    stylingEar({id: `leaf6`, top:135,  left: 54, skewness:-135});
    stylingEar({id: `leaf7`, top: 25,left: 54, skewness:-45});
	  
    stylingEar({id: `leaf8`, top: 12, left: 134, skewness:22});
    stylingEar({id: `leaf9`, top: 147, left: 134, skewness:157});
    stylingEar({id: `leaf10`,top: 147, left: 74, skewness:-157});
    stylingEar({id: `leaf11`,top: 12, left: 74, skewness:-22});

    stylingEar({id: `leaf12`, top: 55, left: 186, skewness:67});
    stylingEar({id: `leaf13`, top: 110, left: 186, skewness:112});
    stylingEar({id: `leaf14`,top: 110, left: 47, skewness:-112});
    stylingEar({id: `leaf15`,top: 55, left: 47, skewness:-67});

      return;
  }
  let num = parseInt(localStorage.mouseCounter);
  localStorage.mouseCounter = num + 1;
  trigger(e, 0);  
  getId('grpDivs').style.transform = `scale(0.2, 0.2)`;
  getId('grpDivs').style.position = 'fixed';
  getId('grpDivs').style.top = e.clientY + 'px';
  getId('grpDivs').style.left = e.clientX + 'px';
}

//createObj
createObjs();

document.body.addEventListener('mousemove', mouseEvent);
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.name === 'bunny') {
    document.getElementById('grpDivs').style.display = 'block'; 
  } else {
    document.getElementById('grpDivs').style.display = 'none';
    document.body.removeEventListener('mousemove', mouseEvent);
  }
});
