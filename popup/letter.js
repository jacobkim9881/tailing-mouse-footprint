shortcutObj["letter"] = {};
shortcutObj["letter"]["Obj"] = function (x, y, t) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let obj = document.createElement('div');
  let ranXpos = Math.trunc(Math.random()) + parseInt(x, 10);
  let parentEl = document.getElementById("letter");  
  let ranYpos = Math.trunc(Math.random() * -25) + parseInt(y, 10);
  let ran15 = Math.trunc(Math.random() * 20) + 5;
  let ranAlpha = Math.trunc(Math.random() * alphabet.length);
  obj.style.zIndex = '3'	
  obj.style.position = 'relative';
  obj.style.top = ranYpos + 'px';
  obj.style.left = ranXpos + 'px';
  obj.innerText = alphabet[ranAlpha];
  obj.style.textAlign = "left";	
  obj.style.fontSize = ran15 + 'px';
  obj.animate([
    {opacity: 1}, 
    {opacity: 0}
  ], 200) 
  
  parentEl.appendChild(obj);
  setTimeout(() => obj.remove(), 200);
  return;

}

animationObj["letter"] = {};
animationObj["letter"] = function() {
 for (let i = 0; i < 10; i++) {
  setTimeout(() => shortcutObj["letter"]["Obj"](i * 25, i * 3, i), i * 200);
 }
}
