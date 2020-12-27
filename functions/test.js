//bunny.js
localStorage.mouseObjArr = ['face', "green0", "leaf0", "leaf1", "leaf2", "leaf3", "leaf4", "leaf5", "leaf6", "leaf7", "leaf8", "leaf9", "leaf10", "leaf11", "leaf12", "leaf13", "leaf14", "leaf15", "leaf16", "leaf17", "leaf18", "leaf19", "leaf20", "leaf21", "leaf22", "leaf23", "leaf24", "leaf25", "leaf26", "leaf27", "leaf28", "leaf29", "leaf30", "leaf31", "leaf32", "leaf33", "leaf34", "leaf35"];

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

function stylingFace({h, s, l, h1, s1, l1}) {
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
  getId('face').style.backgroundImage = `radial-gradient(hsl(${h}, ${s}%, ${l}%), hsl(${h1}, ${s1}%, ${l1}%))`;

}

function stylingLeaf({id, top, left, skewness, h, s, l, h1, s1, l1}) {
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
  getId(id).className = 'leafs';	
  getId(id).style.borderRadius = '100% 100% 50% 50%';
  getId(id).style.backgroundImage = `linear-gradient(hsl(${h}, ${s}%, ${l}%), hsl(${h1}, ${s1}%, ${l1}%)`;

}

function stylingGreen({id}) {
  const config = {
    element: getId(id),
    position: 'fixed',
    left: 50,
    top: 230,
    width: 80,
    height: 330,
    borderRadius: '50%',
    zIndex: 0,
    backgroundColor: {h: 0, s:0, l:0},
    transform: `rotate(${0}deg)`
  }
  objProto(config);
  getId(id).style.borderLeft = '20px solid green';
  getId(id).style.backgroundColor = 'hsl(0, 100%, 50%, 0)';
}

function onclickEvent(e) {
  /* 
   name: 'Aster',
  	    face: {h: ,s: , l: ,h1: , s1: ,l1: },
	    leaf: {h: ,s: , l: ,h1: , s1: ,l1: }
  */
  let flowers = [
    {
	    name: 'Aster',
  	    face: "radial-gradient(hsl(63, 100%, 50%), hsl(45, 100%, 50%))",
	    leaf: "linear-gradient(hsl(300, 100%, 90%), hsl(300, 100%, 77%))"

    },
    {
	    name: 'Black-eye-susan',
  	    face: "radial-gradient(hsl(29, 100%, 10%), hsl(29, 100%, 15%))",
	    leaf: "linear-gradient(hsl(55, 100%, 50%), hsl(55, 100%, 40%))"

    },
    {
	    name: 'orange-pink',
  	    face: "radial-gradient(hsl(29, 100%, 10%), hsl(29, 33%, 48%))",
	    leaf: "linear-gradient(hsl(20, 100%, 65%), hsl(300, 100%, 85%))"

    }


  ]
  let randomNum = Math.trunc(Math.random() * (flowers.length));
	console.log(randomNum)
  getId('face').style.backgroundImage = flowers[randomNum].face;
  function resolveColor(id, time) {
    new Promise(() => {
      setTimeout(() => {
      id.style.backgroundImage = flowers[randomNum].leaf;
      },15 * parseInt(time, 10))	    
    })	 
  }
  async function asyncCall() {       
    let leafs = document.querySelectorAll('.leafs') 	 
    for (let leaf in leafs) {
     if (leafs[leaf].className){ 	    
     await resolveColor(leafs[leaf], leaf);
     }
    }
  }

  asyncCall();	
}

function mouseEvent(e) {

  function trigger(e, moveX) {
    let none = null;
    stylingFace({h:22 ,s:100 , l:16 ,h1:22 , s1:100 ,l1:31 });
//232, 100%, 50%), hsl(63, 100%, 50%)

    stylingLeaf({id: `leaf0`, top: 0, left: 114, skewness:-0, h:232 ,s:100 , l:50 ,h1:63 , s1:100 ,l1:50 });
    stylingLeaf({id: `leaf1`, top: 170, left: 114, skewness:180, h:232 ,s:100 , l:50 ,h1:63 , s1:100 ,l1:50 });
    stylingLeaf({id: `leaf2`, top: 85, left: 200, skewness:90, h:232 ,s:100 , l:50 ,h1:63 , s1:100 ,l1:50 });	  
    stylingLeaf({id: `leaf3`, top: 85, left: 40, skewness:-90, h:232 ,s:100 , l:50 ,h1:63 , s1:100 ,l1:50 });

    stylingLeaf({id: `leaf4`, top: 25, left: 174, skewness:45, h:232 ,s:100 , l:50 ,h1:63 , s1:100 ,l1:50 });
    stylingLeaf({id: `leaf5`, top: 135, left: 174, skewness:135, h:232 ,s:100 , l:50 ,h1:63 , s1:100 ,l1:50 });
    stylingLeaf({id: `leaf6`, top:135,  left: 54, skewness:-135, h:232 ,s:100 , l:50 ,h1:63 , s1:100 ,l1:50 });
    stylingLeaf({id: `leaf7`, top: 25,left: 54, skewness:-45, h:232 ,s:100 , l:50 ,h1:63 , s1:100 ,l1:50 });
	  
    stylingLeaf({id: `leaf8`, top: 12, left: 134, skewness:22, h:232 ,s:100 , l:50 ,h1:63 , s1:100 ,l1:50 });
    stylingLeaf({id: `leaf9`, top: 147, left: 134, skewness:157, h:232 ,s:100 , l:50 ,h1:63 , s1:100 ,l1:50 });
    stylingLeaf({id: `leaf10`,top: 147, left: 74, skewness:-157, h:232 ,s:100 , l:50 ,h1:63 , s1:100 ,l1:50 });
    stylingLeaf({id: `leaf11`,top: 12, left: 74, skewness:-22, h:232 ,s:100 , l:50 ,h1:63 , s1:100 ,l1:50 });

    stylingLeaf({id: `leaf12`, top: 55, left: 186, skewness:67, h:232 ,s:100 , l:50 ,h1:63 , s1:100 ,l1:50 });
    stylingLeaf({id: `leaf13`, top: 110, left: 186, skewness:112, h:232 ,s:100 , l:50 ,h1:63 , s1:100 ,l1:50 });
    stylingLeaf({id: `leaf14`,top: 110, left: 47, skewness:-112, h:232 ,s:100 , l:50 ,h1:63 , s1:100 ,l1:50 });
    stylingLeaf({id: `leaf15`,top: 55, left: 47, skewness:-67, h:232 ,s:100 , l:50 ,h1:63 , s1:100 ,l1:50 });

    stylingGreen({id: "green0"});	  
      return;
  }
  let num = parseInt(localStorage.mouseCounter);
  localStorage.mouseCounter = num + 1;
  trigger(e, 0);  
  getId('grpDivs').style.transform = `scale(0.1, 0.1)`;
  getId('grpDivs').style.position = 'fixed';
  getId('grpDivs').style.top = e.clientY + 'px';
  getId('grpDivs').style.left = (e.clientX + 10 )+ 'px';
}

//createObj
createObjs();

document.body.addEventListener('mousemove', mouseEvent);
document.body.addEventListener('click', onclickEvent);

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.name === 'bunny') {
    document.getElementById('grpDivs').style.display = 'block'; 
  } else {
    document.getElementById('grpDivs').style.display = 'none';
    document.body.removeEventListener('mousemove', mouseEvent);
  }
});
