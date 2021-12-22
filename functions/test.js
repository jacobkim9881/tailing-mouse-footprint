//test.js
function mouseEvent(e) {

  function trigger(e) {
  let obj = document.getElementsByClassName('objs-test')[0];
  let ballSize = window.innerWidth/100;
  let randomBallSize = Math.trunc(Math.random() * ballSize) + 20;
  obj.style.top = e.clientY + 'px';
  obj.style.left = e.clientX + 'px';
  obj.style.width = randomBallSize + 'px';
  obj.style.height = randomBallSize + 'px';
  
  document.body.appendChild(obj);
  //setTimeout(() => obj.remove(), 700);
  return;
  }
  let num = parseInt(localStorage.mouseCounter);
  localStorage.mouseCounter = num + 1;
  if (num %  1 === 0 ) {
   trigger(e);
  }
}

function setObjs() {
  let oClass = {
   class: 'objs-test',
   width: '15px',
   height: '45px',
   border: '1px solid white',	  
   backgroundColor : 'none',
   top: (window.innerHeight -100) + 'px'
  };
  //cntWidth = Math.trunc(window.innerWidth / 45);
  //for (let i = 0; i < cntWidth; i++) {
    let oneObj = document.createElement('div');
    //oneObj.id = oClass.class + i;
    oneObj.className = oClass.class;	  
    /*
    oneObj.style.width = oClass.width;
    oneObj.style.height = oClass.height;
//    oneObj.style.backgroundColor = oClass.backgroundColor;
    oneObj.style.top = oClass.top;
    oneObj.style.left = 50 + i * 45 + 'px';
    */
    oneObj.style.position = 'fixed';
    //oneObj.style.border = oClass.border;	
    document.body.appendChild(oneObj);	  
  //}

}

setObjs();

let animateObj = () => {
  let obj = document.getElementsByClassName('objs-test')[0];  
  obj.style.backgroundColor = `hsl(31, 100%, 50%)`;
  obj.style.borderRadius = '50%';  
  let styleInfo1 = {}
  styleInfo1.bg = [];
  styleInfo1.rd = [];
  if (!localStorage.tmfStyle) {
    for (let i = 0; i < 4; i++) {
      if (i <= 3) {
        if (i === 0) styleInfo1.bg.push(Math.random() * 360)
        else styleInfo1.bg.push(Math.trunc(Math.random() * 100))
      }
      if (i <= 4) styleInfo1.rd.push(Math.trunc(Math.random() * 100))
    }  
  } else {
    styleInfo1 = JSON.parse(localStorage.tmfStyle);  
  }
  
  let styleInfo = {}
  styleInfo.bg = [];
  styleInfo.rd = [];
  for (let i = 0; i < 4; i++) {
    if (i <= 3) {
      if (i === 0) styleInfo.bg.push(Math.random() * 360)
      else styleInfo.bg.push(Math.trunc(Math.random() * 100))
    }
    if (i <= 4) styleInfo.rd.push(Math.trunc(Math.random() * 100))
  }
  
  obj.animate([
    {backgroundColor: `hsl(${styleInfo1.bg[0]}, ${styleInfo1.bg[1]}%, ${styleInfo1.bg[2]}%`
     , borderRadius: `${styleInfo1.rd[0]}% ${styleInfo1.rd[1]}% ${styleInfo1.rd[2]}% ${styleInfo1.rd[3]}%`},      
      {backgroundColor: `hsl(${styleInfo.bg[0]}, ${styleInfo.bg[1]}%, ${styleInfo.bg[2]}%`
      , borderRadius: `${styleInfo.rd[0]}% ${styleInfo.rd[1]}% ${styleInfo.rd[2]}% ${styleInfo.rd[3]}%`},      
  ], {duration: 700,
      timing(timeFraction) {
      return 1 - Math.sin(Math.acos(timeFraction))}
  })
  localStorage.tmfStyle = JSON.stringify(styleInfo);
}
setInterval(animateObj, 700);
document.body.addEventListener('mousemove', mouseEvent);

chrome.runtime.onMessage.addListener((msg) => {
document.body.removeEventListener('mousemove', mouseEvent);
clearInterval(animateObj);
});
