//
let shortcutObj = {
["bubble"] : {
  ["Obj"]: function (x, y, t, title) {
  let obj = document.createElement('div');
  let parentEl = document.getElementById(title);  
  let ran10 = Math.trunc(Math.random() * 10) + 5;
  let ranXpos = Math.trunc(Math.random() * ran10) + parseInt(x, 10);
  let ranYpos = Math.trunc(Math.random()) + parseInt(y, 10);
  let ran20 = ranYpos - 10;
  obj.className = 'bubble';	
  obj.style.position = 'relative';
  obj.style.backgroundImage = `linear-gradient(to bottom right, hsl(170, 100%, 50%), hsl(170, 100%, 0%)`;
  obj.style.borderRadius = '50%';  
  obj.animate([
    {top: ranYpos + 'px',
      left: x + 'px',
      width: 5 + 'px',
      height: 5 + 'px' 
    }, 
    {top: ran20 + 'px',
      left: ranXpos + 'px',
      width: ran10 + 'px',
      height: ran10 + 'px' 
    }
  ], 500)

  parentEl.appendChild(obj);
  setTimeout(() => obj.remove(), 500);
}

}
}

let animationObj = {
 ["bubble"] : function () {
 for (let i = 0; i < 10; i++) {
  setTimeout(() => shortcutObj["bubble"]["Obj"](i * 25, i * 2, i, "bubble"), i * 200);
 }
}

}
function startAnimation(func) {
 for (let i = 0; i < 10; i++) {
  setTimeout(() => shortcutObj[func](i * 25, i * 2, i, func), i * 200);
 }
}

